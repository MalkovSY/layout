window.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.gallery__item'),
        all = document.querySelector('.gallery__btn-all'),
        tour = document.querySelector('.gallery__btn-tour'),
        nature = document.querySelector('.gallery__btn-nature'),
        pro = document.querySelector('.gallery__btn-pro');

all.classList.add('active-btn');

const hide = (btn) => {
all.classList.remove('active-btn');
tour.classList.remove('active-btn');
nature.classList.remove('active-btn');
pro.classList.remove('active-btn');
btn.classList.add('active-btn');

items.forEach(item => {
item.classList.remove('fade');
item.style.display = 'none';
});
};

const show = (item, n) => {
item[n].classList.add('fade');
item[n].style.display = 'block';
};

all.addEventListener('click', () => {
hide(all);
items.forEach(item => {
item.classList.add('fade');
item.style.display = 'block'
});
})

tour.addEventListener('click', () => {
hide(tour);
show(items, 1);
show(items, 2);
show(items, 3);
});

nature.addEventListener('click', () => {
hide(nature);
show(items, 0);
show(items, 4);
show(items, 5);
});

pro.addEventListener('click', () => {
hide(pro);
show(items, 0);
show(items, 2);
show(items, 5);
});

$('.slider-blog__inner').slick({
  arrows: false,
  dots: true
})

const burger = document.querySelector('.burger'),
      menu = document.querySelector('.menu__list'),
      menuItem = document.querySelectorAll('.menu__list-link');

burger.addEventListener('click', () => {
  menu.classList.toggle('menu__list_active');
});

menuItem.forEach(item => {
  item.addEventListener('click', () => {
    menu.classList.toggle('menu__list_active');
  })
})

});