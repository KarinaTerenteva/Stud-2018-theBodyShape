/**
 * Инициализация функцим отображения результата-изображения
 * 
 * @module
 */
;

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
 * Модуль
 */
export {
	showImage as default,
};