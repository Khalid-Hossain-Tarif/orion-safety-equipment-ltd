//Sticky Header
window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 0);
});


//Header Request Form
const requestForm = document.querySelector('.request-form');
document.querySelector('#request-form-menu').onclick = function () {
  requestForm.classList.toggle('active');
}

//Mobile Navigation 
const navigation = document.querySelector('.navigation');
document.querySelector('.toggle').onclick = function () {
  this.classList.toggle('active');
  navigation.classList.toggle('active');
}

const mobileNavigation = document.querySelector('.mobile-submenu-item');
document.querySelector('.mobile-submenu-item').onclick = function () {
  this.classList.toggle('mSactive');
  navigation.classList.toggle('mSactive');
}