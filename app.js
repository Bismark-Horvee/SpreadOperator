function calculate(price1, price2, price3) {
  return price1 + price2 + price3;
}

const prices = [100, 200, 400];
const total = calculate(...prices);
console.log(`Your total price of the item is ${total}`);

const text = "Morality";
const array = [...text];
console.log(array.join(""));

const products = [
  {
    id: 1,
    name: "laptop",
    price: 20,
  },
  { id: 2, name: "phone", price: 30 },
  { id: 3, name: "battery", price: 15 },
  { id: 4, name: "earpod", price: 10 },
];

const updatedProducts = products.map((product) => {
  if (product.id === 1) {
    return {
      ...product,
      price: 200,
    };
  }
  return product;
});

console.log(updatedProducts);

const filteredproduct = products.filter((product) => {
  return product.id !== 2;
});

console.log(filteredproduct);
