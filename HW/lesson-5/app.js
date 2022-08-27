"use strict";

// Homework (Array)
// 1) n soni berilgan. Dastlabki n ta sondan tashkil topgan massiv hosil qiling va elementlarini chiqaring

// let nums=10;
// let array=[];

// for (let i=0; i<=nums;i++){
//     array[i]=i;
// }

// console.log(array);

// ======================
// 2) n natural son berilgan  2 sonining dastlabki nta darajasidan tashkil topgan massiv hosil qiling

// let nums = 10;
// let array = [];

// for (let i = 0; i <= nums; i++) {
//   array[i] = Math.pow(2, i);
// }

// console.log(array);
// ======================
// 3) a[0] a[1] ….. A[n] massiv yarating va uni qiymatlarni hisoblang qo'shish orqali

// let nums = 10;
// let array = [];
// let sum=0;

// for (let i = 0; i <= nums; i++) {
//   array[i] = i;
//   sum+=array[i];
// }

// console.log(sum);

// ======================
// 4) a[0] = 0, a[1] = 10, … a[10] = 100 massiv yarating indekslarini faqat toqlarini yi'gindisini va indekslari juftlarini ayirmasini hisoblang

// let nums = 100;
// let array = [];
// let even = 0;
// let odd = 0;

// for (let i=0; i<=nums;i++){
//     if(i%10==0){
//      array.push(i)
//     }
// }

//   for (let i = 0; i < array.length; i++) {
//     if (i % 2 == 1) {
//       even += array[i];
//     }
//     if (i % 2 == 0) {
//       odd += array[i];
//     }
//   }

// console.log(array);
// console.log(even);
// console.log(odd);
// console.log(`${odd-even}`*1);

// ======================

// 5) n butun son berilgan n ta indeksdan tashkil topgan massiv yarating. Prompt orqali qiymatlarni kiritng. Yig'indini hisoblang

// let nums = +prompt("n:");
// let array = [];
// let sum=0;

// for (let i = 0; i <= nums; i++) {
//   array[i] = i;
//   sum+=array[i];
// }

// console.log(sum);

// ======================

// 6) n ta indeksdan tashkil topgan massiv berilgan indekslari kamayish tartibida chiqaring

// let nums=+prompt("n:");
// let array=[];

// for(let i=0; i<=nums;i++){
//     array[i]=i;
// }

// console.log(array.reverse());

// ======================

// 7) a['ism'] = 'Kamol', a['yosh'] = 22, yana shunday 3 ta to'plam mavjud ularni yoshlarini farqini aniqlang

// ======================
// 8) n ta indeksdan tashkil topgan massiv mavjud. K va L sonlar orasidagi indekslarini yig'indisini topuvchi dastur tuzing

// juftlarining yeg'indisi
// let array = [3, 49, 56, 13, 18, 190];
// let sum = 0;

// for (let i = 0; i < array.length; i++) {
//   i % 2 == 0 ? sum += array[i] : console.log();
// }

// console.log(sum);

// toqlarining yeg'indisi
// let array = [3, 49, 56, 13, 18, 190];
// let sum = 0;

// for (let i = 0; i < array.length; i++) {
//   i % 2 == 1 ? (sum += array[i]) : console.log();
// }

// console.log(sum);

// ==========================
// 9) n ta indeksdan tashkil topgan massiv orasidan indekslarini juftlari ichidan eng kattasini aniqlovchi dastur tuzing.

// let n=7;

// let sum=0;

// for(let i=0;i<=n;i++){
//     if(i%2==0){
//         sum=i
//     }
// }

// console.log(sum)

// ===========================
// 10) n ta indeksdan tashkil topgan massiv orasidan indekslarini juftlari ichidan eng kichigini aniqlovchi dastur tuzing.

// let n = 7;
// let sum = 0;

// for (let i = 0; i > n; i++) {
//   if (i % 2 == 0) {
//     sum = i;
//   }
// }

// console.log(sum);

// ===========================
// 11) nta indeksdan tashkil topgan massiv ularni toq indekslar orasidan kattasini chiqaruvchi dastur tuzing

// let n=7;

// let sum=0;

// for(let i=0;i<=n;i++){
//     if(i%2==1){
//         sum=i
//     }
// }

// console.log(sum)

// ==========================
// 12) n ta indeksli massiv berilgan uni qiymatlarni o'rta arifmetigini aniqlovchi dastur tuzing

// let array=[3, 49, 56, 13, 18, 190];
// let sum=0;
// let arrayLength=array.length

// for(let i=0;i<array.length;i++){
//     sum+=array[i]/arrayLength;
// }

// console.log(sum);

// =======================
// 13) n ta indeksli massiv faqat toq indeksdagilarni ko'ruvchi dastur tuzing

// let n=+prompt("n:");

// let sum=0;

// for(let i=0;i<=n;i++){
//     if(i%2==1){
//     console.log(i);
//     }
// }

// =====================
// 15) n ta indeksli massiv faqat qiymatlarini toqlarni koruvchi dastur tuzing

// let array=[3, 49, 56, 13, 18, 190];

// for(let i=0;i<=array.length;i++){
//     array[i]%2==1?console.log(array[i]):console.log()
// }

// ======================
// 16) n ta indeksli massiv mavjud ularni qiymatlarini faqat string tipidagisini koruvchi dastur tuzing

// let array = [2, 56, 85, "book", "lime", "22", "true", false];

// for (let i = 0; i <= array.length; i++) {
//   typeof array[i] == typeof " " ? console.log(array[i]) : console.log();
// }
