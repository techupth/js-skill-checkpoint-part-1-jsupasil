// Question #2
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
];
// เริ่มเขียนโค้ดตรงนี้
//1) ให้แก้ไขจำนวนสินค้า “Apple” จาก 100 เป็น 200
inventory.filter((item) => item.name === "Apple")[0].quantity = 200;

//2) เพิ่มสินค้าใหม่ที่ชื่อ “Orange” ที่มีราคา 20 บาท และมีจำนวน 300 ชิ้นในสต็อก
inventory.push({});
inventory[inventory.length - 1].name = "Orange";
inventory[inventory.length - 1].price = 20;
inventory[inventory.length - 1].quantity = 300;

//3) ให้คำนวณมูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก
let totalPrice = inventory.reduce(
  (acc, cur) => acc + cur.quantity * cur.price,
  0
);
console.log(`มูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก ${totalPrice} บาท`);
