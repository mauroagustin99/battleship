import { Gameboard } from "../src/gameboard.js";
import { Ship } from "../src/ship.js";
import { Player } from "../src/player.js";

describe('Game Flow', () => {
  test('should simulate a few turns and not throw errors', () => {
    const user = Player('User');
    const computer = Player('Computer');

    const userBoard = Gameboard();
    const computerBoard = Gameboard();

    user.setGameboard(userBoard);
    computer.setGameboard(computerBoard);

    // Colocar barcos del usuario
    expect(() => {
      userBoard.placeShip(Ship(5), 0, 0, 'horizontal');
      userBoard.placeShip(Ship(4), 2, 2, 'horizontal');
      userBoard.placeShip(Ship(3), 3, 3, 'vertical');
      userBoard.placeShip(Ship(2), 4, 4, 'horizontal');
      userBoard.placeShip(Ship(2), 5, 5, 'horizontal');
      userBoard.placeShip(Ship(1), 6, 6, 'horizontal');
      userBoard.placeShip(Ship(1), 7, 7, 'horizontal');
    }).not.toThrow();

    // Simular algunos turnos
    expect(() => {
      computerBoard.receiveAttack(0, 0);
      userBoard.receiveAttack(1, 1);
      computerBoard.receiveAttack(2, 2);
      userBoard.receiveAttack(3, 3);
    }).not.toThrow();
  });
});

