const stars = document.querySelectorAll('.star')

stars.forEach(function(star, index) {
    star.addEventListener('click', () => {
        for(i = 0; i<=index; i++ ){
            stars[i].classList.add('checked')
        }
        for(i = index + 1; i < stars.length; i++){
            stars[i].classList.remove('checked')
        }
    })
})

var swiper = new Swiper(".carouselContent ", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
 
  });