import { handlePlayerClick } from './index.js';

export function renderBoard(user, computer) {
  const userBoardDiv = document.getElementById('user-grid');
  const computerBoardDiv = document.getElementById('computer-grid');

  userBoardDiv.innerHTML = '<h2>User Board</h2>';
  computerBoardDiv.innerHTML = '<h2>Computer Board</h2>';

  const renderGrid = (grid, container, isComputer = false) => {
    const board = document.createElement('div');
    board.classList.add('board-grid');

    grid.forEach((row,y) => {
      row.forEach((cell, x) => {
        const square = document.createElement('div');
        square.classList.add('cell');

        let hasShip = cell && cell.ship;
        let isHit = cell && cell.hit;
        let isMiss = cell === 'miss';

        //Show boats only on the user's board        
        if (hasShip && !isComputer) {
          square.classList.add('ship');
          square.textContent = '🚢';
        }

        // Show hits and misses on both boards
        if (hasShip && isHit) {
          square.classList.add('hit');
          square.textContent = '💥';
        } else if (isMiss) {
          square.classList.add('miss');
          square.textContent = '🌊';
        }


        // Add event listener for user clicks
        if (isComputer) {
          square.dataset.x = x;
          square.dataset.y = y;

          // Only add event listener if the cell has not been attacked yet
          const alreadyAttacked = cell === 'hit' || cell === 'miss';
          if (!alreadyAttacked) {
            square.addEventListener('click', () => {
              handlePlayerClick(x, y);
            });
          }
        } else {
          square.addEventListener('click', () => {
            if (!selectedShip) return;
            const direction = 'horizontal'; // Make this dynamic later
            try {
              user.placeSpecificShip(selectedShip, x, y, direction);
              selectedShip = null;

              renderBoard(user, computer);
              showFleet(user);
            } catch (e) {
              alert('Invalid placement!');
            }
          })
        }

        board.appendChild(square);
      });
    });

    container.appendChild(board);
  };

  renderGrid(user.getBoard(), userBoardDiv, false);
  renderGrid(computer.getBoard(), computerBoardDiv, true);
}

let selectedShip = null;


export function showFleet(user){
  const fleet = document.getElementById('fleet-container');
  fleet.innerHTML = '<h2>Your Fleet</h2>';

  const ships = user.getRemainingFleet();

  ships.forEach(ship => {
    const shipDiv = document.createElement('div');
    shipDiv.classList.add('ship-item');
    shipDiv.textContent = `${ship.name} (${ship.size})`;

    shipDiv.addEventListener('click', () => {
  
    selectedShip = ship;
  
    
    document.querySelectorAll('.ship-item').forEach(el => el.classList.remove('selected'));
  
    shipDiv.classList.add('selected');
    console.log(`Selected ship: ${selectedShip.size}`);
    });
    
    for (let i=0; i<ship.size; i++){
      const square = document.createElement('div');
      square.classList.add('cell');
      square.classList.add('ship');
      square.textContent = '🚢';
      shipDiv.appendChild(square);
    }
    fleet.appendChild(shipDiv);
  })
}

export function reload() {
  location.reload();
}

export function randomPlaceShips(user, computer){
  const randomBtn = document.getElementById('random-place-btn');
  const userBoard = user.getBoard();
  const computerBoard = computer.getBoard();
  randomBtn.addEventListener('click',() =>{
    user.autoPlaceFleet();
    renderBoard(userBoard.getBoard(), computerBoard.getBoard());
    showFleet(user);
  })
}
