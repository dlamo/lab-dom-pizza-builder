// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderIngredients();
  renderButtons();
  renderPrice();
}

function renderIngredients() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();
}

function renderPepperoni() {
  renderToppings('.pep', 'pepperoni');
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  renderToppings('.mushroom', 'mushrooms');
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  renderToppings('.green-pepper', 'greenPeppers');
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  renderBase('.sauce', 'whiteSauce', 'sauce-white');
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  renderBase('.crust', 'glutenFreeCrust', 'crust-gluten-free');
}

function renderToppings(ingredientClass, ingredientKey,) {
  document.querySelectorAll(ingredientClass).forEach(ing => state[ingredientKey] ? 
    ing.style.visibility = 'visible' : 
    ing.style.visibility = 'hidden');
}

function renderBase(ingredientClass, ingredientKey, changeElem) {
  !state[ingredientKey] ?
    document.querySelector(ingredientClass).classList.remove(changeElem) :
    document.querySelector(ingredientClass).classList.add(changeElem)
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  const keyStates = Object.keys(state);
  document.querySelectorAll('.btn').forEach((button, i) => {
    if (!state[keyStates[i]]) {
      button.classList.remove('active');
    } else {
      button.classList.add('active');
    }
  });
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const keyStates = Object.keys(state);
  document.querySelectorAll('.panel.price ul li').forEach((ing, i) => {
    if (!state[keyStates[i]]) {
      ing.style.display = 'none';
    } else {
      ing.style.display = 'block';
    }
  });
  // set a price list and calculate the total cost of the pizza
  const prices = [1,1,1,3,5];
  const totalPrice = document.querySelector('.panel.price > strong');
  totalPrice.innerHTML = "$" + prices.reduce((total, price, i) => state[keyStates[i]] ? total + price : total, 10);
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});
// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});