import { Gameboard } from "./gameboard.js";
import { Player } from "./player.js";
import { renderBoard, showFleet } from "./domcontroller.js";
import './battleShip.css';

const user = Player('User');
const computer = Player('Computer');

const userBoard = Gameboard();
const computerBoard = Gameboard();

user.setGameboard(userBoard);
computer.setGameboard(computerBoard);



computer.autoPlaceFleet();
user.placeSpecificShip({ name: 'Carrier', size: 5 }, 0, 0, 'horizontal');
user.placeSpecificShip({ name: 'Battleship', size: 4 }, 2, 2, 'horizontal');
console.log(userBoard.getShips());
console.log(user.getRemainingFleet());
console.log(user.getRemainingAliveShips());


renderBoard(userBoard.getBoard(), computerBoard.getBoard());


let currentPlayer = user;

export function handlePlayerClick(x,y) {
  if (currentPlayer === user) {

    const result = user.attack(x, y, computerBoard);

    if (result === 'hit') {
      showFleet(user);
    } else if (result === 'miss') {
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


