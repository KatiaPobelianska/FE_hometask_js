console.log("hello JS!");
// === 1
// Создать кнопку и красный квадрат с размерами 200х200px. При клике на кнопку менять у квадрата цвет заднего фона на зеленый и уменьшать его до размеров 100х100px
const btn_1 = document.querySelector(".btn_1");
const div_sq_1 = document.querySelector(".square_1");

btn_1.addEventListener("click", () => {
  div_sq_1.style.backgroundColor = "green";
  div_sq_1.style.width = "100px";
  div_sq_1.style.height = "100px";
});

// === 2
//Создать кнопку и розовый квадрат с размерами 200х200px. При клике на кнопку менять цвет на синий и выводить в консоль обновленный цвет квадрата.
const div_sq_2 = document.querySelector(".square_2");
const btn_2 = document.querySelector(".btn_2");
btn_2.addEventListener("click", () => {
  div_sq_2.style.backgroundColor = "blue";
  console.log(div_sq_2.style.backgroundColor);
});

// === 3
//Создать кнопку и квадрат с размерами 150х150px. При клике на кнопку увеличивать высоту и ширину квадрата на 20px.
const btn_3 = document.querySelector(".btn_3");
const div_sq_3 = document.querySelector(".square_3");
btn_3.addEventListener("click", () => {
  div_sq_3.style.width = "220px";
  div_sq_3.style.height = "220px";
});

// === 4
// Создать кнопку и div с классом root. При клике на кнопку в div создается параграф синего цвета. Текст параграфа произвольный.
const root = document.querySelector(".root");
const btn_4 = document.querySelector(".btn_4");
btn_4.addEventListener("click", () => {
  root.innerHTML = `<p style="color: blue">Lorem101</p>`;
});

// === 5
// Создать кнопку и div с классом root. При клике на кнопку в div создаются по очереди параграфы синего и зеленого цветов. Первый цвет синий.
const root_1 = document.querySelector(".root_1");
const btn_5 = document.querySelector(".btn_5");
let counter = 0;
btn_5.addEventListener("click", () => {
  counter++;
  console.log(counter);
  if (counter === 1) {
    root_1.innerHTML = `<p style="color: blue">Lorem101</p>`;
  } else if (counter === 2) {
    root_1.innerHTML = `<p style="color: green">Lorem101</p>`;
  } else {
    counter = 0;
  }
});
