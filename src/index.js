import { Gameboard } from "./gameboard.js";
import { Player } from "./player.js";
import { renderBoard } from "./domcontroller.js";
import './battleShip.css';

const user = Player('User');
const computer = Player('Computer');

const userBoard = Gameboard();
const computerBoard = Gameboard();

user.setGameboard(userBoard);
computer.setGameboard(computerBoard);

computer.autoPlaceFleet();
user.autoPlaceFleet();

renderBoard(userBoard.getBoard(), computerBoard.getBoard());


let currentPlayer = user;

export function handlePlayerClick(x,y) {
  if (currentPlayer === user) {

    const result = user.attack(x, y, computerBoard);

    if (result === 'hit') {
      alert('Hit!');
    } else if (result === 'miss') {
      alert('Miss!');
    }

     if (computerBoard.allShipsSunk()) {
    alert('¡You won!');
    reload()
    return;
    }

    currentPlayer = computer;
    
    renderBoard(userBoard.getBoard(), computerBoard.getBoard());


    setTimeout(() => {
    const result = currentPlayer.attack(null, null, userBoard); // Computer's turn (random shot)
    renderBoard(userBoard.getBoard(), computerBoard.getBoard());

    if (userBoard.allShipsSunk()) {
      alert('Computer wins... :(');
      reload()
      return;
    }

    currentPlayer = user;
    }, 500);


  }
}


