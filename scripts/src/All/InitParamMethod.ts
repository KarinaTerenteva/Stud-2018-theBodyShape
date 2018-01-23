/**
 * Инициализация 1 метода
 * 
 * @module
 */
;

import showHomeButton from './ShowHomeButton';
import showImage from './ShowResultImage';

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
		showHomeButton ();
		initCalc ();
    };
    button.addEventListener( 'click', onParam);
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
        event.preventDefault();
    };
    button.addEventListener( 'click', onCalc);
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
 * Функция отображения результата для 1 метода
 * 
 */
function showResult (res: number): void
{
    const shape = ['invtriangle', 'triangle', 'hourglass', 'circle', 'rectangle', 'none'];
    showImage (shape[res]);
}

/**
 * Модуль
 */
export {
	initParam as default,
};