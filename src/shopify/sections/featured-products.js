import Swiper, { Autoplay, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

import "@/shopify/snippets/variant-swatch";

const FeaturedProducts = {
  onLoad() {
    this._init();
  },

  _init() {
    this.sliderWrapper = this.container.querySelector(".swiper");
    window.addEventListener("resize", () => {
      if (!this.sliderWrapper) return;
      if (window.innerWidth < 768) {
        if (this.slider && !this.slider.destroyed) return
        this.slider = new Swiper(this.sliderWrapper, {
          slidesPerView: 1,
          autoplay: false,
          pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true,
          },
          modules: [Autoplay, Pagination],
        });
      } else {
        if (this.slider?.destroyed) return;
        this.slider?.destroy();
      }
    })
    window.dispatchEvent(new Event("resize"));
  },
};

export default FeaturedProducts;

// Initial check on page load

