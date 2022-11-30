let upButton = document.querySelector('.up-button'); //нашли кнопку
  
  window.onscroll = function () {   // при прокрутке вызыве функцию
    if (window.pageYOffset > 200) {   // если прокручено больше чем на 200пх
      upButton.classList.add('shown');   // добавь кнопке класс показан
    } else {
      upButton.classList.remove('shown'); // иначе не показывай кнопку
    }
  
  };
  
  upButton.onclick = function () {   // при клике вызывай функцию и скроль наверх
    window.scrollTo(0, 0);
  };