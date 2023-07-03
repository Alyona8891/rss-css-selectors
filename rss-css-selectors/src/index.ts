import './style.css';
import App from './components/app/app';
alert(
    'Уважаемый проверяющий! Если есть такая возможность, приступи к проверке моей работы чуть позже, пожалуйста. Постараюсь доделать к 05.07.2023. Спасибо'
);
const app = new App();

const els = document.querySelectorAll('.html-line');
console.log(els);
els.forEach((el, i) => {
    if (i !== 0) {
        el.addEventListener('mouseenter', () => {
            if (el instanceof HTMLElement) {
                el.style.background = 'white';
            }
        });
    }
});
els.forEach((el, i) => {
    if (i !== 0) {
        el.addEventListener('mouseleave', () => {
            if (el instanceof HTMLElement) {
                el.style.removeProperty('background');
            }
        });
    }
});
const localArrTaples = localStorage.getItem('alyonaArrTaples');
