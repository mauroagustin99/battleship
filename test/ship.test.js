import { Ship } from "../src/ship.js";

test('Ship gets sunk after enough hits', ()=>{
  const ship = Ship(3);
  expect(ship.isSunk()).toBe(false);

  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toBe(false);

  ship.hit();
  expect(ship.isSunk()).toBe(true);

  // Extra hit doesn't change it
  ship.hit();
  expect(ship.isSunk()).toBe(true);
})