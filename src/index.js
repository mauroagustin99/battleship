import { Gameboard } from "./gameboard.js";
import { Player } from "./player.js";
import { renderBoard, showFleet, reload, randomPlaceShips, gameInfo } from "./domcontroller.js";
import './battleShip.css';

const user = Player('User');
const computer = Player('Computer');

const userBoard = Gameboard();
const computerBoard = Gameboard();

user.setGameboard(userBoard);
computer.setGameboard(computerBoard);



computer.autoPlaceFleet();

renderBoard(user, computer);
showFleet(user);

randomPlaceShips(user,computer);



let currentPlayer = user;

export function handlePlayerClick(x,y) {
  gameInfo(currentPlayer);
  if (currentPlayer === user) {

    const result = user.attack(x, y, computerBoard);

    if (result === 'hit') {
      showFleet(user);
    } else if (result === 'miss') {
    }

     if (computerBoard.allShipsSunk()) {
    alert('¡You won!');
    reload();
    return;
    }

    if (user.getRemainingFleet().length === 0){
      currentPlayer = computer;
      gameInfo(currentPlayer);
    
  
    
    renderBoard(user, computer);


    setTimeout(() => {
      

    const result = currentPlayer.attack(null, null, userBoard); // Computer's turn (random shot)
    renderBoard(user, computer);

    if (userBoard.allShipsSunk() ) {
      alert('Computer wins... :(');
      reload()
      return;
    }

    currentPlayer = user;
    gameInfo(currentPlayer);
    }, 800);


  }}
}


