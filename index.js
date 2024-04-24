// setInterval(function () {
//   const time = new Date();
//   console.log(time.toLocaleTimeString());
// }, 1000);

const form = document.querySelector("form");
// form.preventDefault();

form.addEventListener("click", function (e) {
  e.preventDefault();
  const height = parseInt(document.getElementById("height").value);
  const weight = parseInt(document.getElementById("weight").value);
  const result = document.getElementById("result");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = "Please Enter Valid Height";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = "Please Enter Valid Weight";
  } else {
    let bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `Here is Your BMI ${bmi}`;
  }
});
