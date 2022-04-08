(() => {
  const slideWrapper = document.querySelector('.container'),
        slides = document.querySelectorAll('.item'),
        totalSlides = slides.length;


  var sliderWidth = slideWrapper.clientWidth;
  var slideIndex = 0;
  var slider = document.querySelector('.slider');

  slider.style.width = sliderWidth * totalSlides + 'px';

  showSlides()

  function showSlides() {
      for(var i=0;i<slides.length;i++){
          slider.style.left = -(sliderWidth * slideIndex) + 'px';
      }
      slideIndex++;
      if (slideIndex === totalSlides) {
          slideIndex = 0;
      }
      setTimeout(showSlides, 2000);
  }
  
})();
