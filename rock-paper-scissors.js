let score = JSON.parse(localStorage.getItem('score')) ||{ wins: 0,
    losses: 0,
    ties: 0
  };


  function pickcomputerMove() {
    const randomNumber = Math.random();
    let computerMove = "";
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerMove = "rock";
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      computerMove = "paper";
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
      computerMove = "Scissors";
    }
    return computerMove;
  }

  function playGame(playerMove) {
    const computerMove = pickcomputerMove();
    let result = "";
    if(playerMove === 'Scissors'){
      if (computerMove === "rock") {
      result = "You Lose";
    } else if (computerMove === "paper") {
      result = "You won";
    } else if (computerMove === "Scissors") {
      result = "Tie";
    }
    
    } else if(playerMove == 'Paper'){
        if(computerMove === 'rock'){
           result = 'You won';
    }else if(computerMove === 'paper'){
       result = 'Tie';
    }else if (computerMove === 'Scissors'){
    result = 'You Lose';
    }

    }else if(playerMove === 'Rock'){
      if(computerMove === 'rock'){
        result = 'Tie';
    }else if(computerMove === 'paper'){
        result = 'You Lose';
    }else if (computerMove === 'Scissors'){
        result = 'You Won';
    }
    }
    if(result === 'You Won'){
      score.wins += 1;
    }
    else if(result === 'You Lose'){
      score.losses += 1;
    }
    else if (result === 'Tie'){
      score.ties += 1;
    }

    localStorage.setItem('score',JSON.stringify(score));
    updatescoreEl();

    document.querySelector('.js-result').
    innerHTML = result;

    document.querySelector('.js-moves'). 
    innerHTML = `Your Move <img src="images/${playerMove}.png" alt="" class="movimg">
<img src="images/${computerMove}.png" alt="" class="movimg">
Computer's Move`;
  }
  function updatescoreEl(){
  document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
  }