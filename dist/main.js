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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/battleShip.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/battleShip.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./gradient.png */ \"./src/gradient.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `html, body {\r\n  height: 100%;\r\n  margin: 0;\r\n  font-family: 'Arial', sans-serif;\r\n  color: #fff;\r\n}\r\n\r\nbody{\r\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n  background-size: cover;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-attachment: fixed;\r\n  overflow: auto;\r\n\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n\r\n}\r\n\r\nh1 {\r\n  text-align: center;\r\n\r\n  font-size: 2.5em;\r\n  margin-top: 20px;\r\n}\r\n\r\nh2 {\r\n  text-align: center;\r\n  margin: 10px 0 ;\r\n}\r\n\r\np{\r\n  text-align: center;\r\n  margin: 0;\r\n}\r\n\r\n.game-status{\r\n  text-align: center;\r\n}\r\n\r\n.turn-info{\r\n  text-align: center;\r\n  \r\n}\r\n\r\n\r\n#user-board,\r\n#computer-board {\r\n  display: inline-block;\r\n  margin: 0 20px ;\r\n}\r\n\r\n.playground{\r\n  display: flex;\r\n  justify-content: space-around;\r\n}\r\n\r\n.gameboard {\r\n  margin: 0 20px;\r\n}\r\n\r\n.board-grid {\r\n  display: grid;\r\n  grid-template-columns: repeat(10, 30px);\r\n  grid-template-rows: repeat(10, 30px);\r\n  gap: 2px;\r\n\r\n  background: rgba(0, 0, 0, 0.4); \r\n  backdrop-filter: blur(6px);    \r\n  border-radius: 12px;\r\n  padding: 10px;\r\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5); \r\n}\r\n\r\n.cell {\r\n  width: 30px;\r\n  height: 30px;\r\n  border: 1px solid #ccc;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-size: 18px;\r\n}\r\n\r\n\r\n.cell.hit {\r\n  background-color: red;\r\n  border: 1px solid #000;\r\n}\r\n\r\n.cell.miss {\r\n  background-color: #ccc;\r\n  border: 1px solid #000;\r\n}\r\n\r\n#fleet-container {\r\n  display: flex;\r\n  align-items: center;\r\n  background: rgba(0, 0, 0, 0.4); \r\n  backdrop-filter: blur(6px);    \r\n  border-radius: 12px;\r\n  padding: 10px;\r\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5); \r\n\r\n}\r\n\r\n\r\n.ship-item{\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 5px;\r\n}\r\n\r\n.ship-cells{\r\n  display: flex;\r\n}\r\n\r\n.ship-item.selected {\r\n  border: 2px solid blue;\r\n  border-radius: 6px;\r\n}\r\n\r\n.cell.preview {\r\n  background-color: rgba(0, 128, 255, 0.4); \r\n  border: 1px dashed #007BFF;\r\n}\r\n\r\n.action-btns{\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\nbutton {\r\n  background: rgba(22, 114, 14, 0.8);\r\n  color: white;\r\n  border: none;\r\n  border-radius: 8px;\r\n  padding: 10px 20px;\r\n  margin: 10px;\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n  transition: all 0.3s ease;\r\n}\r\n\r\nbutton:hover {\r\n  background: rgba(0, 123, 255, 1);\r\n  box-shadow: 0 0 20px rgba(0, 123, 255, 0.8);\r\n\r\n}\r\n\r\n.author {\r\n  font-size: 0.7em;\r\n  justify-self: end;\r\n  align-self: end;\r\n  color: white;\r\n  padding: 5px;\r\n}\r\n\r\n.github-link {\r\n  text-decoration: none;\r\n  color: white;\r\n  font-weight: bold;\r\n  display: inline-block;\r\n  border-radius: 5px;\r\n  transition: background-color 0.5s, color 0.3s;\r\n}\r\n\r\n.github-link:hover {\r\n  background-color: #2d3e40;\r\n  color: white;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/battleShip.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/battleShip.css":
/*!****************************!*\
  !*** ./src/battleShip.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_battleShip_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./battleShip.css */ \"./node_modules/css-loader/dist/cjs.js!./src/battleShip.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_battleShip_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_battleShip_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_battleShip_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_battleShip_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/battleShip.css?");

/***/ }),

/***/ "./src/domcontroller.js":
/*!******************************!*\
  !*** ./src/domcontroller.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   gameInfo: () => (/* binding */ gameInfo),\n/* harmony export */   randomPlaceShips: () => (/* binding */ randomPlaceShips),\n/* harmony export */   reload: () => (/* binding */ reload),\n/* harmony export */   renderBoard: () => (/* binding */ renderBoard),\n/* harmony export */   showFleet: () => (/* binding */ showFleet)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\nvar selectedShip = null;\nfunction renderBoard(user, computer) {\n  var userBoardDiv = document.getElementById('user-grid');\n  var computerBoardDiv = document.getElementById('computer-grid');\n  userBoardDiv.innerHTML = '<h2>User Board</h2>';\n  computerBoardDiv.innerHTML = '<h2>Computer Board</h2>';\n  var renderGrid = function renderGrid(grid, container) {\n    var isComputer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n    var board = document.createElement('div');\n    board.classList.add('board-grid');\n    grid.forEach(function (row, y) {\n      row.forEach(function (cell, x) {\n        var square = document.createElement('div');\n        square.classList.add('cell');\n        var hasShip = cell && cell.ship;\n        var isHit = cell && cell.hit;\n        var isMiss = cell === 'miss';\n\n        //Show boats only on the user's board        \n        if (hasShip && !isComputer) {\n          square.classList.add('ship');\n          square.textContent = '🚢';\n        }\n\n        // Show hits and misses on both boards\n        if (hasShip && isHit) {\n          square.classList.add('hit');\n          square.textContent = '💥';\n        } else if (isMiss) {\n          square.classList.add('miss');\n          square.textContent = '🌊';\n        }\n\n        // Add event listener for user clicks\n        if (isComputer) {\n          square.dataset.x = x;\n          square.dataset.y = y;\n\n          // Only add event listener if the cell has not been attacked yet\n          var alreadyAttacked = cell === 'hit' || cell === 'miss';\n          if (!alreadyAttacked) {\n            square.addEventListener('click', function () {\n              (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.handlePlayerClick)(x, y);\n            });\n          }\n        } else {\n          square.addEventListener('click', function () {\n            if (!selectedShip) return;\n            try {\n              user.placeSpecificShip(selectedShip, x, y, direction);\n              selectedShip = null;\n              renderBoard(user, computer);\n              showFleet(user);\n            } catch (e) {\n              alert('Invalid placement!');\n            }\n          });\n          var changeDirectionBtn = document.getElementById('change-direction');\n          var direction = 'horizontal';\n          changeDirectionBtn.addEventListener('click', function () {\n            direction = direction === 'horizontal' ? 'vertical' : 'horizontal';\n            console.log(\"Direction changed to: \".concat(direction));\n          });\n          square.addEventListener('mouseenter', function () {\n            if (!selectedShip) return;\n            showPreview(x, y, selectedShip.size, direction, user.getBoard(), true);\n          });\n          square.addEventListener('mouseleave', function () {\n            if (!selectedShip) return;\n            showPreview(x, y, selectedShip.size, direction, user.getBoard(), false);\n          });\n        }\n        board.appendChild(square);\n      });\n    });\n    container.appendChild(board);\n  };\n  renderGrid(user.getBoard(), userBoardDiv, false);\n  renderGrid(computer.getBoard(), computerBoardDiv, true);\n}\nfunction showPreview(startX, startY, size, direction, board, show) {\n  var cells = document.querySelectorAll('#user-grid .cell');\n  for (var i = 0; i < size; i++) {\n    var x = startX;\n    var y = startY;\n    if (direction === 'horizontal') x += i;else y += i;\n    if (x >= 10 || y >= 10) return; // Out of bounds\n\n    var index = y * 10 + x;\n    var cell = cells[index];\n    if (!cell) continue; // Cell not found\n\n    if (show) {\n      cell.classList.add('preview');\n    } else {\n      cell.classList.remove('preview');\n    }\n  }\n}\nfunction showFleet(user) {\n  var fleet = document.getElementById('fleet-container');\n  var fleetTitle = document.getElementById('fleet-title');\n  var fleetInfo = document.getElementById('game-status');\n  var randomBtn = document.getElementById('random-place-btn');\n  var directionBtn = document.getElementById('change-direction');\n  fleetTitle.innerHTML = '<h2>Your Fleet</h2>';\n  fleetInfo.innerHTML = '<p>Place your ships to start the game!<p>';\n  fleet.innerHTML = '';\n  var ships = user.getRemainingFleet();\n  if (ships.length === 0) {\n    fleet.innerHTML = '';\n    fleetInfo.innerHTML = '';\n    fleetTitle.innerHTML = '';\n    randomBtn.style.display = 'none';\n    directionBtn.style.display = 'none';\n    fleet.style.display = 'none';\n    return;\n  } else {}\n  ships.forEach(function (ship) {\n    var shipDiv = document.createElement('div');\n    var shipName = document.createElement('div');\n    var shipCells = document.createElement('div');\n    shipCells.classList.add('ship-cells');\n    shipDiv.classList.add('ship-item');\n    shipName.textContent = \"\".concat(ship.name);\n    shipDiv.appendChild(shipName);\n    shipDiv.addEventListener('click', function () {\n      selectedShip = ship;\n      document.querySelectorAll('.ship-item').forEach(function (el) {\n        return el.classList.remove('selected');\n      });\n      shipDiv.classList.add('selected');\n      console.log(\"Selected ship: \".concat(selectedShip.size));\n    });\n    for (var i = 0; i < ship.size; i++) {\n      var square = document.createElement('div');\n      square.classList.add('cell');\n      square.classList.add('ship');\n      square.textContent = '🚢';\n      shipCells.appendChild(square);\n    }\n    shipDiv.appendChild(shipCells);\n    fleet.appendChild(shipDiv);\n  });\n}\nfunction reload() {\n  location.reload();\n}\nfunction randomPlaceShips(user, computer) {\n  var randomBtn = document.getElementById('random-place-btn');\n  randomBtn.addEventListener('click', function () {\n    user.autoPlaceFleet();\n    renderBoard(user, computer);\n    showFleet(user);\n  });\n}\nfunction gameInfo(currentPlayer) {\n  var turnInfo = document.getElementById('turn-info');\n  turnInfo.innerHTML = \"<p>\".concat(currentPlayer.getName() + \"'s turn\", \"</p>\");\n}\n\n//# sourceURL=webpack://battleship/./src/domcontroller.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Gameboard: () => (/* binding */ Gameboard)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\nfunction _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction Gameboard() {\n  var gameboard = Array.from({\n    length: 10\n  }, function () {\n    return Array(10).fill(null);\n  });\n  var ships = [];\n  var missedShots = [];\n  function placeShip(ship, x, y, direction) {\n    var length = ship.getLength();\n    for (var i = 0; i < length; i++) {\n      //Check if the ship is within bounds\n      // and if the position is already occupied\n      var newX = direction === 'horizontal' ? x + i : x;\n      var newY = direction === 'vertical' ? y + i : y;\n      if (newX < 0 || newX >= gameboard[0].length || newY < 0 || newY >= gameboard.length) {\n        throw new Error('Ship placement out of bounds');\n      }\n      if (gameboard[newY][newX] !== null) {\n        throw new Error('Cell already occupied');\n      }\n    }\n    for (var _i = 0; _i < length; _i++) {\n      var _newX = direction === 'horizontal' ? x + _i : x;\n      var _newY = direction === 'vertical' ? y + _i : y;\n      gameboard[_newY][_newX] = {\n        ship: ship,\n        hit: false\n      };\n    }\n    ships.push(ship);\n  }\n  function receiveAttack(x, y) {\n    var cell = gameboard[y][x];\n    if (cell && cell.ship && !cell.hit) {\n      cell.ship.hit();\n      cell.hit = true;\n      gameboard[y][x] = _objectSpread({}, cell);\n      return 'hit';\n    } else {\n      gameboard[y][x] = 'miss';\n      missedShots.push([x, y]);\n      return 'miss';\n    }\n  }\n  function allShipsSunk() {\n    return ships.every(function (ship) {\n      return ship.isSunk();\n    });\n  }\n  return {\n    placeShip: placeShip,\n    receiveAttack: receiveAttack,\n    allShipsSunk: allShipsSunk,\n    getBoard: function getBoard() {\n      return gameboard;\n    },\n    getmissedShots: function getmissedShots() {\n      return missedShots;\n    },\n    getShips: function getShips() {\n      return ships;\n    }\n  };\n}\n\n//# sourceURL=webpack://battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/gradient.png":
/*!**************************!*\
  !*** ./src/gradient.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"31fb0f522448778bab4b.png\";\n\n//# sourceURL=webpack://battleship/./src/gradient.png?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handlePlayerClick: () => (/* binding */ handlePlayerClick)\n/* harmony export */ });\n/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard.js */ \"./src/gameboard.js\");\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player.js */ \"./src/player.js\");\n/* harmony import */ var _domcontroller_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domcontroller.js */ \"./src/domcontroller.js\");\n/* harmony import */ var _battleShip_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./battleShip.css */ \"./src/battleShip.css\");\n\n\n\n\nvar user = (0,_player_js__WEBPACK_IMPORTED_MODULE_1__.Player)('User');\nvar computer = (0,_player_js__WEBPACK_IMPORTED_MODULE_1__.Player)('Computer');\nvar userBoard = (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_0__.Gameboard)();\nvar computerBoard = (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_0__.Gameboard)();\nuser.setGameboard(userBoard);\ncomputer.setGameboard(computerBoard);\ncomputer.autoPlaceFleet();\n(0,_domcontroller_js__WEBPACK_IMPORTED_MODULE_2__.renderBoard)(user, computer);\n(0,_domcontroller_js__WEBPACK_IMPORTED_MODULE_2__.showFleet)(user);\n(0,_domcontroller_js__WEBPACK_IMPORTED_MODULE_2__.randomPlaceShips)(user, computer);\nvar currentPlayer = user;\nfunction handlePlayerClick(x, y) {\n  (0,_domcontroller_js__WEBPACK_IMPORTED_MODULE_2__.gameInfo)(currentPlayer);\n  if (currentPlayer === user) {\n    var result = user.attack(x, y, computerBoard);\n    if (result === 'hit') {\n      (0,_domcontroller_js__WEBPACK_IMPORTED_MODULE_2__.showFleet)(user);\n    } else if (result === 'miss') {}\n    if (computerBoard.allShipsSunk()) {\n      alert('¡You won!');\n      (0,_domcontroller_js__WEBPACK_IMPORTED_MODULE_2__.reload)();\n      return;\n    }\n    if (user.getRemainingFleet().length === 0) {\n      currentPlayer = computer;\n      (0,_domcontroller_js__WEBPACK_IMPORTED_MODULE_2__.gameInfo)(currentPlayer);\n      (0,_domcontroller_js__WEBPACK_IMPORTED_MODULE_2__.renderBoard)(user, computer);\n      setTimeout(function () {\n        var result = currentPlayer.attack(null, null, userBoard); // Computer's turn (random shot)\n        (0,_domcontroller_js__WEBPACK_IMPORTED_MODULE_2__.renderBoard)(user, computer);\n        if (userBoard.allShipsSunk()) {\n          alert('Computer wins... :(');\n          (0,_domcontroller_js__WEBPACK_IMPORTED_MODULE_2__.reload)();\n          return;\n        }\n        currentPlayer = user;\n        (0,_domcontroller_js__WEBPACK_IMPORTED_MODULE_2__.gameInfo)(currentPlayer);\n      }, 800);\n    }\n  }\n}\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Player: () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\nfunction _createForOfIteratorHelper(r, e) { var t = \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && \"number\" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t[\"return\"] || t[\"return\"](); } finally { if (u) throw o; } } }; }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\n\nfunction Player(name) {\n  var gameboard = null;\n  var isComputer = name === 'Computer';\n  var previousAttacks = [];\n  function setGameboard(newGameboard) {\n    gameboard = newGameboard;\n  }\n  var fleet = [{\n    name: 'Carrier',\n    size: 5\n  }, {\n    name: 'Battleship',\n    size: 4\n  }, {\n    name: 'Cruiser',\n    size: 3\n  }, {\n    name: 'Destroyer1',\n    size: 2\n  }, {\n    name: 'Destroyer2',\n    size: 2\n  }, {\n    name: 'Submarine1',\n    size: 1\n  }, {\n    name: 'Submarine2',\n    size: 1\n  }];\n  function autoPlaceFleet() {\n    if (!gameboard) return;\n    var _iterator = _createForOfIteratorHelper(this.getRemainingFleet()),\n      _step;\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var shipInfo = _step.value;\n        var placed = false;\n        while (!placed) {\n          var x = Math.floor(Math.random() * 10);\n          var y = Math.floor(Math.random() * 10);\n          var dir = Math.random() < 0.5 ? 'horizontal' : 'vertical';\n          var ship = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship)(shipInfo.size);\n          try {\n            gameboard.placeShip(ship, x, y, dir);\n            placed = true;\n          } catch (e) {\n            // retry\n          }\n        }\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n    remainingFleet = [];\n  }\n  function attack(x, y, opponentBoard) {\n    if (remainingFleet.length === 0) {\n      if (isComputer) {\n        do {\n          x = Math.floor(Math.random() * 10);\n          y = Math.floor(Math.random() * 10);\n        } while (previousAttacks.some(function (coord) {\n          return coord[0] === x && coord[1] === y;\n        }));\n      }\n      previousAttacks.push([x, y]);\n      return opponentBoard.receiveAttack(x, y);\n    } else {\n      alert('Place ships first!');\n      return;\n    }\n  }\n  var remainingFleet = [].concat(fleet);\n  function placeShipFromFleet(x, y, direction) {\n    if (remainingFleet.length === 0) return;\n    var shipInfo = remainingFleet.shift();\n    var ship = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship)(shipInfo.size);\n    gameboard.placeShip(ship, x, y, direction);\n  }\n  function placeSpecificShip(shipInfo, x, y, direction) {\n    var ship = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship)(shipInfo.size);\n    gameboard.placeShip(ship, x, y, direction);\n    var index = remainingFleet.findIndex(function (item) {\n      return item.name === shipInfo.name && item.size === shipInfo.size;\n    });\n    if (index !== -1) {\n      remainingFleet.splice(index, 1); // Remove the placed ship from the fleet\n    }\n  }\n  function getSunkShips() {\n    return gameboard.getShips().filter(function (ship) {\n      return ship.isSunk();\n    });\n  }\n  function getRemainingAliveShips() {\n    return gameboard.getShips().filter(function (ship) {\n      return !ship.isSunk();\n    });\n  }\n  function getBoard() {\n    return gameboard.getBoard();\n  }\n  function getPreviousAttacks() {\n    return previousAttacks;\n  }\n  function getRemainingFleet() {\n    return remainingFleet;\n  }\n  function getName() {\n    return name;\n  }\n  return {\n    attack: attack,\n    getName: getName,\n    getBoard: getBoard,\n    isComputer: isComputer,\n    getPreviousAttacks: getPreviousAttacks,\n    placeShipFromFleet: placeShipFromFleet,\n    //maybe delete this function\n    placeSpecificShip: placeSpecificShip,\n    setGameboard: setGameboard,\n    autoPlaceFleet: autoPlaceFleet,\n    getRemainingFleet: getRemainingFleet,\n    getSunkShips: getSunkShips,\n    getRemainingAliveShips: getRemainingAliveShips\n  };\n}\n\n//# sourceURL=webpack://battleship/./src/player.js?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;