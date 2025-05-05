import { hello } from "../hello.js";

test('saluda correctamente', () => {
  expect(hello()).toBe('Hola mundo');
});