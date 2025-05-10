import { Ship } from "./ship.js";

export function Player(name){
  let gameboard = null;
  const isComputer = name === 'Computer';
  const previousAttacks = [];

  function setGameboard(newGameboard){
    gameboard = newGameboard;
  }

  const fleet = [
  { name: 'Carrier', size: 5 },
  { name: 'Battleship', size: 4 },
  { name: 'Cruiser', size: 3 },
  { name: 'Destroyer1', size: 2 },
  { name: 'Destroyer2', size: 2 },
  { name: 'Submarine1', size: 1 },
  { name: 'Submarine2', size: 1 },
  ];

  function autoPlaceFleet() {
    if (!gameboard) return;

    for (let shipInfo of this.getRemainingFleet()) {
      let placed = false;
      while (!placed) {
        const x = Math.floor(Math.random() * 10);
        const y = Math.floor(Math.random() * 10);
        const dir = Math.random() < 0.5 ? 'horizontal' : 'vertical';
        const ship = Ship(shipInfo.size);

        try {
          gameboard.placeShip(ship, x, y, dir);
          placed = true;
        } catch (e) {
          // retry
        }
      }
    }
    remainingFleet = []; 
  }

  
  function attack(x,y,opponentBoard){
    if (remainingFleet.length === 0){
    if (isComputer){
      do {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);
    } while (previousAttacks.some(coord => coord[0] === x && coord[1] === y));
  }



  previousAttacks.push([x, y]);
  return opponentBoard.receiveAttack(x, y);
  }else { console.log('primero coloca los barcos');return;}
  }

  let remainingFleet = [...fleet];

  function placeShipFromFleet(x, y, direction){
    if (remainingFleet.length === 0) return;

    const shipInfo = remainingFleet.shift();
    const ship = Ship(shipInfo.size);
    gameboard.placeShip(ship, x, y, direction);
  }

  function placeSpecificShip(shipInfo, x, y, direction) {
    const ship = Ship(shipInfo.size);
    gameboard.placeShip(ship, x, y, direction);
    
    const index = remainingFleet.findIndex((item) => 
      item.name === shipInfo.name && item.size === shipInfo.size);
    if (index !== -1) {
      remainingFleet.splice(index, 1); // Remove the placed ship from the fleet
    }
  }

  function getSunkShips() {
    return gameboard.getShips().filter(ship => ship.isSunk());
  }

  function getRemainingAliveShips() {
    return gameboard.getShips().filter(ship => !ship.isSunk());
  }

  function getBoard(){
    return gameboard.getBoard();
  }

  function getPreviousAttacks(){
    return previousAttacks;
  }

  function getRemainingFleet(){
    return remainingFleet;
  }

  




  return {
    attack,
    getBoard,
    isComputer,
    getPreviousAttacks,
    placeShipFromFleet,//maybe delete this function
    placeSpecificShip,
    setGameboard,
    autoPlaceFleet,
    getRemainingFleet,
    getSunkShips,
    getRemainingAliveShips
  };

}