import { Gameboard } from "../src/gameboard.js";
import { Ship } from "../src/ship.js";

test('Gameboard initializes correctly', () => {
 const gameboard = Gameboard();
 expect(gameboard.getBoard()).toEqual(Array.from({ length: 10 }, () => Array(10).fill(null)));
 expect(gameboard.getmissedShots()).toEqual([]);
 expect(gameboard.getShips()).toEqual([]);
});

test('Gameboard places ships correctly', () => {
  const gameboard = Gameboard();
  const ship = Ship(3);
  gameboard.placeShip(ship, 0, 0, 'horizontal');
  expect(gameboard.getBoard()[0][0]).toBe(ship);
  expect(gameboard.getBoard()[0][1]).toBe(ship);
  expect(gameboard.getBoard()[0][2]).toBe(ship);
  expect(gameboard.getShips()).toContain(ship);
  expect(gameboard.getmissedShots()).toEqual([]);
})

test('Place ship and hit it', () => {
  const board = Gameboard();
  const ship = Ship(3);

  board.placeShip(ship, 0, 0, 'horizontal');
  expect(board.receiveAttack(0,0)).toBe('hit');
})

test('Place ship and miss',()=> {
  const board = Gameboard();
  const ship = Ship(3);

  board.placeShip(ship,0,0,'horizontal');
  expect(board.receiveAttack(5,5)).toBe('miss');
  expect(board.receiveAttack(0,1)).toBe('miss');
  expect(board.getmissedShots()).toEqual([[5,5],[0,1]]);
  expect(board.getShips()).toEqual([ship]);
  expect(ship.isSunk()).toBe(false);
})