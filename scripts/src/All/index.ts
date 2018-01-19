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
    InitHome ();
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
        showButtonHome ();
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
        showResult1 (res);
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
 * Функция отображения результата для 1 метода
 * 
 */
function showResult1 (res: number): void
{
    const shape = ['invtriangle', 'triangle', 'hourglass', 'circle', 'rectangle', 'none'];
    showImage (shape[res]);
}

/**
 * Функция отображения результата-изображения
 * 
 */
function showImage (shape: string): void
{
    const link = 'img/' + shape + '.jpg';
    const elem = document.getElementsByTagName('img')[0] as HTMLImageElement;
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
        showButtonHome ();
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
    const questions = ['','У Вас четко выражена талия?','Ваш живот - самая широкая часть тела?','Вы высокая и стройная?','Ваша талия длинная и немного широкая?','Ваши бёдра - самая широкая часть тела?','Вы полная?','У Вас большая грудь или склонная к полноте середина тела?','У Вас короткая талия?','Вы высокая и худая?','У Вас есть седалищные мешки (отложения жира на внешней части бёдер)?'];
    const res = ['ЯБЛОКО','БРИКЕТ','КОЛОННА','ВАЗА','ПЕСОЧНЫЕ ЧАСЫ','ВИОЛОНЧЕЛЬ','КОНУС','КОЛОКОЛЬЧИК','БОКАЛ','ЛЕДЕНЕЦ','КЕГЛЯ','ГРУША'];
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
        q -= 11;
        elem.innerHTML = res[q];
        showResult2 (q);
        hideChoiceButton ();
    }
    else
        elem.innerHTML = questions[q];
} 

/**
 * Функция отображения результата для 2 метода
 * 
 */
function showResult2 (res: number): void
{
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
    const d = document.getElementById ('description') as HTMLElement;
    d.innerHTML = des[res];
    const shape = ['apple','brick','column','vase','hour','cello','cornet','bell','goblet','lollipop','skittle','pear'];
    showImage ('2' + shape[res]);
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

/**
 * Функция, отображающая кнопку "на главную"
 */
function showButtonHome (): void
{
    const h = document.getElementById('home') as HTMLButtonElement;
    h.style.display = 'block';
}

/**
 * Инициализация кнопки "на главную"
 * 
 * @param button Имя группы кнопок
 */
function InitHome (): void
{
    const button = document.getElementById('home') as HTMLButtonElement;
    button.style.display = 'none';
    const onHome = ( event: Event ): void => 
	{	
        if (event == undefined) {
            return;
        }
        location.reload();
    };
	initButton (button, onHome);
}

export{
    main as default,
};