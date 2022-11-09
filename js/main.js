const doc = document;

const mobileBurger = doc.querySelector('.mobile-burger');
const mobileBurgerLines = doc.querySelectorAll('.mobile-burger__line');
const mobileMenu = doc.querySelector('.header__menu');

mobileBurger.addEventListener('click', () => {
    changeState(mobileBurger);
})


function changeState(elem) {
    const state = elem.dataset.state;
    if (state === 'open') {
        elem.setAttribute('data-state', 'close');
        addClass (mobileBurgerLines);
        mobileMenu.classList.add('header__menu--active');
    } else if (state === 'close') {
        elem.setAttribute('data-state', 'open');
        removeClass (mobileBurgerLines);
        mobileMenu.classList.remove('header__menu--active');
    }
}

function addClass (elem) {
    elem.forEach ( (el) => {
        const attr = el.dataset.attr;
        if (attr  === 'topline') {
            el.classList.add('mobile-burger__topline');
        } else if (attr  === 'centerline') {
            el.classList.add('mobile-burger__centerline');
        } else if (attr  === 'bottomline') {
            el.classList.add('mobile-burger__bottomline');
        }
    });
}

function removeClass (elem) {
    elem.forEach ( (el) => {
        const attr = el.dataset.attr;
        if (attr  === 'topline') {
            el.classList.remove('mobile-burger__topline');
        } else if (attr  === 'centerline') {
            el.classList.remove('mobile-burger__centerline');
        } else if (attr  === 'bottomline') {
            el.classList.remove('mobile-burger__bottomline');
        }
    });
}

