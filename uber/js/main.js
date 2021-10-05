'use strict';

window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu__list'),
        menuItem = document.querySelectorAll('.menu__list-item'),
        burger = document.querySelector('.burger');

  burger.addEventListener('click', () => {
    menu.classList.toggle('menu__list_active');
    burger.classList.toggle('burger_active');
  });

  menuItem.forEach(item => {
    item.addEventListener('click', () => {
      menu.classList.toggle('menu__list_active');
      burger.classList.toggle('burger_active');
    });
  });
  
});