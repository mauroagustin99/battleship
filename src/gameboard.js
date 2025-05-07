import { Ship } from './ship.js';

export function Gameboard() {
  const gameboard = Array.from({ length: 10 }, () => Array(10).fill(null));
  const ships = [];
  const missedShots = [];
  
  function placeShip(ship, x, y, direction){
    const length = ship.getLength();
    for (let i = 0; i < length; i++) {
      //Check if the ship is within bounds
      // and if the position is already occupied
      const newX = direction === 'horizontal' ? x + i : x;
      const newY = direction === 'vertical' ? y + i : y;
      if (newX < 0 || newX >= gameboard[0].length || newY < 0 || newY >= gameboard.length) {
        throw new Error('Ship placement out of bounds');
      }
    }
    for (let i = 0; i < length; i++) {
      const newX = direction === 'horizontal' ? x + i : x;
      const newY = direction === 'vertical' ? y + i : y;
      gameboard[newY][newX] = ship;
    }

    ships.push(ship);
  }

  function receiveAttack(x,y){
    const target = gameboard[y][x];
    if (target) {
      target.hit();
      return 'hit';
    } else {
      missedShots.push([x, y]);
      return 'miss';
    }
  }

  function allShipsSunk() {
    return ships.every(ship => ship.isSunk());
  }

  return {
    placeShip,
    receiveAttack, 
    allShipsSunk, 
    getBoard: () => gameboard, 
    getmissedShots: () => missedShots, 
    getShips: () => ships
  };
}