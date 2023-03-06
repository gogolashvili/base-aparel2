let email = document.querySelector("input");
let button = document.querySelector("button");
let answer = document.querySelector("p");
let warning = document.querySelector(".img1");
button.addEventListener("click", function () {
  if (email.value.includes("@")) {
    answer.innerHTML = "";
    warning.style.display = "none";
  } else {
    answer.innerHTML = "Please provide a valid email";
    warning.style.display = "block";
  }
});
