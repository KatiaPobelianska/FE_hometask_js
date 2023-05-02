console.log("hello JS!");
// === 1 Написать цикл, который создает множество параграфов с каждым десятым числом в промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50). Добавить созданные параграфы в div с классом numbers.
const div = document.querySelector(".numbers");

for (let i = 100; i >= 50; i -= 10) {
  div.innerHTML += `<p>${i}</p>`;
}

//=== 2 Написать цикл, который проходится по массиву строк, для каждой строки создает параграф и добавляет его в div с классом strings_container. Строки взять произвольные.
const div_strings = document.querySelector(".strings_container");
const arr_strings = ["Kiwi", "Apple", "Orange", "Banans", "Cherry", "Apple"];

for (let i = 0; i < arr_strings.length; i++) {
  div_strings.innerHTML += `<p>${arr_strings[i]}</p>`;
}

//=== 3 Написать цикл, который проходится по массиву с объектами - у объектов свойства first_name, last_name и  age (данные взять произвольные) - и создает карточки только для совершеннолетних пользователей. Карточка должна содержать информацию об имени, фамилии и возрасте пользователя. Добавить все карточки в div с классом users_container.
const div_users = document.querySelector(".users_container");
const users = [
  { first_name: "Kiwi", last_name: "Green", age: 22 },
  { first_name: "Apple", last_name: "Red", age: 29 },
  { first_name: "Orange", last_name: "Sun", age: 16 },
  { first_name: "Banane", last_name: "Yellow", age: 19 },
];

for (let i = 0; i < users.length; i++) {
  if (users[i].age >= 18) {
    div_users.innerHTML += `<div class="user">
      <h5>${users[i].first_name} ${users[i].last_name}</h5>
      <p>${users[i].age}</p></div>`;
  }
}
