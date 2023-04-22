console.log("Hello world!");

// ==== 1
// Написать программу, которая через prompt считывает число и выводит в консоль число равное 10% от введенного числа
// const number = prompt("Enter the number: ");
// const result = number * 0.1;
// console.log(+result.toFixed(2));

// ==== 2
// Написать программу, которая получает два числа и выводит наименьшее
// const number_1 = prompt("Enter the number: ");
// const number_2 = prompt("Enter the number: ");
// --- 2.1
// if (number_1 > number_2) console.log(number_2);
// else console.log(number_1);
// --- 2.2
// const result = number_1 > number_2 ? number_2 : number_1;
// console.log(result);

// ==== 3
//Написать программу, которая считывает через prompt число и выводит одно из следующих сообщений: ‘Число меньше 100’, ‘Число больше 100’ или ‘Число равно 100’
// const number = prompt("Enter the number: ");
// --- 3.1
// const result =
//   number < 100
//     ? "Число меньше 100"
//     : number == 100
//     ? "Число равно 100"
//     : "Число больше 100";
// console.log(result);
// ---3.2
// if (number > 100) console.log("Число больше 100");
// else if (number < 100) console.log("Число меньше 100");
// else console.log("Число равно 100");

// ==== 4
//Написать программу, которая запрашивает у пользователя его имя и возраст (в годах) и выводит в консоль сообщение ‘Hello, <name>’, если пользователь совершеннолетний, или ‘Hi, <name>’, если пользователь несовершеннолетний.
// --- 4.1
const date = new Date().getFullYear();
const userName = prompt("Write your name: ");
const usersBirthDate = +prompt("Write your birthdate: ");
const countUsersAge = date - usersBirthDate;
// const result = countUsersAge >= 18 ? `Hello ${userName}` : `Hi ${userName}`;
// console.log(result);
// --- 4.2
if (countUsersAge >= 18) console.log(`Hello ${userName}`);
else console.log(`Hi ${userName}`);
