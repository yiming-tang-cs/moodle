export const init = () => {
    const toggleBtn = document.getElementById('nightmode-toggle');
    if (!toggleBtn) {
        return;
    }

    const root = document.body;
    const isNight = localStorage.getItem('nightmode') === 'true';
    if (isNight) {
        root.classList.add('night-mode');
    }

    toggleBtn.addEventListener('click', () => {
        root.classList.toggle('night-mode');
        localStorage.setItem('nightmode', root.classList.contains('night-mode'));
    });
};
