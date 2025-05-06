import { Player } from '../player.js';
import { Ship } from '../ship.js';

test('Player attacks and hits a ship', () => {
  const player = Player('User');
  const enemy = Player('Enemy');
  const ship = Ship(2);

  enemy.getBoard().placeShip(ship, 0, 0, 'horizontal');
  const result = player.attack(0, 0, enemy.getBoard());

  expect(result).toBe('hit');
});

test('Computer attacks randomly and returns a result', () => {
  const computer = Player('Computer');
  const player = Player('User');

  const result = computer.attack(null, null, player.getBoard());

  expect(['hit', 'miss']).toContain(result);
});

test('Player has a Gameboard instance', () => {
  const player = Player('User');
  expect(typeof player.getBoard().placeShip).toBe('function');
});

test('Computer attacks do not repeat the same coordinates', () => {
  const computer = Player('Computer');
  const user = Player('User');

  const attackedCoords = new Set();

  for (let i = 0; i < 100; i++) {
    const result = computer.attack(null, null, user.getBoard());
    const allAttacks = computer.getPreviousAttacks(); 

    const key = allAttacks.at(-1).join(',');
    expect(attackedCoords.has(key)).toBe(false); 
    attackedCoords.add(key);
  }

  expect(attackedCoords.size).toBe(100);
});