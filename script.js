'use strict';

const expandInputWidth = () => {
    document.querySelector('.header-xs .shopping-cart-sm').style.opacity = 0;
    document.querySelector('.header-xs .loyalty-plan-sm').style.opacity = 0;
    document.querySelector('.header-xs .cart-quantity').style.opacity = 0;
    setTimeout( () => {
        document.querySelector('.header-xs .shopping-cart-sm').style.display = 'none';
        document.querySelector('.header-xs .loyalty-plan-sm').style.display = 'none';
        document.querySelector('.header-xs .cart-quantity').style.display = 'none';
        document.querySelector('.header-xs').classList.add('expandido');
    }, 150 );
};
const colapseInputWidth = () => {
    document.querySelector('.header-xs').classList.remove('expandido');
    setTimeout( () => {
        document.querySelector('.header-xs .shopping-cart-sm').style.display = 'block';
        document.querySelector('.header-xs .loyalty-plan-sm').style.display = 'block';
        document.querySelector('.header-xs .cart-quantity').style.display = 'block';
        document.querySelector('.header-xs .shopping-cart-sm').style.opacity = 1;
        document.querySelector('.header-xs .loyalty-plan-sm').style.opacity = 1;
        document.querySelector('.header-xs .cart-quantity').style.opacity = 1;
    }, 150 );
};

document.querySelector('.header-xs .buscar-sm input[type="text"]').addEventListener('focus', expandInputWidth, !1);
document.querySelector('.header-xs .buscar-sm input[type="text"]').addEventListener('focusout', colapseInputWidth, !1);