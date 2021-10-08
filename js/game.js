window.onload = function(){                                            // Code

let turn= "X"                                   //to set if X's turn or O's turn

const winningCombinations = [                  // all possible win combinations
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

                                                    // to restart game on click
  let newGame= function () {

    let sqrElementArray = document.getElementsByClassName("cell");
                                         // / to convert type from obj to array
    [...sqrElementArray].forEach((item) => {
      item.innerHTML= ""
    });
  }

  newGameButton.addEventListener('click', newGame);



  let currentMoves = [                      // to store indices of current moves
    '', '', '',
    '', '', '',
    '', '', ''
  ];

  const setChoice= function (grid){                 // to swap turns from X to O

    if (turn == "X"){
      grid.innerHTML="X"
      turn = "O"
      currentMoves[grid.id]="X"
      checkWin();
    }
    else {
      grid.innerHTML="O"
      currentMoves[grid.id]="O"
      turn= "X"
      checkWin();
    }


  let drawValue = isDraw();

    if ( drawValue == true) {

      let drawMessage= document.getElementById("winningMessage")
      drawMessage.innerHTML="Tough game! It's a draw ☹️";

      drawMessage.classList.add("show");

      setTimeout(function(){drawMessage.classList.remove("show"); window.location.reload();}, 3000);
    }
  };

                                         // itteration through win combinations
  const checkWin = function(){

    for(let i=0; i<winningCombinations.length; i++){

      if (currentMoves[winningCombinations[i][0]] === "X" && currentMoves[winningCombinations[i][1]] === "X" && currentMoves[winningCombinations[i][2]] === "X") {


      let winMessage=  document.getElementById('winningMessage')
      winMessage.innerHTML="The game goes to X 👑";

      winMessage.classList.add("show");

      setTimeout(function(){ winMessage.classList.remove("show"); window.location.reload(); }, 3000);
      }
    }

    for(let i=0; i<winningCombinations.length; i++){

      if (currentMoves[winningCombinations[i][0]] === "O" && currentMoves[winningCombinations[i][1]] === "O" && currentMoves[winningCombinations[i][2]] === "O") {


      let winMessage=  document.getElementById('winningMessage')
      winMessage.innerHTML="The game goes to O 👑";

      winMessage.classList.add("show");

      setTimeout(function(){ winMessage.classList.remove("show"); window.location.reload(); }, 3000);
      }
    }

  }

    const isDraw= function (){

    let checkDraw = true;
      allDiv.forEach((item, i) => {

    if (item.innerHTML != "X" && item.innerHTML != "O") {
      checkDraw = false;
    }
  });

  return checkDraw
};

                                                //  event listener to swap turns
  Array.from(allDiv).forEach((div, i) => {
  div.addEventListener('click',setChoice.bind(event,div), {once: true});
  });
}
