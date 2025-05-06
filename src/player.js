import { Gameboard } from "./gameboard.js";

export function Player(name){
  const gameboard = Gameboard();
  const isComputer = name === 'Computer';
  const previousAttacks = [];

  
  function attack(x,y,opponentBoard){
    if (isComputer){
      do {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);
    } while (previousAttacks.some(coord => coord[0] === x && coord[1] === y));
  }

  previousAttacks.push([x, y]);
  return opponentBoard.receiveAttack(x, y);
  }

  function getBoard(){
    return gameboard;
  }

  function getPreviousAttacks(){
    return previousAttacks;
  }


  return {
    attack,
    getBoard,
    isComputer,
    getPreviousAttacks
  };

}