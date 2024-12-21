function computerLogic(){
  const val = Math.random();
  console.log(val);
  let game = ''
  if(val < 1/3){
    game = 'Rock';
  }
  else if((1/3 <= val) && (val < 2/3)){
    game = 'Paper';
  }
  else if((2/3 <= val) && (val < 1)){
    game = 'Scissor';
  }
  return game;
}

function yourMove(move){
  const newVal = computerLogic();
  let result = '';
  if(move === 'Rock'){
    if(newVal === 'Rock'){
      result = 'Tie';
    }
    else if(newVal === 'Paper'){
      result = 'You Lost';
    }
    else if(newVal === 'Scissor'){
      result = 'You Won';
    }
  }
  else if(move === 'Paper'){
    if(newVal === 'Rock'){
      result = 'You Won';
    }
    else if(newVal === 'Paper'){
      result = 'Tie';
    }
    else if(newVal === 'Scissor'){
      result = 'You Lost';
    }
  }
  else if(move === 'Scissor'){
    if(newVal === 'Rock'){
      result = 'You Lost';
    }
    else if(newVal === 'Paper'){
      result = 'You Won';
    }
    else if(newVal === 'Scissor'){
      result = 'Tie';
    }
  }
  if(result === 'You Won'){
    score.Wins += 1; 
  }
  else if (result === 'You Lost'){
    score.Losses += 1;
  }
  else if(result === 'Tie'){
    score.Tie += 1;
  }
  document.querySelector('.display').innerText = result;
  updateScore();
}
let score = {
  Wins:0,
  Losses:0,
  Tie:0
}

  let scoreSerialized = JSON.stringify(score);
  localStorage.setItem("scoreSerialized",scoreSerialized);
  let scoreDeserialized = localStorage.getItem(JSON.parse("scoreSerialized"))

function updateScore(){
document.querySelector('.second-display').innerHTML = `Wins = ${score.Wins}, Losses = ${score.Losses}, Tie = ${score.Tie}`;}

function resetButton(){
  score.Losses = 0;
  score.Tie = 0;
  score. Wins = 0;
  document.querySelector('.second-display').innerHTML = `Wins = ${score.Wins}, Losses = ${score.Losses}, Tie = ${score.Tie}`;
}