import { renderPizzas } from "./modules/renderPizzas.js";
import { toppingsToogle } from "./modules/toppingsToogle.js";

const init = () => {
  toppingsToogle();
  renderPizzas();
};
init();
