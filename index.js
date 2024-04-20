let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn =document.querySelector('#login-btn');
let loginForm =document.querySelector('.login-form-container');

let videoBtn = document.querySelectorAll('.vid-btn');

window.onscroll =()=>{
  searchBtn.classList.remove('fa-times');
  searchBtn.classList.remove('active');

}

formBtn.addEventListener('click',()=> {
  loginForm.classList.add('active');
})
/*
videoBtn.forEach(btn => {
     btn.addEventListener('click',()=>{
      document.querySelector('.controls.active').classList.remove('active');
      btn.classList.add('active');
      let src = btn.getAttribute('data-src');
      document.querySelector('#video-slider'),src = src;
     });
});*/