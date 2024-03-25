import { renderPizzas } from "./modules/renderPizzas.js";
import { toppingsToogle } from "./modules/toppingsToogle.js";
import { renderToppings } from "./modules/renderToppings.js";

const init = () => {
  toppingsToogle();
  renderToppings();
  renderPizzas();
};

init();