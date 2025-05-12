import { handlePlayerClick } from './index.js';



let selectedShip = null;

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


            try {
              user.placeSpecificShip(selectedShip, x, y, direction);
              selectedShip = null;

              renderBoard(user, computer);
              showFleet(user);
            } catch (e) {
              alert('Invalid placement!');
            }
          });

          const changeDirectionBtn = document.getElementById('change-direction');
          let direction = 'horizontal';
          changeDirectionBtn.addEventListener('click', () =>{
              direction = direction === 'horizontal' ? 'vertical' : 'horizontal';
              console.log(`Direction changed to: ${direction}`);

          });

          square.addEventListener('mouseenter', () => {
            if (!selectedShip) return;
              showPreview(x, y, selectedShip.size, direction, user.getBoard(), true);
            });
          
          square.addEventListener('mouseleave', () => {
            if (!selectedShip) return;
              showPreview(x, y, selectedShip.size, direction, user.getBoard(), false);
            });


        }

        board.appendChild(square);
      });
    });

    container.appendChild(board);
  };

  renderGrid(user.getBoard(), userBoardDiv, false);
  renderGrid(computer.getBoard(), computerBoardDiv, true);
}




function showPreview(startX, startY, size, direction, board, show) {
  const cells = document.querySelectorAll('#user-grid .cell');
  for (let i = 0; i < size; i++) {
    let x = startX;
    let y = startY;

    if (direction === 'horizontal') x += i;
    else y += i;
   
    if (x >= 10 || y >= 10) return; // Out of bounds

    const index = y * 10 + x
    const cell = cells[index];

    if (!cell) continue; // Cell not found

    if (show) {
      cell.classList.add('preview');
    } else {
      cell.classList.remove('preview');
    }
  }
}

export function showFleet(user){
  
  
  const fleet = document.getElementById('fleet-container');
  const fleetTitle = document.getElementById('fleet-title');
  const fleetInfo = document.getElementById('game-status');
  const randomBtn = document.getElementById('random-place-btn');
  const directionBtn = document.getElementById('change-direction');

  fleetTitle.innerHTML = '<h2>Your Fleet</h2>';
  fleetInfo.innerHTML = '<p>Place your ships to start the game!<p>';
  fleet.innerHTML = '';
  const ships = user.getRemainingFleet();

  if (ships.length === 0) {
    fleet.innerHTML = '';
    fleetInfo.innerHTML = '';
    fleetTitle.innerHTML = '';
    randomBtn.style.display = 'none';
    directionBtn.style.display = 'none';
    fleet.style.display = 'none';

    return;
  }
  else{  
  }




  ships.forEach(ship => {
    const shipDiv = document.createElement('div');
    const shipName = document.createElement('div');

    const shipCells = document.createElement('div');
    shipCells.classList.add('ship-cells');

    shipDiv.classList.add('ship-item');
    shipName.textContent = `${ship.name}`;
    shipDiv.appendChild(shipName);

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
      shipCells.appendChild(square);
    }
    shipDiv.appendChild(shipCells);
    fleet.appendChild(shipDiv);
  })
}

export function reload() {
  location.reload();
}

export function randomPlaceShips(user, computer){
  const randomBtn = document.getElementById('random-place-btn');
  randomBtn.addEventListener('click',() =>{
    user.autoPlaceFleet();
    renderBoard(user, computer);
    showFleet(user);
  })
}

export function gameInfo(currentPlayer){
  const turnInfo = document.getElementById('turn-info');
  turnInfo.innerHTML = `<p>${currentPlayer.getName() + "'s turn"}</p>`;
}
