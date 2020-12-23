var billVal, tipVal, personVal, finalTipVal, finalTotalVal;

function calculate() {  /*Called by "calculate" button, obtains the bill,tip,people value to obtain final tip,bill value*/
  /*Store bill,tip and person values in variables */
  billVal = document.getElementById("billInput").value;
  tipVal = document.getElementById("tipInput").value;
  personVal = document.getElementById("peopleInput").value;
  /*call check to check for invalid input in a try block*/
  try {
    check();
  }
  catch (err) { //catch any exceptions thrown on invalid input
    document.getElementById("errorShow").innerHTML = err;
    resetOutput();
    return;
  }
  /*calculate total bill per person and tip per person*/
  finalTotalVal = billVal / personVal;
  finalTipVal = (billVal * tipVal / 100) / personVal;
  /*Round the above output to 2 decimal places.*/
  finalTotalVal = finalTotalVal.toFixed(2);
  finalTipVal = finalTipVal.toFixed(2);
  /*Write output in html in frontpage*/
  document.getElementById('finalTip').innerHTML = finalTipVal;
  document.getElementById("finalTotal").innerHTML = finalTotalVal;

}

/*Called by reset button in UI, reset all input and output values in UI*/
function resetAll() {
  document.getElementById('billInput').value = null;
  document.getElementById('tipInput').value = null;
  document.getElementById('peopleInput').value = null;
  resetOutput(); /*output is reset through seperate function since it is also used in check()*/
}
/*reset just output*/
function resetOutput() {
  document.getElementById('finalTip').innerHTML = '0.00';
  document.getElementById('finalTotal').innerHTML = '0.00';
}
/*this method checks for all possible invalid inputs*/
function check() {
  document.getElementById("errorShow").innerHTML = "";//reset error output in UI
  console.log(isNaN(billVal));
  if (isNaN(billVal) || isNaN(tipVal) || isNaN(personVal)) {//This checks for not a number(NaN) values for all inputs
    console.log(isNaN(billVal));
    if (isNaN(billVal))
      throw "<br> Bill must be a number <br>";
    if (isNaN(tipVal))
      throw "<br> Tip % must be a number <br>";
    if (isNaN(personVal))
      throw "<br> No. of people must be a number <br>";
  }
  if (billVal == 0 || personVal == 0) {//This if-chain checks if either bill or person input is missing(i.e 0)
    if (billVal == 0)
      throw "<br> Bill input is missing <br>"
    if (personVal == 0)
      throw "<br> Persons input is missing <br>"

  }
  if (billVal < 0 || personVal < 0 || tipVal < 0) {//This checks for negative values for all inputs
    if (billVal < 0)
      throw " <br> Bill cannot be less than $1 <br>";
    if (personVal < 0)
      throw " <br> No. of people cannot be less than 1 <br>";
    if (tipVal < 0)
      throw " <br> Tip % cannot be less than 0% <br>";
  }

  if (isFloat(personVal)) {//This checks if no. of people input is a fraction
    throw "<br> No. of persons must be a whole number <br>";
  }
  if (isLongFloat(billVal) || isLongFloat(tipVal)) {//This checks if bill or tip have more than 2 decimal places
    if (isLongFloat(billVal))
      throw "<br> Bill amount can have only up to 2 decimal places";
    if (isLongFloat(tipVal))
      throw "<br> Tip % can have only up to 2 decimal places";
  }
  if (billVal.split(".")[0].length > 5)
    throw "<br> Bill is too large <br>";
  if (tipVal.split(".")[0].length > 3)
    throw "<br> Tip % is too large <br>";
  if (personVal.split(".")[0].length > 2)
    throw "<br> No. of people is too large <br>";
}

//this function adds 5 to the tip % when + button next to tip is pressed
function tipPlus() {
  document.getElementById("tipInput").value = Number(document.getElementById("tipInput").value) + 5;
}
//this function subtracts 5 from the tip % when - button next to tip is pressed
function tipMinus() {
  if (document.getElementById("tipInput").value < 5)
    return;
  document.getElementById("tipInput").value = Number(document.getElementById("tipInput").value) - 5;
}
//this function adds 1 to no. of ppl % when + button next to ppl is pressed
function peoplePlus() {
  document.getElementById("peopleInput").value = Number(document.getElementById("peopleInput").value) + 1;
}
//this function subtracts 1 from no. of ppl % when - button next to ppl is pressed
function peopleMinus() {
  if (document.getElementById("peopleInput").value < 2)
    return;
  document.getElementById("peopleInput").value = Number(document.getElementById("peopleInput").value) - 1;
}//function that checks if number is float, used in check()
function isFloat(x) {
  if (x % 1 == 0)
    return false;
  else
    return true;
}
//function that checks if number surpasses 2 decimal places, used in check()
function isLongFloat(x) {
  if (isFloat(x)) {
    if (x.split(".")[1].length > 2)
      return true;
    else
      return false;
  }
  else
    return false;
}
