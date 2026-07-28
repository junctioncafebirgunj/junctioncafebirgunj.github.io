const menu = [
  { name: "Chicken Momo", price: "Rs. 180" },
  { name: "Veg Momo", price: "Rs. 150" },
  { name: "Chicken Chowmein", price: "Rs. 220" },
  { name: "Veg Chowmein", price: "Rs. 180" },
  { name: "Chicken Burger", price: "Rs. 250" },
  { name: "French Fries", price: "Rs. 180" },
  { name: "Cold Coffee", price: "Rs. 220" },
  { name: "Lemon Soda", price: "Rs. 120" }
];

const menuSection = document.createElement("section");
menuSection.innerHTML = `
<h2 style="text-align:center;color:#d4af37;">Our Menu</h2>
<div id="menu-list" style="max-width:600px;margin:auto;"></div>
`;

document.body.insertBefore(menuSection, document.querySelector("footer"));

const list = document.getElementById("menu-list");

menu.forEach(item => {
  list.innerHTML += `
    <div style="display:flex;justify-content:space-between;background:#222;padding:12px;margin:10px;border-radius:8px;">
      <span>${item.name}</span>
      <strong>${item.price}</strong>
    </div>
  `;
});

