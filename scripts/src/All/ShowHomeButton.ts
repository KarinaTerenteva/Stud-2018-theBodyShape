/**
 * Инициализация функции для отображения кнопки "на главную"
 * 
 * @module
 */
;

/**
 * Функция, отображающая кнопку "на главную"
 */
function showButtonHome (): void
{
    const h = document.getElementById('home') as HTMLButtonElement;
    h.style.display = 'block';
}

/**
 * Модуль
 */
export {
	showButtonHome as default,
};