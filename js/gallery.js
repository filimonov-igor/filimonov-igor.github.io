document.querySelectorAll('.gallery__container img').forEach(image => {
  image.onclick = () =>{
    document.querySelector('.gallery__popup').style.display = 'block';
    document.querySelector('.gallery__popup img').src = image.getAttribute('src');
  }
});

document.querySelector('.gallery__popup span').onclick = () =>{
  document.querySelector('.gallery__popup').style.display = 'none';
}

document.querySelector('.gallery__popup').onclick = () =>{
  document.querySelector('.gallery__popup').style.display = 'none';
}

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,


  pagination: {
    el: '.swiper-pagination',
  },


  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});