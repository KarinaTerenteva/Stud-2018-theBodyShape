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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__All_index__ = __webpack_require__(1);
;

Object(__WEBPACK_IMPORTED_MODULE_0__All_index__["a" /* default */])();


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return main; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__InitEveryButton__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__InitFormButton__ = __webpack_require__(3);
;


let q;
function main() {
    q = 0;
    initParam();
    initCalc();
    initExtern();
    initYes();
    initNo();
}
function initParam() {
    const button = document.getElementById('parameters');
    const m = document.getElementById('methods');
    const m1 = document.getElementById('m1');
    const onParam = (event) => {
        if (event == undefined) {
            return;
        }
        m.style.display = 'none';
        m1.style.display = 'block';
    };
    Object(__WEBPACK_IMPORTED_MODULE_0__InitEveryButton__["a" /* default */])(button, onParam);
}
function initCalc() {
    const button = document.getElementById('calculate');
    const onCalc = (event) => {
        if (event == undefined) {
            return;
        }
        const form = document.forms[0];
        const s = form.elements[0].value;
        const w = form.elements[1].value;
        const t = form.elements[2].value;
        const res = calculate(Number(s), Number(w), Number(t));
        showResult(res);
        form.style.display = 'none';
    };
    Object(__WEBPACK_IMPORTED_MODULE_1__InitFormButton__["a" /* default */])(button, onCalc);
}
function calculate(s, w, t) {
    if (s / t >= 1.05)
        return 0;
    else if (s / t <= 0.95)
        return 1;
    else if (w / t <= 0.75)
        return 2;
    else if (w / t >= 1.05)
        return 3;
    else if (w / t <= 1)
        return 4;
    else
        return 5;
}
function showResult(res) {
    const shape = ['invtriangle', 'triangle', 'hourglass', 'circle', 'rectangle', 'none'];
    const elem = document.getElementsByTagName('img')[0];
    const link = 'img/' + shape[res] + '.jpg';
    elem.src = link;
    elem.style.display = 'block';
}
function initExtern() {
    const button = document.getElementById('externelly');
    const m = document.getElementById('methods');
    const m2 = document.getElementById('m2');
    const onExtern = (event) => {
        if (event == undefined) {
            return;
        }
        m.style.display = 'none';
        m2.style.display = 'block';
    };
    Object(__WEBPACK_IMPORTED_MODULE_0__InitEveryButton__["a" /* default */])(button, onExtern);
}
function initYes() {
    const button = document.getElementById('yes');
    const onYes = (event) => {
        if (event == undefined) {
            return;
        }
        choice(1);
    };
    Object(__WEBPACK_IMPORTED_MODULE_0__InitEveryButton__["a" /* default */])(button, onYes);
}
function initNo() {
    const button = document.getElementById('no');
    const onNo = (event) => {
        if (event == undefined) {
            return;
        }
        choice(0);
    };
    Object(__WEBPACK_IMPORTED_MODULE_0__InitEveryButton__["a" /* default */])(button, onNo);
}
function choice(num) {
    let elem = document.getElementById('question');
    const questions = ['Ваш тип фигуры - ', 'У Вас четко выражена талия?', 'Ваш живот - самая широкая часть тела?', 'Вы высокая и стройная?', 'Ваша талия длинная и немного широкая?', 'Ваши бёдра - самая широкая часть тела?', 'Вы полная?', 'У Вас большая грудь или склонная к полноте середина тела?', 'У Вас короткая талия?', 'Вы высокая и худая?', 'У Вас есть седалищные мешки (отложения жира на внешней части бёдер)?'];
    const res = ['яблоко', 'брикет', 'колонна', 'ваза', 'песочные часы', 'виолончель', 'конус', 'колокольчик', 'бокал', 'леденец', 'кегля', 'груша'];
    switch (q) {
        case 0:
            q = (num ? 2 : 1);
            break;
        case 1:
            q = (num ? 4 : 3);
            break;
        case 2:
            q = (num ? 11 : 5);
            break;
        case 3:
            q = (num ? 13 : 12);
            break;
        case 4:
            q = (num ? 14 : 6);
            break;
        case 5:
            q = (num ? 8 : 7);
            break;
        case 6:
            q = (num ? 16 : 15);
            break;
        case 7:
            q = (num ? 9 : 17);
            break;
        case 8:
            q = (num ? 18 : 10);
            break;
        case 9:
            q = (num ? 20 : 19);
            break;
        case 10:
            q = (num ? 22 : 21);
            break;
    }
    if (q > 10) {
        elem.innerHTML = questions[0] + res[q - 11];
        hideChoiceButton();
    }
    else
        elem.innerHTML = questions[q];
}
function hideChoiceButton() {
    const y = document.getElementById('yes');
    const n = document.getElementById('no');
    y.style.display = 'none';
    n.style.display = 'none';
}



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return buttonAction; });
;
function buttonAction(button, action) {
    const onAct = (event) => {
        action(event);
    };
    button.addEventListener('click', onAct);
}



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return buttonAction; });
;
function buttonAction(button, action) {
    const onAct = (event) => {
        action(event);
        event.preventDefault();
    };
    button.addEventListener('click', onAct);
}



/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map