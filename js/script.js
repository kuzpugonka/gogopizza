const toppingsToogle = () => {
  const toppingsButton = document.querySelector(".toppings__button");
  const toppingsList = document.querySelector(".toppings__list");

  toppingsButton.addEventListener("click", () => {
    if (!toppingsList.classList.contains("toppings__list_show")) {
      toppingsList.classList.add("toppings__list_show");
      toppingsButton.classList.add("toppings__button_active");

      toppingsList.style.maxHeight = toppingsList.scrollHeight + "px";
    } else {
      toppingsButton.classList.remove("toppings__button_active");
      toppingsList.style.maxHeight = null;

      setTimeout(() => {
        toppingsList.classList.remove("toppings__list_show");
      }, 300);
    }
  });
};

const getPizzas = async () => {
  try {
    const response = await fetch(
      "https://cooperative-autumn-swordfish.glitch.me/api/products"
      );
      if (!response.ok) {
        throw new Error('Ошибка в ответе сервера')
      }

      return await response.json()
      
  } catch (error) {
    console.error(`Данные с сервера не получены: ${error}`);
  }
};

const renderPizzas = async () => {
  const pizzas = await getPizzas();
  console.log("pizzas: ", pizzas);
};

const init = () => {
  toppingsToogle();
  renderPizzas();
};
init();
