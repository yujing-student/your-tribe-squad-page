// Dark Theme Function

function changetheme() {
    const body = document.body
    body.classList.toggle('dark-mode')
    const isDarkMode = body.classList.contains('dark-mode')

    //Toggled tussen de regular en filled icon, depending on dark mode activated of niet.
    const toggle = document.querySelector('i') 
    toggle.classList.toggle('fa-regular')
    toggle.classList.toggle('fa-solid')

    const hero = document.querySelector('.header > img') // Selecteert de IMG in de header
    if (isDarkMode) { // Als de website op dark mode staat, dan
        hero.src = 'assets/darkmode.png' // is de image darkmode.png
    } else { // Anders,
        hero.src = 'assets/lightmode.png' // is de image lightmode.png
    }
}

// Birthday Function

let now = new Date() // Maakt een 'Date' object voor vandaag.
document.querySelectorAll('[data-birthday]').forEach((element => { // Haalt alle HTML elementen op die een 'data-birthday' attribuut hebben.
    let date = new Date(Date.parse(element.dataset.birthday)) // Maakt een 'Date' object voor de opgegeven birthday aan.

    if (date.getDate() == now.getDate() && date.getMonth() == now.getMonth()){ // Dit checkt dat de dag van de maand en de maand gelijk zijn.
        element.classList.remove('hidden') // Als de datum van vandaag matcht met een birthday, haalt hij de class 'hidden' weg.
    }
}))
