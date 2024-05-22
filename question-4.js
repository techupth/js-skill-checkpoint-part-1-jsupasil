// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้
//ให้เขียนโปรแกรมในการหาสินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้า
const findMinimumItem = function (inventory) {
  let minItem = inventory[0];
  for (let item of inventory) {
    if (minItem.quantity > item.quantity) {
      minItem = item;
    }
  }
  return minItem;
};

let minItem = findMinimumItem(inventory);
console.log(
  `สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${minItem.name} ซึ่งมี ${minItem.quantity} ชิ้น`
);
