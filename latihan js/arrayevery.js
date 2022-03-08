let products = [
    { name: "Apple", type: "fruit" },
    { name: "monitor", type: "computer" },
    { name: "manggo", type: "fruit" },
    { name: "table", type: "furniture" }
];
console.log(
    products.every(products => products.type === "fruit")
)
console.log(
    products.some(products => products.type === "fruit")
)