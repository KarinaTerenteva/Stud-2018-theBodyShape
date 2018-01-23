/**
 * Модуль инициализации кнопок
 */
;

import initParam from './InitParamMethod';
import initExtern from './InitExternellyMethod';
import initHome from './InitHomeButton';

function main(): void
{
    initParam ();
    initExtern ();
    initHome ();
}

export{
    main as default,
};