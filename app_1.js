console.log("Hello world!");

// === 1 ===
// Напишите цикл for, который выводит консоль каждое второе число от 0 до 10
for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}

// === 2 ===
//Напишите цикл for, который выводит в консоль  все числа от 55 до 20
for (let i = 55; i >= 20; i--) {
  console.log(i);
}

// let a = 55;
// while (a >= 20) {
//   console.log(a);
//   a--;
// }

// === 3 ===
//Дан массив numbers. Вывести в консоль все числа из массива
// Сформировать новый массив numbers_squared и передать в него все элементы из массива numbers, возведенные в квадрат

const numbers = [3, 5, 11, 2, 8, 1, 6];
const numbers_squared = [];
for (let i = 0; i < numbers.length; i++) {
  const newNumberSquare = Math.pow(numbers[i], 2);
  numbers_squared.push(newNumberSquare);
}
console.log(numbers_squared);

// === 4 ===
// Создать переменную last_elem и передать в нее последний элемент из сформированного массива numbers_squared (обратиться к элементу массива по индексу)
const last_elem = numbers_squared[numbers_squared.length - 1];
console.log(last_elem);

// === 5 ===
// Дан объект user. Используя данные из объекта, сформировать строку в формате: ‘User’s name is <FIRST_NAME> <LAST_NAME>. He is <AGE> years old’

const user = {
  first_name: "Ivan",
  last_name: "Ivanov",
  age: 20,
  salary: 500,
};
console.log(
  `Users name is ${user.first_name} ${user.last_name}. He is ${user.age} years old`
);
