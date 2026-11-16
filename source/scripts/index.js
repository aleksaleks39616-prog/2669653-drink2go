/* в этот файл добавляет скрипты*/
const header = document.querySelector('.main-header');
const burger = document.querySelector('.main-header__burger');

burger.addEventListener('click', () => {
  header.classList.toggle('main-header--menu-open');
});
