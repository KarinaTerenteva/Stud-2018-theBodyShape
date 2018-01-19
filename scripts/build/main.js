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
    InitHome();
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
        showButtonHome();
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
        showResult1(res);
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
function showResult1(res) {
    const shape = ['invtriangle', 'triangle', 'hourglass', 'circle', 'rectangle', 'none'];
    showImage(shape[res]);
}
function showImage(shape) {
    const link = 'img/' + shape + '.jpg';
    const elem = document.getElementsByTagName('img')[0];
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
        showButtonHome();
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
    const questions = ['', 'У Вас четко выражена талия?', 'Ваш живот - самая широкая часть тела?', 'Вы высокая и стройная?', 'Ваша талия длинная и немного широкая?', 'Ваши бёдра - самая широкая часть тела?', 'Вы полная?', 'У Вас большая грудь или склонная к полноте середина тела?', 'У Вас короткая талия?', 'Вы высокая и худая?', 'У Вас есть седалищные мешки (отложения жира на внешней части бёдер)?'];
    const res = ['ЯБЛОКО', 'БРИКЕТ', 'КОЛОННА', 'ВАЗА', 'ПЕСОЧНЫЕ ЧАСЫ', 'ВИОЛОНЧЕЛЬ', 'КОНУС', 'КОЛОКОЛЬЧИК', 'БОКАЛ', 'ЛЕДЕНЕЦ', 'КЕГЛЯ', 'ГРУША'];
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
        q -= 11;
        elem.innerHTML = res[q];
        showResult2(q);
        hideChoiceButton();
    }
    else
        elem.innerHTML = questions[q];
}
function showResult2(res) {
    const des = ['Для этого типа характерны грудь средних размеров, широкая талия, умеренного размера ягодицы и обычные ноги. Женщины этого типа чаще остальных одеваются неправильно. Это происходит, в основном, из-за слишком широкой талии. Но и это поправимо.',
        'Если у вас широкие плечи, небольшой животик, плоские ягодицы и короткие ноги, то у вас тип телосложения «брикет». Многих расстраивает отсутствие плавных линий и манящих изгибов, но это вовсе не значит, что вам не подходит женственная одежда.',
        'Одна из самых утонченных фигур. Эти женщины отличаются высоким ростом, длинными ногами, плечами и бедрами одной ширины и слабозаметной талией.',
        'Определение типа фигуры «ваза» мало чем отличается от «песочных часов». У таких женщин также пышный бюст, тонкая длинная талия, только бедра и ноги немного стройнее. Но не менее соблазнительны. С подбором одежды трудностей возникает меньше, так как тело не так рельефно.',
        'У таких девушек большая грудь, полные бедра, короткая тонкая талия и пропорциональные плечи. Такое телосложение всегда считалось самым женственным и привлекательным. Этим счастливицам хочется посоветовать носить облегающую одежду, которая подчеркнет соблазнительные изгибы.',
        'Женщины с такой фигурой имеют пышную грудь, достаточно широкие плечи, широкие бедра и ягодицы, тонкую и короткую талию и аккуратные голени. Немалый процент таких девушек почему-то подвержен комплексам. Они пытаются сбросить вес, чтобы сделать бедра менее заметными. Не стоит этого делать. Ваша фигура прекрасна, только нужно подчеркнуть ее достоинства!',
        'Этот тип часто встречается среди известных моделей. У них широкие плечи, узкие бедра, длинные тонкие ноги и небольшая грудь.',
        'Определение типа фигуры «колокольчик» не составляет труда. У таких женщин узкие плечи и небольшая грудь, низкая талия, массивные бедра и полные ноги. Чаще всего такую фигуру имеют невысокие женщины. И опять же с помощью удачной одежды можно скрыть все погрешности телосложения и подчеркнуть достоинства.',
        'Широкая верхняя часть и узкая верхняя. Широкие плечи и сдобная грудь, отсутствие талии, длинные тонкие ноги – вот образ женщин с фигурой «бокал». В таком случае следует делать особенный акцент на ноги.',
        'Характерными для этого типа фигуры являются узкие плечи и отсутствие талии, средний размер груди и длинные ноги. Женщины этого типа чаще всего становятся моделями. На них изумительно сидят вечерние наряды.',
        'У этих девушек грудь среднего размера, широкие бедра, небольшая талия и полноватые лодыжки. Часто этот тип путают с «грушей». Да, сходство определенно есть, у груши крупные ягодицы, а у «кегли» — бедра. И спрятать их за удачной одеждой не составит труда.',
        'Этим женщинам досталась небольшой размер груди, отсутствие живота, тонкая талия, округлые бедра, полные ноги и ягодицы. Основное внимание сконцентрировано на бедрах и ягодицах, но это не повод для переживаний. Все поправимо!'];
    const d = document.getElementById('description');
    d.innerHTML = des[res];
    const shape = ['apple', 'brick', 'column', 'vase', 'hour', 'cello', 'cornet', 'bell', 'goblet', 'lollipop', 'skittle', 'pear'];
    showImage('2' + shape[res]);
}
function hideChoiceButton() {
    const y = document.getElementById('yes');
    const n = document.getElementById('no');
    y.style.display = 'none';
    n.style.display = 'none';
}
function showButtonHome() {
    const h = document.getElementById('home');
    h.style.display = 'block';
}
function InitHome() {
    const button = document.getElementById('home');
    button.style.display = 'none';
    const onHome = (event) => {
        if (event == undefined) {
            return;
        }
        location.reload();
    };
    Object(__WEBPACK_IMPORTED_MODULE_0__InitEveryButton__["a" /* default */])(button, onHome);
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