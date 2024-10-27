import Glide from "@glidejs/glide";
import { WebshopHelpers } from "./Helpers";

const glideInstance = new Glide("#webshop-slider", {
  type: "slider",
  perView: 4,
  startAt: 2,
});

window.webshopHelperInstrance = new WebshopHelpers();

glideInstance.mount();
