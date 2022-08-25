{
  /* <div id="pizza-root">
<select class="pizza-select">
  <option value="four_meats">Four Meats</option>
  <option value="royal_cheese">Royal Cheese</option>
  <option value="vegetarian">Vegetarian</option>
  <option value="smoked_salmon">Smoked Salmon</option>
</select>
<div class="items">
  <div class="pizza-item">Four Meats</div>
  <div class="pizza-item">Royal Cheese</div>
  <div class="pizza-item">Vegetarian</div>
  <div class="pizza-item">Smoked Salmon</div>
</div>
</div> */
}

const items = ["Four Meats", "Royal Cheese", "Vegetarian", "Smoked Salmon"];

class PizzaMenu {
  constructor(items = []) {
    const pizzaSelect = document.createElement("select");
    pizzaSelect.classList.add("pizza-select");
    this.pizzaSelect = pizzaSelect;
    this.#addSelectOptions(items);

    const pizzaPics = document.createElement("div");
    pizzaPics.classList.add("items");
    this.pizzaPics = pizzaPics;
    this.#addPizzaPictures(items);
  }

  #addSelectOptions(items) {
    const emptyOption = document.createElement("option");
    emptyOption.value = "";
    emptyOption.innerText = "";

    const options = items.map((item) => {
      const option = document.createElement("option");
      option.value = item.toLowerCase().replace(" ", "_");
      option.innerText = item;
      return option;
    });
    // console.log(options);
    // console.log(...options);
    this.pizzaSelect.append(emptyOption, ...options);
  }

  #addPizzaPictures(items) {
    const divs = items.map((item) => {
      const div = document.createElement("div");
      div.classList.add("pizza-item");
      const pizzaId = item.toLowerCase().replace(" ", "_");
      div.setAttribute("id", pizzaId);
      div.value = item;
      div.innerText = item;
      return div;
    });
    // console.log(options);
    // console.log(...options);
    this.pizzaPics.append(...divs);
  }

  render(rootId = "") {
    document.getElementById(rootId).append(this.pizzaSelect, this.pizzaPics);

    this.pizzaSelect.addEventListener("change", (event) => {
      const { value: selectedItem } = event.target;
      console.log(selectedItem);
      const focusedNow = document.querySelector("div.focused");
      if (focusedNow) {
        focusedNow.classList.remove("focused");
      }
      document.getElementById(selectedItem).classList.add("focused");
      // console.log(event.currentTarget.value);
      // console.log(event.currentTarget.innerText);
      // console.log(event.currentTarget);
      // console.log(event.target);
    });
  }
}

const pizzaMenu = new PizzaMenu(items);
console.log(pizzaMenu);
console.log(pizzaMenu.__proto__);
console.log(PizzaMenu.prototype);

pizzaMenu.render("pizza-root");
