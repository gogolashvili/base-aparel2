let email = document.querySelector("input");
let button = document.querySelector("button");
let answer = document.querySelector("p");

let pasuxi = button.addEventListener("click", function () {
  if (email.value.includes("@")) {
    answer.innerHTML = "";
  } else answer.innerHTML = "Please provide a valid email";
});
