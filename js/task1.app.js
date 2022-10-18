const inputNum = document.getElementById("inputNum");
const btn = document.getElementById("btn");

function onClick(e) {
  let x = Number(inputNum.value);
  if (x % 2 === 0) {
    alert("Given number is Even");
  } else {
    alert("Given number is Odd");
  }
}

btn.addEventListener("click", onClick);
