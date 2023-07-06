function createHandlerEnter(): void {
    window.addEventListener('keyup', (event: Event | KeyboardEvent) => {
        if (event instanceof KeyboardEvent) {
            if (event.key === 'Enter') {
                event.preventDefault();
                const el = document.querySelector('.enter-button') as HTMLElement;
                el.click();
            }
        }
    });
}
export default createHandlerEnter;
