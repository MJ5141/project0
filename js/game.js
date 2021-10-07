window.onload = function(){                                      // Code. . .


  let turn= "X"                                   //to set if X's turn or O's turn

  const winningCombinations = [               // all possible win combinations
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  const allDiv= document.querySelectorAll('[data-cell]');

  const newGameButton= document.getElementById("restartButton");



  let newGame= function () {                         // to restart game on click
    let sqrElementArray = document.getElementsByClassName("cell");

    [...sqrElementArray].forEach((item) => {  // to convert type from obj to array
      item.innerHTML= ""                                 // to empty all squares
    });
  }
  newGameButton.addEventListener('click', newGame);



  let currentMoves = [                     // to store indices of current moves
    '', '', '',
    '', '', '',
    '', '', ''
  ];
  console.log(currentMoves);

  const setChoice= function (grid){                   // to swap turns from X to O

    if (turn == "X"){
      // console.log("turn is x");
      grid.innerHTML="X"
      turn = "O"
      currentMoves[grid.id]="X"
      checkWin();
    } else {
      // console.log("turn is o");
      grid.innerHTML="O"
      currentMoves[grid.id]="O"
      turn= "X"
      checkWin();
    }

  };


  const checkWin = function(){            // itteration through win combinations
    for(let i=0; i<winningCombinations.length; i++){
      // console.log(winningCombinations[i][0]);

      if (currentMoves[winningCombinations[i][0]] === "X" && currentMoves[winningCombinations[i][1]] === "X" && currentMoves[winningCombinations[i][2]] === "X") {
        console.log('X wins');
      let winMessage=  document.getElementById('winningMessage')
      winMessage.innerHTML="X wins";
      console.log(winMessage);
      winMessage.classList.add("show");
        setTimeout(function(){ winMessage.classList.remove("show"); window.location.reload(); }, 3000);
      }
    }

    for(let i=0; i<winningCombinations.length; i++){
      // console.log(winningCombinations[i][0]);

      if (currentMoves[winningCombinations[i][0]] === "O" && currentMoves[winningCombinations[i][1]] === "O" && currentMoves[winningCombinations[i][2]] === "O") {
        console.log('o wins');
        let winMessage=  document.getElementById('winningMessage')
        winMessage.innerHTML="O wins";
        console.log(winMessage);
        winMessage.classList.add("show");
          setTimeout(function(){ winMessage.classList.remove("show"); window.location.reload(); }, 3000);
      }
    }

  }

  Array.from(allDiv).forEach((div, i) => {
    div.addEventListener('click',setChoice.bind(event,div), {once: true});
  });
}
