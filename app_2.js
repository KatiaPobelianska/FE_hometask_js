console.log("hello js!");

//Напишите функцию, которая принимает два числовых аргумента и выводит в консоль все четные числа от большего к меньшему.
function showArrWithEvenNumbers(a, b) {
  const arr = [];
  for (let i = a; i <= b; i++) {
    if (i % 2 == 0) {
      arr.push(i);
    }
  }
  return arr.sort((a, b) => b - a);
}
console.log(showArrWithEvenNumbers(5, 10));
console.log(showArrWithEvenNumbers(12, 20));

//Напишите функцию power, которая принимает два числовых аргумента (основание степени и саму степень) и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2.
const power = (a, b = 2) => {
  return a ** b;
};
console.log(power(3));
console.log(power(3, 3));

//Напишите функцию, которая принимает числовой аргумент n и считает сумму чисел от 1 до n.
function sortI(a) {
  const arr = [];
  for (let i = 1; i <= a; i++) {
    arr.push(i);
  }
  return calcSum(arr);
}
console.log(sortI(4));

function calcSum(arr) {
  return arr.reduce((a, b) => a + b, 0);
}

// Напишите функцию, которая принимает два числовых аргумента n и m и считает сумму четных чисел и нечетных чисел от n до m. Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных).
function newArr(n, m) {
  const arr = [];
  for (let i = n; i <= m; i++) {
    arr.push(i);
  }
  return twoArrs(arr);
}
console.log(newArr(1, 10));

function twoArrs(arr) {
  return arr.reduce(
    (acc, val) => {
      acc[val % 2].push(val);
      return acc;
    },
    [[], []]
  );
}

// Напишите функцию, которая принимает в качестве аргументов массив строк, а возвращает первый самый длинный элемент массива. Если входной массив пуст, функция возвращает null. Если есть несколько одинаковых по длине элементов - функция возвращает первый из этих элементов. (string.length > string.length) - сравнение длины строк
// Пример: [ 'one', 'two', 'three' ] => 'three'
function showTheLongestString(arr) {
  const longestString = arr.reduce((a, b) => {
    return a.length > b.length ? a : b;
  });

  return longestString;
}

const arrExample = ["one", "two", "threethree", "five", "seven", "twenty"];

console.log(showTheLongestString(arrExample));
