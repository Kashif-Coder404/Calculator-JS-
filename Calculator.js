let display = document.querySelector("#display");
let buttons = document.querySelector("#buttons");
let justCalculated = false;
let operatorCheck = false;
let crValue = "";
let delNew = "";
let calc = () => {
  try {
    let result = eval(crValue);
    if (result % 1 != 0) {
      fixed = result.toFixed(2);
      display.value = fixed;
    } else {
      display.value = result;
      justCalculated = true;
    }
  } catch (err) {
    display.value = "Error";
    crValue = "";
  }
};
let del = () => {
  
  crValue = crValue.slice(0, -1);
  console.log(`Deleted value: ${crValue}`);
  display.value = crValue;
}
buttons.addEventListener("click", (e) => {
  if (e.target.tagName == "BUTTON") {
    e.preventDefault();
    let value = e.target.innerHTML;
    if (value === "=") {
      calc();
    } else if (
      value === "+" ||
      value === "-" ||
      value === "*" ||
      value === "/"
    ) {
      if (operatorCheck) {
        crValue = crValue.slice(0, -1);
      } else {
        operatorCheck = true;
      }
      crValue += value;
      display.value = crValue;
    } else if (value === 'del') {
      del();
    } else {
      if (justCalculated) {
        crValue = "";
        justCalculated = false;
      }
      operatorCheck = false;
      crValue += value;
      display.value = crValue;
    }
  }
});
