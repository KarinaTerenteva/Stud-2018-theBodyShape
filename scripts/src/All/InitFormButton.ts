/**
 * Инициализация кнопки
 * 
 * @module
 */
;

/**
 * Инициализация кнопки
 * 
 * @param button Кнопка
 * @returns
 */

function buttonAction (button: HTMLButtonElement, action: (event: Event) => void ): void
{
	const onAct = (event: Event): void =>
	{
		action(event);
		event.preventDefault();
	};
	button.addEventListener( 'click', onAct );
}

/**
 * Модуль
 */
export {
	buttonAction as default,
};