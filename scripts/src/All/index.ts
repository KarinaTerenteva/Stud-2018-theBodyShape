/**
 * Модуль инициализации кнопок
 */
;

import initButton from './InitEveryButton';
import initFormButton from './InitFormButton';

/**
 * Индекс текущего вопроса из массива questions
 */
let q: number;

function main(): void
{
    q = 0;
    initParam ();
    initCalc ();
    initExtern ();
    initYes ();
    initNo ();
}

/**
 * Инициализация кнопки запуска 1 метода
 * 
 * @param button Имя группы кнопок
 */
function initParam (): void
{
    const button = document.getElementById('parameters') as HTMLButtonElement;
    const m = document.getElementById('methods') as HTMLButtonElement;
    const m1 = document.getElementById('m1') as HTMLButtonElement;
    const onParam = ( event: Event ): void => 
	{	
        if (event == undefined) {
            return;
        }
        m.style.display = 'none';
        m1.style.display = 'block';
    };
	initButton (button, onParam);
}

/**
 * Инициализация кнопки расчета
 * 
 * @param button Имя группы кнопок
 */
function initCalc (): void
{
    const button = document.getElementById('calculate') as HTMLButtonElement;
    const onCalc = ( event: Event ): void => 
	{	
        if (event == undefined) {
            return;
        }
        const form = document.forms[0];// as HTMLFormElement;
        const s = (<HTMLInputElement>form.elements[0]).value;
        const w = (<HTMLInputElement>form.elements[1]).value;
        const t = (<HTMLInputElement>form.elements[2]).value;
        const res = calculate (Number(s), Number(w), Number(t));
        showResult (res);
        form.style.display = 'none';
    };
	initFormButton (button, onCalc);
}

/**
 * Функция расчета типа фигуры
 * 
 */
function calculate (s: number, w: number, t: number): number
{
    if (s/t >= 1.05)
        return 0;
    else if (s/t <= 0.95)
            return 1;
        else if (w/t <= 0.75)
                return 2;
            else if (w/t >= 1.05)
                    return 3;
                else if (w/t <= 1)
                        return 4;
                    else return 5;
}

/**
 * Функция отображения результата расчета
 * 
 */
function showResult (res: number): void
{
    const shape = ['invtriangle', 'triangle', 'hourglass', 'circle', 'rectangle', 'none'];
    const elem = document.getElementsByTagName('img')[0] as HTMLImageElement;
    const link = 'img/' + shape[res] + '.jpg';
    elem.src = link;
    elem.style.display = 'block';
}

/**
 * Инициализация кнопки запуска 2 метода
 * 
 * @param button Имя группы кнопок
 */
function initExtern (): void
{
    const button = document.getElementById('externelly') as HTMLButtonElement;
    const m = document.getElementById('methods') as HTMLButtonElement;
    const m2 = document.getElementById('m2') as HTMLButtonElement;
    const onExtern = ( event: Event ): void => 
	{	
        if (event == undefined) {
            return;
        }
        m.style.display = 'none';
        m2.style.display = 'block';
    };
	initButton (button, onExtern);
}

/**
 * Инициализация кнопки "да"
 * 
 * @param button Имя группы кнопок
 */
function initYes (): void
{
    const button = document.getElementById('yes') as HTMLButtonElement;
    const onYes = ( event: Event ): void => 
	{	
        if (event == undefined) {
            return;
        }
        choice (1);
    };
	initButton (button, onYes);
}

/**
 * Инициализация кнопки "нет"
 * 
 * @param button Имя группы кнопок
 */
function initNo (): void
{
    const button = document.getElementById('no') as HTMLButtonElement;
    const onNo = ( event: Event ): void => 
	{	
        if (event == undefined) {
            return;
        }
        choice (0);
    };
	initButton (button, onNo);
}

/**
 * Функция изменения вопроса в зависимсти от ответа
 */
function choice (num: number): void
{
    let elem = document.getElementById('question') as HTMLElement;
    const questions = ['Ваш тип фигуры - ','У Вас четко выражена талия?','Ваш живот - самая широкая часть тела?','Вы высокая и стройная?','Ваша талия длинная и немного широкая?','Ваши бёдра - самая широкая часть тела?','Вы полная?','У Вас большая грудь или склонная к полноте середина тела?','У Вас короткая талия?','Вы высокая и худая?','У Вас есть седалищные мешки (отложения жира на внешней части бёдер)?'];
    const res = ['яблоко','брикет','колонна','ваза','песочные часы','виолончель','конус','колокольчик','бокал','леденец','кегля','груша'];
    switch (q)
    {
        case 0: q = (num ? 2 : 1); break;
        case 1: q = (num ? 4 : 3); break;
        case 2: q = (num ? 11 : 5); break;
        case 3: q = (num ? 13 : 12); break;
        case 4: q = (num ? 14 : 6); break;
        case 5: q = (num ? 8 : 7); break;
        case 6: q = (num ? 16 : 15); break;
        case 7: q = (num ? 9 : 17); break;
        case 8: q = (num ? 18 : 10); break;
        case 9: q = (num ? 20 : 19); break;
        case 10: q = (num ? 22 : 21); break;
    }
    if (q > 10)
    {
        elem.innerHTML = questions[0] + res[q-11];
        hideChoiceButton ();
    }
    else
        elem.innerHTML = questions[q];
} 

/**
 * Функция, скрывающая варианты ответа
 */
function hideChoiceButton ()
{
    const y = document.getElementById('yes') as HTMLButtonElement;
    const n = document.getElementById('no') as HTMLButtonElement;
    y.style.display = 'none';
    n.style.display = 'none';
}

export{
    main as default,
};