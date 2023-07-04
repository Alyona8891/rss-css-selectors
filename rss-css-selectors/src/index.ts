import './style.css';
import App from './components/app/app';
/*alert(
    'Уважаемый проверяющий! Если есть такая возможность, приступи к проверке моей работы чуть позже, пожалуйста. Постараюсь доделать к 05.07.2023. Спасибо'
);*/
const app = new App();

window.addEventListener('keyup', (event: Event | KeyboardEvent) => {
    console.log(1);
    if (event instanceof KeyboardEvent) {
        if (event.key === 'Enter') {
            console.log(event.key === 'Enter');
            event.preventDefault();
            const el = document.querySelector('.enter-button') as HTMLElement;
            el.click();
        }
    }
});
