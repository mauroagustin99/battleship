import { Gameboard } from '../src/gameboard.js';
import { Player } from '../src/player.js';
import { Ship } from '../src/ship.js';

test('Player attacks and hits a ship', () => {
  const player = Player('User');
  const enemy = Player('Enemy');

  const enemyBoard = Gameboard();
  enemy.setGameboard(enemyBoard);

  const playerBoard = Gameboard();
  player.setGameboard(playerBoard);

  const ship = Ship(2);

  enemyBoard.placeShip(ship, 0, 0, 'horizontal');
  const result = player.attack(0, 0, enemyBoard);

  expect(result).toBe('hit');
});

test('Computer attacks randomly and returns a result', () => {
  const computer = Player('Computer');
  const player = Player('User');

  const computerBoard = Gameboard();
  const playerBoard = Gameboard();

  computer.setGameboard(computerBoard);
  player.setGameboard(playerBoard);

  const result = computer.attack(null, null, playerBoard);

  expect(['hit', 'miss']).toContain(result);
});

test('Player has a Gameboard instance', () => {
  const player = Player('User');
  const playerBoard = Gameboard();
  player.setGameboard(playerBoard);

  expect(typeof player.getBoard().placeShip).toBe('function');
});

test('Computer attacks do not repeat the same coordinates', () => {
  const computer = Player('Computer');
  const user = Player('User');

  const computerBoard = Gameboard();
  const userBoard = Gameboard();
  computer.setGameboard(computerBoard);
  user.setGameboard(userBoard);

  const attackedCoords = new Set();

  for (let i = 0; i < 100; i++) {
    const result = computer.attack(null, null, userBoard);
    const allAttacks = computer.getPreviousAttacks(); 

    const key = allAttacks.at(-1).join(',');
    expect(attackedCoords.has(key)).toBe(false); 
    attackedCoords.add(key);
  }

  expect(attackedCoords.size).toBe(100);
});

test('Computer places all ships correctly on the board', () => {
  const computer = Player('Computer');
  const board = Gameboard();

  computer.setGameboard(board);
  computer.autoPlaceFleet();

  const ships = board.getShips(); 

  expect(ships.length).toBe(7); //Fleet size is 7
  expect(board.getShips().length).toBe(7);

  const totalOccupiedCells = ships.reduce((sum, ship) => sum + ship.getLength(), 0);
  
  expect(totalOccupiedCells).toBe(18); // Fleet size is 18 (5+4+3+2+2+1+1)

  // Verify that all ships are placed on the board
  const boardState = board.getBoard();
  const occupied = [];

  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
      if (boardState[row][col] !== null) {
        occupied.push(`${row},${col}`);
      }
    }
  }

  const uniqueCells = new Set(occupied);
  expect(uniqueCells.size).toBe(18); 
});