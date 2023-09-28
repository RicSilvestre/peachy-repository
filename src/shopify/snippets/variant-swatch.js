class VariantSwatch extends HTMLElement {
  constructor() {
    super();
    this._init();
  }

  _init() {
    this.selector = this.querySelector("select");
    if (this.selector) {
      this.selector.addEventListener("change", e => {
        this.querySelector(".current-price").innerText = e.target.selectedOptions[0].dataset.price;
      })
    }
  }
}

customElements.define("variant-swatch", VariantSwatch);
