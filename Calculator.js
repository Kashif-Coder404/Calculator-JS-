let prValue;
let crValue = "";

function pressNumber(num) {
  crValue += String(num);
  console.log(crValue);
}
function del() {
  crValue = crValue.slice(0, -1);
  console.log(crValue);
}
function oppAdd() {
  if (prValue.includes()) crValue += "+";
}

// let str = "He@World$Kashif%";

// symbIndex = str.indexOf("@")-1; //symbIndex = 4

// isNumSymb = str.charAt(symbIndex); // isNumSymb = 2
// if (!isNaN(isNumSymb)) {
//   console.log(isNumSymb, "is a number");
// } else {
//   console.log(isNumSymb, "is NOT a number");
// }

// symbol = "@";
// console.log(symbol);
