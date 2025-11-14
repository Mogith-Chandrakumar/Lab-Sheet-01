# JavaScript Arrays & Objects – Lab Project

This repository contains my lab work for understanding **JavaScript arrays and objects**, including how to store data, loop through items, and calculate results using object properties.

## 📌 Project Overview

This project covers:

- Creating and using **arrays**
- Working with **objects** inside arrays
- Calculating totals using object values
- Looping through arrays using `for` and `forEach`
- Displaying outputs in the console

---

## 🚀 Features Implemented

- Store a list of products (name, price, quantity)
- Calculate total inventory value
- Display each product using loops
- Use template literals for clean formatting

---

## 🧩 Code Example

```javascript
// Array of product objects
const products = [
  { name: "Keyboard", price: 2500, qty: 2 },
  { name: "Mouse", price: 1500, qty: 3 },
  { name: "Monitor", price: 25000, qty: 1 }
];

// Calculate total value
let totalValue = 0;

products.forEach(product => {
  totalValue += product.price * product.qty;
});

console.log("Product List:");
products.forEach(p => {
  console.log(`${p.name} - Rs.${p.price} x ${p.qty}`);
});

console.log(`\nTotal Inventory Value: Rs.${totalValue}`);
