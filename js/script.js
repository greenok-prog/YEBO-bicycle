let menuTogle = document.getElementById('menu');
const headerInner = document.querySelector('.header__inner');


menuTogle.addEventListener('click', ()=>{
    headerInner.classList.toggle('active')

})