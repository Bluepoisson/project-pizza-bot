const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

//Put your Javscript code here:

console.log(vegetarian, hawaiian, pepperoni, pizzaPrice);

alert(
  `Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`
);

const orderName = prompt(
  "Enter the name of the pizza you want to order today."
);

const validateOrderName = () => {
  if (
    orderName === vegetarian ||
    orderName === hawaiian ||
    orderName === pepperoni
  ) {
    return true;
  } else {
    alert(`Sorry, we don't have that pizza on our menu.`);
    return false;
  }
};

if (validateOrderName(orderName)) {
  const orderQuantity = prompt(`How many of ${orderName} do you want?`);
  const orderTotal = orderQuantity * pizzaPrice;
  alert(
    `Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr`
  );
  const cookingTime = () => {
    if (orderQuantity <= 2) {
      alert(`The pizzas will take 10 minutes.`);
    } else if (3 < orderQuantity < 6) {
      alert(`The pizzas will take 15 minutes.`);
    } else {
      alert(`The pizzas will take 20 minutes.`);
    }
  };

  cookingTime();
}

// const validateOrderName = () => {

//   if (orderName === vegetarian) {
//     let orderQuantity = prompt(`How many of ${orderName} do you want?`);
//   } else if (orderName === hawaiian) {
//     orderQuantity = prompt(`How many of ${orderName} do you want?`);
//   } else if (orderName === pepperoni) {
//     orderQuantity = prompt(`How many of ${orderName} do you want?`);
//   } else {
//     const wrongOrder = alert(`Sorry, we don't have that pizza on our menu.`);
//   }
// };
// //why doesn't vegetarian work in if function? we tried

// validateOrderName();

// alert(
//   `Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr`
// );
