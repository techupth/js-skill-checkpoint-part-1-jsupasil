// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้
//ให้เขียนโปรแกรมในการหาสินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้า
let minQuantityItem = inventory.reduce((min, cur) =>
  cur.quantity < min.quantity ? cur : min
);

console.log(
  `สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${minQuantityItem.name} ซึ่งมี ${minQuantityItem.quantity} ชิ้น`
);
