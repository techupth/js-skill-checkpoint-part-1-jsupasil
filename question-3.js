// Question #3
let userPassword = "";
// เริ่มเขียนโค้ดตรงนี้

//ให้เขียนฟังก์ชัน checkPasswordStrength ซึ่งรับ userPassword เป็น Argument
//และ Return ผลลัพธ์ออกมาเป็น String ตามเงื่อนไขต่อไปนี้

const checkPasswordStrength = (userPassword) =>
  userPassword.length < 6
    ? "Weak"
    : userPassword.length <= 10
    ? "Medium"
    : "Strong";

//Test Cases
// let userPasswordStrong = "ssswnalWadqQ";
// console.log(checkPasswordStrength(userPasswordStrong)); // "Strong"

// let userPasswordMedium = "TechUp";
// console.log(checkPasswordStrength(userPasswordMedium)); // "Medium"

// let userPasswordWeak = "abcde";
// console.log(checkPasswordStrength(userPasswordWeak)); // "Weak"
