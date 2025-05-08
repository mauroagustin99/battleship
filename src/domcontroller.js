import { handlePlayerClick } from './index.js';

export function renderBoard(userGrid, computerGrid) {
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
        }

        board.appendChild(square);
      });
    });

    container.appendChild(board);
  };

  renderGrid(userGrid, userBoardDiv, false);
  renderGrid(computerGrid, computerBoardDiv, true);
}

export function showFleet(user){
  console.log('Fleet:', user.getRemainingFleet());
}
