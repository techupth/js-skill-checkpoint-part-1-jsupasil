// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "";
// เริ่มเขียนโค้ดตรงนี้
//ให้เขียนฟังก์ชันชื่อ calculateTotalPrice ที่รับ products และ promotionCode เป็น Argument
//โดยที่ฟังก์ชันจะ Return ผลลัพธ์ออกมาเป็น มูลค่ารวมของจำนวนสินค้าทั้งหมดในตะกร้าสินค้า
//โดยที่จะต้องสามารถคำนวนมูลค่าพร้อมโค้ดส่วนลดได้ตามเงื่อนไขต่อไปนี้
const calculateTotalPrice = (products, promotionCode) => {
  const totalPrice = products.reduce(
    (acc, cur) => acc + cur.quantity * cur.price,
    0
  );
  return promotionCode === "SALE20"
    ? totalPrice * (1 - 0.2)
    : promotionCode === "SALE50"
    ? totalPrice * (1 - 0.5)
    : totalPrice;
};

//Test Cases
// console.log(calculateTotalPrice(products, ""));
// console.log(calculateTotalPrice(products, "SALE20"));
// console.log(calculateTotalPrice(products, "SALE50"));
