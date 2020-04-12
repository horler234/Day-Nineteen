function BMI() {
  var weight = document.getElementById("weight").value;
  var height = document.getElementById("height").value;
  var height_metres = height / 100;
  var square_height = Math.pow(height_metres,2);
  var result = (weight / square_height).toFixed(2);
  document.getElementById('output').innerHTML = result;

  if (weight === "" || height === "") {
    alert("Incomplete Information!");
  }

  else if (height === "0" ) {
    alert("Invalid Information!");
    document.getElementById('output').innerHTML = "Error Input!";
  }

  if (result < 18.6) {
    document.getElementById('output').innerHTML += '(Underweight)';
  }

  else if (result >= 18.6 && result < 24.9) {
    document.getElementById('output').innerHTML += '(Normal)';
  }

  else {
    document.getElementById('output').innerHTML += '(Overweight)';
  }
}
