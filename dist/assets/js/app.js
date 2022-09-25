/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/***/ (function() {

"use strict";
eval("\r\n\r\n/**\r\n * add event on element\r\n */\r\n\r\nconst addEventOnElem = function (elem, type, callback) {\r\n  if (elem.length > 1) {\r\n    for (let i = 0; i < elem.length; i++) {\r\n      elem[i].addEventListener(type, callback);\r\n    }\r\n  } else {\r\n    elem.addEventListener(type, callback);\r\n  }\r\n}\r\n\r\n\r\n/**\r\n * navbar toggle\r\n */\r\n\r\nconst navbar = document.querySelector(\"[data-navbar]\");\r\nconst navbarLinks = document.querySelectorAll(\"[data-nav-link]\");\r\nconst navTogglers = document.querySelectorAll(\"[data-nav-toggler]\");\r\nconst overlay = document.querySelector(\"[data-overlay]\");\r\n\r\nconst toggleNavbar = function () {\r\n  navbar.classList.toggle(\"active\");\r\n  overlay.classList.toggle(\"active\");\r\n  document.body.classList.toggle(\"active\");\r\n}\r\n\r\naddEventOnElem(navTogglers, \"click\", toggleNavbar);\r\n\r\nconst closeNavbar = function () {\r\n  navbar.classList.remove(\"active\");\r\n  overlay.classList.remove(\"active\");\r\n  document.body.classList.remove(\"active\");\r\n}\r\n\r\naddEventOnElem(navbarLinks, \"click\", closeNavbar);\r\n\r\n\r\n\r\n/* swiper hero */\r\nvar swiper = new Swiper(\".hero-slider\", {\r\n  spaceBetween: 20,\r\n  effect: \"fade\",\r\n  loop: true,\r\n  // navigation: {\r\n  //    nextEl: \".swiper-button-next\",\r\n  //    prevEl: \".swiper-button-prev\",\r\n  // },\r\n  centeredSlides: true,\r\n  autoplay: {\r\n     delay: 9500,\r\n     disableOnInteraction: false,\r\n  },\r\n});\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/file2.js":
/*!********************************!*\
  !*** ./src/assets/js/file2.js ***!
  \********************************/
/***/ (function() {

eval("console.log('file 2');\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/file2.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/assets/js/app.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/file2.js"]();
/******/ 	
/******/ })()
;