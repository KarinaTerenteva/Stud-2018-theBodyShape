/**
 * Инициализация кнопки "на главную"
 * 
 * @module
 */
;

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
    button.addEventListener( 'click', onHome);
}

/**
 * Модуль
 */
export {
	InitHome as default,
};