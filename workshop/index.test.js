test("Calculator adds numbers correctly", t => {
  t.equal(calculate(2, "+", 2), 4);
  t.equal(calculate(-5, "+", 3), -2);
  t.equal(calculate(0.4, "+", 0.43), 0.83);
});

test("Calculator subtracts numbers correctly", t => {
  t.equal(calculate(5, "-", 3), 2);
  t.equal(calculate(2.3, "-", 1), 1.3);
});

test("Can multiply numbers", t => {
  t.equal(calculate(4, "*", 3), 12);
  t.equal(calculate(10.5, "*", 27.5), 288.75);
});

test("Can divide numbers", t => {
  t.equal(calculate(4, "/", 2), 2);
  t.equal(calculate(10.5, "/", 2.5), 4.2);
});

test("Can use non-numerical input", t => {
  t.equal(calculate("4", "+", "2"), 6);
});

test("titleCase feature correctly changes the user's input and updates the page", t => {
  const aInput = document.querySelector("input[name='a']");
  aInput.value = "2";
  // We know to set the input for our sign like this in testing because we know that tags with a name field are submitted on the submit event, it can also be noted that from the calculator implementation "event.target.elements.sign.value" is used to find the sign, and therefore we can select #sign and change the value this way too
  const signInput = document.querySelector("select");
  signInput.value = "*";
  const bInput = document.querySelector("input[name='b']");
  bInput.value = "3";
  const submitButton = document.querySelector("button[type='submit']");
  submitButton.click();
  const result = document.querySelector("#result");
  t.equal(result.textContent, "6");
  result.textContent = "";
});
