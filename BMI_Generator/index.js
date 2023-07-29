let form = document.querySelectorAll("form");
form[1].addEventListener("submit", function(e) {
  e.preventDefault();
  let height = parseFloat(document.querySelector("#height").value);
  let weight = parseFloat(document.querySelector("#weight").value);
  let results = document.querySelector("#results");

    let val = -1;
  if (height == "" || height < 0 || isNaN(height) || weight == "" || weight < 0 ||isNaN(weight) ) {
    results.innerHTML = "please select a valid height";
  } 
  else {
    val = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `Your BMI is : <span>${val}</span>`;
  }

  let setRes = (color, message) => {
    results.style.color = color;
    results.innerHTML += message;
    results.style.margin = "10px auto";
    results.style.fontWeight = "bold";
    results.style.fontSize = "2rem";
    results.style.padding = "10px";
    results.style.backgroundColor = "black";
    results.style.width = "max-content";
    results.style.borderRadius = "10px";
  }
  let obj = {
    "Underweight": " (you are underweight)",
    "Normal": " (you are normal)",
    "Overweight": " (you are overweight)",
    "Obese": " (you are obese)"

  }
    if (val === -1) setRes('aqua', "");
    if (val < 18.5 && val >= 0) {
        setRes("yellow", obj['Underweight']);
    } 
    else if (val >= 18.5 && val <= 24.9) {
    setRes("rgb(53, 253, 53)", obj['Normal'], val);
    }
    else if (val >= 25 && val <= 29.9) {
        setRes("orange", obj["Overweight"]);
    }
    else if (val >= 30) {
    setRes("rgb(109, 6, 6)", obj['Obese']);
    }

 
});



form[0].addEventListener("submit", (e) => {
    e.preventDefault();
    let feet = parseFloat(document.querySelector("#feet").value).toFixed(2);
    // calculate feet to centimeter
    let centimeter = feet * 30.48;
    let feetRes =  document.querySelector("#feetRes");
    feetRes.innerHTML = "Your Hight is : " + centimeter;
    feetRes.style.fontSize = "2rem";
    feetRes.style.marginTop = "10px";
});
// console.log(button);