import { getData } from "./getData.js";

export const renderToppings = async () => {
  const { en: enToppings, ru: ruToppings } = await getData("https://cooperative-autumn-swordfish.glitch.me/api/toppings");
 
  const toppingsList = document.querySelector(".toppings__list");
  toppingsList.textContent = "";

  const items = enToppings.map((enName, i) => {
    // console.log("data: ", data);
    const item = document.createElement("li");
    item.classList.add("toppings__item");
    item.innerHTML = `
    <input
      class="toppings__checkbox"
      type="checkbox"
      name="toppings"
      value="${enName}"
      id="${enName}"
    />
    <label class="toppings__label" for="${enName}">
    ${ruToppings[i][0].toUpperCase()}${ruToppings[i].slice(1).toLowerCase()}
    </label>
    `;

    return item;
  });

  toppingsList.append(...items);
};
