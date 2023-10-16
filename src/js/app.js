// ------------------------- BURGER MENU ------------------------
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
        document.querySelector('body').classList.add('dis-scroll')
    })
}
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
        document.querySelector('body').classList.remove('dis-scroll')
    })
}
const navLink = document.querySelectorAll('.nav__list li a')
const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
    document.querySelector('body').classList.remove('dis-scroll')
}
navLink.forEach(n => n.addEventListener('click', linkAction))