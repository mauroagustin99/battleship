/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Gameboard: () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n\nfunction Gameboard() {\n  var gameboard = Array.from({\n    length: 10\n  }, function () {\n    return Array(10).fill(null);\n  });\n  var ships = [];\n  var missedShots = [];\n  function placeShip(ship, x, y, direction) {\n    var length = ship.getLength();\n    for (var i = 0; i < length; i++) {\n      //Check if the ship is within bounds\n      // and if the position is already occupied\n      var newX = direction === 'horizontal' ? x + i : x;\n      var newY = direction === 'vertical' ? y + i : y;\n      if (newX < 0 || newX >= gameboard[0].length || newY < 0 || newY >= gameboard.length) {\n        throw new Error('Ship placement out of bounds');\n      }\n    }\n    for (var _i = 0; _i < length; _i++) {\n      var _newX = direction === 'horizontal' ? x + _i : x;\n      var _newY = direction === 'vertical' ? y + _i : y;\n      gameboard[_newY][_newX] = ship;\n    }\n    ships.push(ship);\n  }\n  function receiveAttack(x, y) {\n    var target = gameboard[y][x];\n    if (target) {\n      target.hit();\n      return 'hit';\n    } else {\n      missedShots.push([x, y]);\n      return 'miss';\n    }\n  }\n  function allShipsSunk() {\n    return ships.every(function (ship) {\n      return ship.isSunk();\n    });\n  }\n  return {\n    placeShip: placeShip,\n    receiveAttack: receiveAttack,\n    allShipsSunk: allShipsSunk,\n    getBoard: function getBoard() {\n      return gameboard;\n    },\n    getmissedShots: function getmissedShots() {\n      return missedShots;\n    },\n    getShips: function getShips() {\n      return ships;\n    }\n  };\n}\n\n//# sourceURL=webpack://battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard.js */ \"./src/gameboard.js\");\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player.js */ \"./src/player.js\");\n\n\n\nvar user = (0,_player_js__WEBPACK_IMPORTED_MODULE_2__.Player)('User');\nvar computer = (0,_player_js__WEBPACK_IMPORTED_MODULE_2__.Player)('Computer');\nvar userBoard = (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_0__.Gameboard)();\nvar computerBoard = (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_0__.Gameboard)();\nuser.setGameboard(userBoard);\ncomputer.setGameboard(computerBoard);\nuserBoard.placeShip((0,_ship_js__WEBPACK_IMPORTED_MODULE_1__.Ship)(5), 0, 0, 'horizontal');\nuserBoard.placeShip((0,_ship_js__WEBPACK_IMPORTED_MODULE_1__.Ship)(4), 2, 2, 'horizontal');\nuserBoard.placeShip((0,_ship_js__WEBPACK_IMPORTED_MODULE_1__.Ship)(3), 3, 3, 'vertical');\nuserBoard.placeShip((0,_ship_js__WEBPACK_IMPORTED_MODULE_1__.Ship)(2), 4, 4, 'horizontal');\nuserBoard.placeShip((0,_ship_js__WEBPACK_IMPORTED_MODULE_1__.Ship)(2), 5, 5, 'horizontal');\nuserBoard.placeShip((0,_ship_js__WEBPACK_IMPORTED_MODULE_1__.Ship)(1), 6, 6, 'horizontal');\nuserBoard.placeShip((0,_ship_js__WEBPACK_IMPORTED_MODULE_1__.Ship)(1), 7, 7, 'horizontal');\nvar currentPlayer = user;\nfunction takeTurn(x, y) {\n  if (currentPlayer === user) {\n    var result = computerBoard.receiveAttack(x, y);\n    console.log(\"User attacks (\".concat(x, \", \").concat(y, \"): \").concat(result));\n    currentPlayer = computer;\n  } else {\n    var _x = Math.floor(Math.random() * 10);\n    var _y = Math.floor(Math.random() * 10);\n    var _result = userBoard.receiveAttack(_x, _y);\n    console.log(\"Computer attacks (\".concat(_x, \", \").concat(_y, \"): \").concat(_result));\n    currentPlayer = user;\n  }\n  if (userBoard.allShipsSunk()) {\n    console.log(\"Computer wins!\");\n    return;\n  }\n  if (computerBoard.allShipsSunk()) {\n    console.log(\"User wins!\");\n    return;\n  }\n}\ntakeTurn(0, 0); // User attacks (0, 0)\ntakeTurn(1, 1); // Computer attacks (1, 1)\ntakeTurn(2, 2); // User attacks (2, 2)\ntakeTurn(3, 3); // Computer attacks (3, 3)\ntakeTurn(4, 4); // User attacks (4, 4)\ntakeTurn(5, 5); // Computer attacks (5, 5)\ntakeTurn(6, 6); // User attacks (6, 6)\ntakeTurn(7, 7); // Computer attacks (7, 7)\ntakeTurn(8, 8); // User attacks (8, 8)\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Player: () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\nfunction _createForOfIteratorHelper(r, e) { var t = \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && \"number\" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t[\"return\"] || t[\"return\"](); } finally { if (u) throw o; } } }; }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nfunction _readOnlyError(r) { throw new TypeError('\"' + r + '\" is read-only'); }\n\nfunction Player(name) {\n  var gameboard = null;\n  var isComputer = name === 'Computer';\n  var previousAttacks = [];\n  function setGameboard(newGameboard) {\n    newGameboard, _readOnlyError(\"gameboard\");\n  }\n  var fleet = [{\n    name: 'Carrier',\n    size: 5\n  }, {\n    name: 'Battleship',\n    size: 4\n  }, {\n    name: 'Cruiser',\n    size: 3\n  }, {\n    name: 'Destroyer1',\n    size: 2\n  }, {\n    name: 'Destroyer2',\n    size: 2\n  }, {\n    name: 'Submarine1',\n    size: 1\n  }, {\n    name: 'Submarine2',\n    size: 1\n  }];\n  if (isComputer) {\n    var _iterator = _createForOfIteratorHelper(fleet),\n      _step;\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var shipInfo = _step.value;\n        var placed = false;\n        while (!placed) {\n          var x = Math.floor(Math.random() * 10);\n          var y = Math.floor(Math.random() * 10);\n          var dir = Math.random() < 0.5 ? 'horizontal' : 'vertical';\n          var ship = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship)(shipInfo.size);\n          try {\n            gameboard.placeShip(ship, x, y, dir);\n            placed = true;\n          } catch (e) {\n            // Invalid placement, try again\n          }\n        }\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n  }\n  function attack(x, y, opponentBoard) {\n    if (isComputer) {\n      do {\n        x = Math.floor(Math.random() * 10);\n        y = Math.floor(Math.random() * 10);\n      } while (previousAttacks.some(function (coord) {\n        return coord[0] === x && coord[1] === y;\n      }));\n    }\n    previousAttacks.push([x, y]);\n    return opponentBoard.receiveAttack(x, y);\n  }\n  var remainingFleet = [].concat(fleet);\n  function placeShipFromFleet(x, y, direction) {\n    if (remainingFleet.length === 0) return;\n    var shipInfo = remainingFleet.shift();\n    var ship = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship)(shipInfo.size);\n    gameboard.placeShip(ship, x, y, direction);\n  }\n  function getBoard() {\n    return gameboard;\n  }\n  function getPreviousAttacks() {\n    return previousAttacks;\n  }\n  return {\n    attack: attack,\n    getBoard: getBoard,\n    isComputer: isComputer,\n    getPreviousAttacks: getPreviousAttacks,\n    placeShipFromFleet: placeShipFromFleet,\n    setGameboard: setGameboard\n  };\n}\n\n//# sourceURL=webpack://battleship/./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Ship: () => (/* binding */ Ship)\n/* harmony export */ });\nfunction Ship(length) {\n  var hits = 0;\n  function getLength() {\n    return length;\n  }\n  function isSunk() {\n    return hits >= length;\n  }\n  function hit() {\n    if (!isSunk()) {\n      hits++;\n    }\n    ;\n  }\n  return {\n    getLength: getLength,\n    isSunk: isSunk,\n    hit: hit\n  };\n}\n;\n\n//# sourceURL=webpack://battleship/./src/ship.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;