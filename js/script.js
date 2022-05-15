// Variables
// MAIN MENU
const home = document.querySelector('#home');
const about = document.querySelector('#about');
const portfolio = document.querySelector('#portfolio');
const contact = document.querySelector('#contact');
const aboutMe = document.querySelector('#aboutMe');
// resp menu
const menuBar = document.querySelector('.barMenuBtn');
const closeMenu = document.querySelector('.closebtn');
const allSideBar = document.querySelector('.responsive__menu');
console.log(closeMenu);


// ADRESS(URL)
const page1 = "file:///C:/Users/user/Desktop/Themeforest_Portfolio/page_1/Themeforest_1.html";
const page2 = "file:///C:/Users/user/Desktop/Themeforest_Portfolio/page_2/Themeforest_2.html";
const page3 = "file:///C:/Users/user/Desktop/Themeforest_Portfolio/page_3/Themeforest_3.html";
const page4 = "file:///C:/Users/user/Desktop/Themeforest_Portfolio/page_4/Themeforest_4.html";



// EVENT LISTENERS
home.addEventListener('click', () => {
    window.open(page1, '_top');
});

about.addEventListener('click', () => {
    window.open(page2, '_top');
});

portfolio.addEventListener('click', () => {
    window.open(page3, '_top');
});

contact.addEventListener('click', () => {
    window.open(page4, '_top');
});

aboutMe.addEventListener('click', () => {
    window.open(page2, '_top');
});

menuBar.addEventListener('click',openMenu);
closeMenu.addEventListener('click',menuCloes);


function openMenu(){
    menuBar.classList.add('active');
    closeMenu.classList.add('active');
    allSideBar.classList.add('active');
}

function menuCloes(){
    closeMenu.classList.remove('active');
    menuBar.classList.remove('active');
    allSideBar.classList.remove('active');
}