const btn = document.querySelector("#btn");
const demo = document.querySelector("#demo");
const form = document.querySelector("form");
let input = document.getElementById("name");

btn.addEventListener("click", function update(e) {
  e.preventDefault();

  let usertIN = input.value;
  //   console.log(input.value);
  demo.textContent = `your name : - ${usertIN}`;
});

