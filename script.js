new Swiper("#swiper-1", {
  effect: "fade",
  autoplay: {
      delay: 2500,
      disableOnInteraction: false,
  },
  pagination: {
      el: "#swiper-1 .swiper-pagination",
      clickable: true,
  },
  lazyLoading: true,
  loop: true
});

new Swiper("#swiper-2", {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 10,
  pagination: {
      el: ("#swiper-2 .swiper-custom-pagination"),
      clickable: true,
      renderBullet: function (index, className) {
      return `<div class=${className}>
          <span class="number">${index + 1}</span>
          <span class="line"></span>
          </div>`;
      }
  },
  lazyLoading: true,
  loop: true,
  keyboard: {
      enabled: true,
  },
  navigation: {
      nextEl: "#nav-right",
      prevEl: "#nav-left"
  },
  breakpoints: {
      0: {
          slidesPerView: 1, // 1 slide per view on small screens
      },
      800: {
          slidesPerView: 2, // 2 slides per view on medium screens
      },
      1024: {
          slidesPerView: 3, // 3 slides per view on large screens
      },
      1400: {
          slidesPerView: 4,
          centeredSlides: true,
           // 4 slides per view on extra-large screens
      }
  },
  on: {
      reachEnd: function () {
          this.allowSlideNext = false; // Stop scrolling forward at the last slide
      },
      reachBeginning: function () {
          this.allowSlidePrev = false; // Stop scrolling backward at the first slide
      },
      slideChange: function () {
          if (!this.isBeginning && !this.isEnd) {
              this.allowSlideNext = true;
              this.allowSlidePrev = true;
          }
      }
  }
});
// Optional: Add JS for smooth scroll or you can use a carousel library
const listContainer = document.querySelector('.list-container');

// Optional: Add smooth scroll when using a mouse wheel or touchpad
listContainer.addEventListener('wheel', (event) => {
  event.preventDefault();
  listContainer.scrollLeft += event.deltaY;
});
