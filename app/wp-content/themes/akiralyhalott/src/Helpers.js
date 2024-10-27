export class WebshopHelpers {
  titleContainer;
  priceContainer;
  webshopSlider;
  previewImage;
  productLink;

  constructor() {
    this.titleContainer = document.getElementById("title-container");
    this.priceContainer = document.getElementById("price-container");
    this.webshopSlider = document.getElementById("webshop-slider");
    this.previewImage = document.getElementById("preview-image");
    this.productLink = document.getElementById("product-link");
    debugger;

    const sliderItems = document.getElementsByClassName("product_slide_link");

    Array.from(sliderItems).forEach((item) => {
      item.addEventListener("click", (event) => {
        debugger;
        event.preventDefault();

        const newTitle = item.getAttribute("data-title");
        const newPrice = item.getAttribute("data-price");
        const newPreviewImage = item.getAttribute("data-image-src");
        const newProductUrl = item.getAttribute("data-product-url");

        this.titleContainer.innerText = newTitle;
        this.priceContainer.innerText = `${newPrice} Ft`;
        this.previewImage.src = newPreviewImage;
        this.productLink.href = newProductUrl;
      });
    });
  }
}
