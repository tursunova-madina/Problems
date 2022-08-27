"use strict";

// homework (switch)
// 1) 1-7 gacha butun son berilgan kiritilgan songa mos ravishda hafta kunini so'zlarda ifodolovchi dastur tuzing

// const day = +prompt("Son kiriting:");

// switch (day) {
//   case 1:
//     console.log("Dushanba");
//     break;
//   case 2:
//     console.log("Seshanba ");
//     break;
//   case 3:
//     console.log("Chorshanba ");
//     break;
//   case 4:
//     console.log("Payshanba ");
//     break;
//   case 5:
//     console.log("Juma ");
//     break;
//   case 6:
//     console.log("Shanba ");
//     break;
//   case 7:
//     console.log("Yakshanba ");
//     break;
//   default:
//     console.log("bunaqa kun yoq");
// }

// ==================================
// 2) K butun son berilgan Baho natijalarini chiqaruvchi dastur tuzing. 1-yomon, 2-qoniqarsiz, 3-qoniqarli, 4-yaxshi, 5 - alo

// const mark = +prompt("5 gacha son kiriting:");

// switch (mark) {
//   case 5:
//     alert("A'lo");
//     break;
//   case 4:
//     alert("Yaxshi");
//     break;
//   case 3:
//     alert("Qoniqarli");
//     break;
//   case 2:
//     alert("Qoniqarsiz");
//     break;
//   case 1:
//     alert("Yomon");
//     break;
//   default:
//     alert("Qayta o'qib kel");
// }
// ====================================
// 3) Oy raqami berilgan Kiritilgan oy qaysi faslga tegishli ekanin chiqaruvchi dastur tuzing. M - s 2 - qish

// let month = +prompt("12gacha son kiriting");

// switch (month) {
//   case 1:
//     alert("Yanvar- Qish");
//     break;
//   case 2:
//     alert("Fevral- Qish");
//     break;
//   case 3:
//     alert("Mart- Bahor");
//     break;
//   case 4:
//     alert("Aprel- Bahor");
//     break;
//   case 5:
//     alert("May- Bahor");
//     break;
//   case 6:
//     alert("Iyun- Yoz");
//     break;
//   case 7:
//     alert("Iyul- Yoz");
//     break;
//   case 8:
//     alert("Avgust- Yoz");
//     break;
//   case 9:
//     alert("Sentabr- Kuz");
//     break;
//   case 10:
//     alert("Oktabr- Kuz");
//     break;
//   case 11:
//     alert("Noyabr- Kuz");
//     break;
//   case 12:
//     alert("Dekabr- Qish");
//     break;
//   default:
//     alert("Bir yilda 12ta oy bor .");
// }

// ========================================
// 4) Oy raqami berilgan shu oyda nechta kun borligin aniqlovchi dastur tuzing

//  let month = +prompt("12gacha son kiriting");

// switch (month) {
//   case 1:
//     alert("Yanvar- Qish. 31 kun");
//     break;
//   case 2:
//     alert("Fevral- Qish. 28 kun");
//     break;
//   case 3:
//     alert("Mart- Bahor. 31 kun");
//     break;
//   case 4:
//     alert("Aprel- Bahor. 30 kun");
//     break;
//   case 5:
//     alert("May- Bahor. 31 kun");
//     break;
//   case 6:
//     alert("Iyun- Yoz. 30 kun");
//     break;
//   case 7:
//     alert("Iyul- Yoz. 31 kun");
//     break;
//   case 8:
//     alert("Avgust- Yoz. 31 kun");
//     break;
//   case 9:
//     alert("Sentabr- Kuz. 30 kun");
//     break;
//   case 10:
//     alert("Oktabr- Kuz. 31 kun");
//     break;
//   case 11:
//     alert("Noyabr- Kuz. 30 kun");
//     break;
//   case 12:
//     alert("Dekabr- Qish. 31 kun");
//     break;
//   default:
//     alert("Bir yilda 12ta oy bor .");
// }
// =====================================
// 6) Bahoga qarab stependiyani aniqlovchi dastur tuzing

// let mark = +prompt("Baho kiriting:");

// switch (mark) {
//   case 5:
//     alert("771 000 so'm stipendiya olasiz.");
//     break;
//   case 4:
//     alert("642 000 so'm stipendiya olasiz.");
//     break;
//   case 3:
//     alert("428 000 so'm stipendoya olasiz.");
//     break;
//   default:
//     alert("Stipendiya yoq sizga.");
// }

// =========================
// 5) a, b sonlar berilgan c amal ham berilgan a va b sonlar ustida amal bajaruvchi dastur tuzing

// let a = +prompt("a son kiriting:");
// let b = +prompt("b son kiriting:");
// let c = prompt("c amali");
// switch (c) {
//   case "-":
//     console.log(a - b);
//     break;
//   case "+":
//     console.log(a - b);
//     break;
//   case "*":
//     console.log(a - b);
//     break;
//   case "/":
//     console.log(a / b);
//     break;
//   default:
//     console.log("Qayta kiriting ");
// }

// homework(for)
// 1) k va n butun son berilgan. K ni n marta chiqaruvchi dastur tuzing

// let k=20;
// let n=30;

// for(let i=0; i<=n ; i++){
//     console.log(k);
// }

// ============================

// 2) a, b sonlar beilgan. A b dan katta a va b orasidagi butun sonlarni chiqaruvchi dastur tuzing. A va B ni ozi ham chiqsin

// let a = 15;
// let b = 9;

// for( let i=b; i<=a ; i++){
//     console.log(i);
// }

// ================
// 3) a,b sonlar berilgan a b dan katta a va b orasidagi barcha butun sonlarni kamayish tartibida chiqaring a va b kirmasin

// let a = 9;
// let b = 2;

// for (let i = a - 1; i > b; i--) {
//   console.log(i);
// }

// =========================
// 4) 1kg konfet 10000so'm berilgan. 1 kgdan 10 kggacha barchasin narxini chiqaruvchi dastur tuzing

// for(let i=1; i<=10 ; i++){
//     console.log(i + " kg " + i*10000+ " so'm ");
// }
// ================
// 5) 1kg konfet 10000so'm. 0,1 kg dan 1 kg gacha bo'lgan konfet narxin toping

// for(let i=1; i<=10 ; i++){
//     console.log(i/10 + " kg " + i*10000/10+ " so'm ");
// }
// =======================
// 6) 1kg konfet 10000so'm. 1,2kg, 1,4, 1,6, 1,8, 2kg konfetlarni narxini toping

// for (let i = 10; i <= 20; i+=2) {
//     console.log(i/10+ " kg " + i * 10000*10 + " so'm ");
//   }
// ============================
// 7) a,b sonlar berilgan. A dan b gacha barcha butun sonlarni yig'indisin topuvchi dastur yozing

// let a=+prompt(" A son yozing:");
// let b=+prompt(" B son yozing:");
// let c=0;
// for(let i=a; i<=b; i++){
//  c=c+i

// }
//  console.log(c);
// ======================
// 8) a,b sonlar berilgan. A dan b gacha barcha butun sonlarni ko'paytmasin topuvchi dastur yozing

// let a=+prompt(" A son yozing:");
// let b=+prompt(" B son yozing:");
// let c=1;
// for(let i=a; i<=b; i++){
//  c=c*i

// }
//  console.log(c);
// =========================
// 9) a,b sonlar berilgan a dan b gacha bo'lgan sonlarni kvadratlarini yig'indisin topuvchi dastur toping

// let a=+prompt(" A son yozing:");
// let b=+prompt(" B son yozing:");
// let c=1;
// let d=0;
// for(let i=a; i<=b; i++){
//  c=i*i
//  d+=c
//     // console.log(c);
// }
// console.log(d);

// =====================
// 10) n soni berilgan quydagi yig'indini hisoblang. S = 1/1 + 1/2 + …. + 1/n

// let n=+prompt("Son kiriting:");
// let s=0;

// for(let i=1 ; i<=n ; i++){
//     s+=  1/i;

// } console.log(s);

// =====================
// 11) n soni berilgan shu soni ichidan toqlarin ko'ruvchi dastur yozing

// let num=+prompt("Biror bir son kiriting:");

// for(let i=1; i<=num; i+=2){
//     console.log(i+"  toq son " );
// }
// ====================

// 12) n soni berilgan shu sonlarni ichidan juftlarini koruvchi dastur yozing

// let num=+prompt("Biror bir son kiriting:");

// for(let i=2; i<=num; i+=2){
//     console.log(i+"  juft son " );
// }

// ==================
// 13) n soni berilgan shu son ichidan faqat murakkab sonlarni aniqlovchi dastur yozing

// let num = 100;

// for (let i = 1; i <= num; i++) {
//   let dividedBySelf = i % i == 0;
//   let dividedByOne = i % 1 == 0;

//   if (i == 1 || i == 3 || i == 7) {
//   } else if (dividedBySelf && dividedByOne && i % 2 == 0) {
//     console.log(i);
//   } else if (dividedBySelf && dividedByOne && i % 2 == 0) {
//     console.log(i);
//   } else if (dividedBySelf && dividedByOne && i % 3 == 0) {
//     console.log(i);
//   } else if (dividedBySelf && dividedByOne && i % 5 == 0) {
//     console.log(i);
//   } else if (dividedBySelf && dividedByOne && i % 7 == 0) {
//     console.log(i);
//   } else if (dividedBySelf && dividedByOne) {
//   }
// }

// ==================
//14) n soni berilgan shu sonlarni ichidan jufat va toq sonlarni kvadratlarini chiqaring

// let num = +prompt("Biror bir son kiriting:");
// let sqr = 1;

// for (let i = 2; i <= num; i += 2) {
//   sqr = i * i;
//   console.log(sqr + " juft son kvadrati");
// }

// for (let i = 1; i <= num; i += 2) {
//   sqr = i * i;
//   console.log(sqr+ "  toq son kvadrati ");
// }
// ===============
// 15) n son berilgan n sonidan kamayish tartibida sonlar chiqarilsin

// let num = +prompt("son kiriting:");
// let num1 = +prompt("son kiriting:");
// for (let i = num; i >= num1; i--) {
//   console.log(i);
// }
// ===================
// 16) n son berilgan 0 va ngacha sonlar orasida 5 ga karralisini tashlab o'tib ketuvchi dastur tuzing

// let n = 15;
// for (let i = 0; i <= n; i++) {
//   i % 5 == 0 ? console.log() : console.log(i)
// }
// =====================

// 17) n butun son berilgan ngacha butun sonlarni ko'paytmasini topuvchi dastur tuzing

// let num=20;
// let sqr=1;
// for(let i=1;i<=num;i++ ){
//     sqr*=i;
// }
// console.log(sqr);
// =====================
// 18) n butun son berilgan 1 sikldan foydalanib quydagi yigindini hisoblovchi dastur tuzing. 1!+2!+..+n!

// let n=10;
// let sum=0;
// let factorial=1;

// for(let i=1;i<=n;i++){
//     factorial*=i;
//     sum+=factorial;
// }
// console.log(sum);