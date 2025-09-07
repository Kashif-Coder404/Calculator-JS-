let displayInput = document.getElementById("display");
let prValue = [];
let display = [];
let justCalculated = true;
let addCheck = false;
let addCount = 1;
let op;
let crValue = "";
let buttons = document.getElementById("buttons-container");

buttons.addEventListener("click", (e) => {
  switch (e.target.id) {
    case "1":
      numberPressed(1);
      break;
    case "2":
      numberPressed(2);
      break;
    case "3":
      numberPressed(3);
      break;
    case "4":
      numberPressed(4);
      break;
    case "+":
      add();
      break;
    case "=":
      if (crValue != "") {
        prValue.push(crValue);
        crValue = "";
      }
      if (addCheck) {
        op = "+";
        displayInput.value = calc(op);
        justCalculated = true;
      }
      break;

    default:
      break;
  }
});
let resultOut = [];
function numberPressed(num) {
  if (justCalculated) {
    crValue = `${num}`;
    display = `${num}`;
    prValue = [];
    justCalculated = false;
  } else {
    display += num;
    crValue += num;
  }
  op = "";
  displayInput.value = display;
}
function calc(act) {
  if (act === "+") {
    add();
    let resultAdd = 0;
    for (let i = 0; i < prValue.length; i++) {
      resultAdd = resultAdd + Number(prValue[i]);
    }
    return resultAdd;
  }
}
function add() {
  if (crValue != "") {
    prValue.push(crValue);
  }
  if (op !== "+") {
    display += "+";
    displayInput.value = display;
  }
  addCheck = true;
  op = "+";
  crValue = "";
}
function del() {
  let lastValue = prValue.pop();
  let value = lastValue.slice(0, -1);
  console.log(value);
  prValue.push(value);
}
