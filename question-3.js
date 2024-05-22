// Question #3
let userPassword = "";
// เริ่มเขียนโค้ดตรงนี้
//ให้เขียนฟังก์ชัน checkPasswordStrength ซึ่งรับ userPassword เป็น Argument
//และ Return ผลลัพธ์ออกมาเป็น String ตามเงื่อนไขต่อไปนี้

function checkPasswordStrength(userPassword) {
  if (userPassword.length >= 10) {
    return "Strong";
  } else if (userPassword.length >= 6) {
    return "Medium";
  } else {
    return "Weak";
  }
}

//Test Cases
console.log(checkPasswordStrength("swnalWadqQ")); // "Strong"
console.log(checkPasswordStrength("TechUp")); // "Medium"
console.log(checkPasswordStrength("abcde")); // "Weak"
