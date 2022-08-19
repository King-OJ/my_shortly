const btn = document.getElementById("menu_btn");
const menu = document.getElementById("mobile_menu");

btn.addEventListener('click', navToggle)

function navToggle() {
  btn.classList.toggle('open');
  menu.classList.toggle('hidden');
}