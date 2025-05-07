import { Gameboard } from "./gameboard.js";
import { Ship } from "./ship.js";
import { Player } from "./player.js";


const user = Player('User');
const computer = Player('Computer');

const userBoard = Gameboard();
const computerBoard = Gameboard();

user.setGameboard(userBoard);
computer.setGameboard(computerBoard);

userBoard.placeShip(Ship(5), 0, 0, 'horizontal');
userBoard.placeShip(Ship(4), 2, 2, 'horizontal');
userBoard.placeShip(Ship(3), 3, 3, 'vertical');
userBoard.placeShip(Ship(2), 4, 4, 'horizontal');
userBoard.placeShip(Ship(2), 5, 5, 'horizontal');
userBoard.placeShip(Ship(1), 6, 6, 'horizontal');
userBoard.placeShip(Ship(1), 7, 7, 'horizontal');

let currentPlayer = user;

function takeTurn(x, y) {
  if (currentPlayer === user) {
    const result = computerBoard.receiveAttack(x, y);
    console.log(`User attacks (${x}, ${y}): ${result}`);
    currentPlayer = computer;
  } else {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);
    const result = userBoard.receiveAttack(x, y);
    console.log(`Computer attacks (${x}, ${y}): ${result}`);
    currentPlayer = user;
  }

  if (userBoard.allShipsSunk()) {
    console.log("Computer wins!");
    return;
  }
  if (computerBoard.allShipsSunk()) {
    console.log("User wins!");
    return;
  }
}

takeTurn(0, 0); // User attacks (0, 0)
takeTurn(1, 1); // Computer attacks (1, 1)
takeTurn(2, 2); // User attacks (2, 2)
takeTurn(3, 3); // Computer attacks (3, 3)
takeTurn(4, 4); // User attacks (4, 4)
takeTurn(5, 5); // Computer attacks (5, 5)
takeTurn(6, 6); // User attacks (6, 6)
takeTurn(7, 7); // Computer attacks (7, 7)
takeTurn(8, 8); // User attacks (8, 8)