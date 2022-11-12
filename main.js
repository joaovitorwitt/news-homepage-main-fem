const hamburguer = document.querySelector('.mobile-menu');
const menuContent = document.querySelector('.mobile-list');

const closeOnX = document.querySelector('.x');


// OPENS MOBILE MENU
hamburguer.addEventListener('click', (e) => {
    menuContent.classList.add('active')
})

// CLOSES MOBILE MENU ON X BUTTON
closeOnX.addEventListener('click', (e) => {
    menuContent.classList.remove('active')
})

// CLOSES MOBILE MENU WHEN THE USER CLICKS OUTSIDE THE MENU
menuContent.addEventListener('click', (e) => {
    if (e.target === menuContent) {
        menuContent.classList.remove('active')
    }
})