const products = [
  { name: "Headphones", ratings: [4, 5, 4], popular: false },
  { name: "Phone Case", ratings: [3, 3.5, 4], popular: false },
  { name: "Smartwatch", ratings: [5, 4.5, 4.75], popular: false },
];

let popularProducts = [];

const calculateAverage = (ratings) =>
  ratings.length === 0
    ? 0
    : ratings.reduce((a, b) => a + b, 0) / ratings.length;

for (let product of products) {
  if (calculateAverage(product.ratings) > 4.0) {
    product.popular = true;
    popularProducts.push(product.name);
  }
}

for (let product of products) {
  console.log(`${product.name}: Average = ${calculateAverage(product.ratings).toFixed(2)}, Popular = ${product.popular}`);
}

console.log(popularProducts);
