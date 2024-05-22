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
function calculateTotalPrice(products, promotionCode) {
  let totalPrice = 0;
  for (let index = 0; index < products.length; index += 1) {
    totalPrice += products[index].quantity * products[index].price;
  }
  if (promotionCode === "SALE20") {
    return (1 - 0.2) * totalPrice;
  } else if (promotionCode === "SALE50") {
    return (1 - 0.5) * totalPrice;
  } else {
    return totalPrice;
  }
}

//TEST CASES
console.log(calculateTotalPrice(products, ""));
console.log(calculateTotalPrice(products, "SALE20"));
console.log(calculateTotalPrice(products, "SALE50"));
