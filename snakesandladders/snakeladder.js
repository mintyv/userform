const showDie = document.querySelector('.die-image');
const rollDie = document.querySelector('.btn-roll');


// function createBoard() {
//   let board = document.getElementById("Board");

//   for (let i=0; i<10; i++) {
//     let row = board.insertRow(i);
//     row.className = "row-direction";

//     for (let j=0; j<10; j++) {
//       let cell = row.insertCell(j);
//       cell.innerHTML = ((i*10) + j + 1);
//       cell.className = "item";
 

//     }
//   }
// };


// window.rollDice = ()=> {
// const firstRandomNum = Math.floor(math.random() * 6) + 1
// const firstDiceImage = 'assets/dice' + firstRandomNum + '.png';
// const secondRandomNum = Math.floor(math.random() * 6) + 1
// const secondDiceImage = 'assets/dice' + secondRandomNum + '.png';

// document.querySelectorAll('img')[0].setAttribute('src', firstDiceImage);
// }





var hasWon = false;
window.rollDice = ()=>{
  if (hasWon) {
    return;
  }


  const max = 6;
  const roll = Math.ceil(Math.random() * max);
  console.log("You rolled", roll);
  let currentPlayer = players[currentPlayerTurn];
  currentPlayer.position += roll;
  ladders.forEach(ladder=>{
    if (ladder.start === currentPlayer.position); 
  });
  
  if (currentPlayer.position === position) {
    console.log("Player has won!");
    hasWon = true;
  }
  if (currentPlayer.position === position) {
    const diff = currentPlayer.position - position;
    currentPlayerPosition = position - diff;
  }
  
  currentPlayerTurn ++;
  if (currentPlayerTurn >= players.length) {
    currentPlayerTurn = 0;
  }
  renderBoard();
}

const players = [{
  name:"Rice",
  position: 0,
  color: "gold"
},{
  name:"Meat",
  position: 0,
  color: "purple"
}];

let currentPlayerTurn = 0;

const width = 10;
const height = 9;
const board = [];
let position = 0;
let blackSquare = false;
const ladders = [{
  start: 2,
  end: 22

}];

for (var y = height; y >= 0; y--) {
  let row = [];
  
  board.push(row);
  for (var x = 0; x < width; x++) {
    
    row.push({x,y,occupied:null,position,color: blackSquare ? "white" : "white"});
    blackSquare = !blackSquare;
    position ++;

    
  }
}




const boardSizeConst = 50;
const renderBoard = ()=>{
  let boardHTML = ``;
  board.forEach(row=>{
    row.forEach(square=>{
      boardHTML += `<div class=square style="top:${square.y * boardSizeConst}px; left:${square.x * boardSizeConst}px; background-color:${square.color}"></div>`
    
    
    
    
    });
  });
  
  players.forEach(player=>{
    let square = null;
    board.forEach(row=>{
    row.forEach(square=>{
          if (square.position === player.position) {
            boardHTML += `<div class=player style="top:${square.y * boardSizeConst + 5}px; left:${square.x * boardSizeConst + 6}px;background-color:${player.color}"></div>`;
          }
      });
    });
  });
  
   
  document.getElementById("board").innerHTML = boardHTML;
}





renderBoard();

