/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./jsx/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./jsx/index.jsx":
/*!***********************!*\
  !*** ./jsx/index.jsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Square = function (_React$Component) {\n    _inherits(Square, _React$Component);\n\n    function Square() {\n        _classCallCheck(this, Square);\n\n        return _possibleConstructorReturn(this, (Square.__proto__ || Object.getPrototypeOf(Square)).apply(this, arguments));\n    }\n\n    _createClass(Square, [{\n        key: \"render\",\n        value: function render() {\n            return React.createElement(\"button\", { className: \"square\" });\n        }\n    }]);\n\n    return Square;\n}(React.Component);\n\nvar Board = function (_React$Component2) {\n    _inherits(Board, _React$Component2);\n\n    function Board() {\n        _classCallCheck(this, Board);\n\n        return _possibleConstructorReturn(this, (Board.__proto__ || Object.getPrototypeOf(Board)).apply(this, arguments));\n    }\n\n    _createClass(Board, [{\n        key: \"renderSquare\",\n        value: function renderSquare(i) {\n            return React.createElement(Square, null);\n        }\n    }, {\n        key: \"render\",\n        value: function render() {\n            var status = 'Next player: X';\n\n            return React.createElement(\n                \"div\",\n                null,\n                React.createElement(\n                    \"div\",\n                    { className: \"status\" },\n                    status\n                ),\n                React.createElement(\n                    \"div\",\n                    { className: \"board-row\" },\n                    this.renderSquare(0),\n                    this.renderSquare(1),\n                    this.renderSquare(2)\n                ),\n                React.createElement(\n                    \"div\",\n                    { className: \"board-row\" },\n                    this.renderSquare(3),\n                    this.renderSquare(4),\n                    this.renderSquare(5)\n                ),\n                React.createElement(\n                    \"div\",\n                    { className: \"board-row\" },\n                    this.renderSquare(6),\n                    this.renderSquare(7),\n                    this.renderSquare(8)\n                )\n            );\n        }\n    }]);\n\n    return Board;\n}(React.Component);\n\nvar Game = function (_React$Component3) {\n    _inherits(Game, _React$Component3);\n\n    function Game() {\n        _classCallCheck(this, Game);\n\n        return _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).apply(this, arguments));\n    }\n\n    _createClass(Game, [{\n        key: \"render\",\n        value: function render() {\n            return React.createElement(\n                \"div\",\n                { className: \"game\" },\n                React.createElement(\n                    \"div\",\n                    { className: \"game-board\" },\n                    React.createElement(Board, null)\n                ),\n                React.createElement(\n                    \"div\",\n                    { className: \"game-info\" },\n                    React.createElement(\"div\", null),\n                    React.createElement(\"ol\", null)\n                )\n            );\n        }\n    }]);\n\n    return Game;\n}(React.Component);\n\nReactDOM.render(React.createElement(Game, null), document.getElementById('root'));\n\n//# sourceURL=webpack:///./jsx/index.jsx?");

/***/ })

/******/ });