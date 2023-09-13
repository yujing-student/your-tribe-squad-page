function changetheme() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');

    const toggle = document.querySelector('i');
    toggle.classList.toggle('fa-regular');
    toggle.classList.toggle('fa-solid');

    const hero = document.querySelector('.header > img');
    if (isDarkMode) {
        hero.src = 'assets/darkmode.png';
    } else {
        hero.src = 'assets/lightmode.png';
    }
}