async function fetchDataFromJson() {
  try {
    const response = await fetch("./data.json");
    if (response.ok) {
      const data = await response.json();
      const products = data.products;

      let sumOfProducts = 0;
      let mostExpensive = products[0];
      let inStockProducts = [];
      let categories = new Set();

      for (let product of products) {
        console.log(product.name);
        sumOfProducts += product.price;
        if (product.price > mostExpensive.price) {
          mostExpensive = product;
        }
        if (product.inStock) {
          inStockProducts.push(product);
        }
        categories.add(product.category);
      }

      console.log("\nTotal Price of All Products:", sumOfProducts);

      console.log("\nMost Expensive Product:");
      console.log(mostExpensive);

      console.log("\nProducts In Stock:");
      inStockProducts.forEach((p) => console.log(p.name));

      console.log("\nAll Categories:");
      console.log([...categories]);
    } else {
      throw new Error("Failed to fetch data");
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
}

fetchDataFromJson();
