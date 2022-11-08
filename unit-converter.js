const selector1 = document.getElementById('selector-1');
const inputLeft = document.getElementById('input-left');
const inputRight = document.getElementById('input-right');
const labelLeft = document.getElementById('label-left');
const labelRight = document.getElementById('label-right');
const formula = document.getElementById('formula');
// call functions on menu chance (choice) and when user hits enter in input box
selector1.addEventListener('change', changeUnit);
inputLeft.addEventListener('change', updateUnit);
inputRight.addEventListener('change', updateUnit);
// the menu choice ("temperature", "distance", "length", "weight", "time")
let unitChoice = "temperature"; 

// runs on hitting enter from inside either input box
function updateUnit() {

  let inputID = this.id; // the id of the box being typed into
  let inputValue = Number(this.value); // the value the user typed into the box
  let conversion = 0; // the converted answer to be outputted

  // determine which unit to convert, and then which box is being typed into
  if(unitChoice == "temperature") { // convert temperature
    if(inputID == "input-left") { // input is Farh
      conversion = (inputValue - 32) * 5/9;
      inputRight.value = conversion.toFixed(3); // output is Cels
    } else { // input is Cels
      conversion = inputValue * 9/5 + 32;
      inputLeft.value = conversion.toFixed(3); // output is Fahr
    }

  } else if(unitChoice == "distance") {
      if(inputID == "input-left") { // input is Miles
        conversion = inputValue * 5280;
        inputRight.value = conversion.toFixed(3); // output is Feet
      } else { // input is Feet
        conversion = inputValue / 5280;
        inputLeft.value = conversion.toFixed(3); // output is Miles
      }

  } else if(unitChoice == "length") {
    if(inputID == "input-left") { // input is Inches
      conversion = inputValue * 2.54;
      inputRight.value = conversion.toFixed(3); // output is CM
    } else { // input is CM
      conversion = inputValue / 2.54;
      inputLeft.value = conversion.toFixed(3); // output is Inches
    }

  } else if(unitChoice == "weight") {
    if(inputID == "input-left") { // input is KG
      conversion = inputValue * 2.205;
      inputRight.value = conversion.toFixed(3); // output is LB
    } else { // input is LB
      conversion = inputValue / 2.205;
      inputLeft.value = conversion.toFixed(3); // output is KG
    }

  } else if(unitChoice == "time") {
    if(inputID == "input-left") { // input is Hour
      conversion = inputValue * 3600;
      inputRight.value = conversion.toFixed(3); // output is Sec
    } else { // input is Sec
      conversion = inputValue / 3600;
      inputLeft.value = conversion.toFixed(3); // output is Hr
    }
  }

} // end func updateUnit()

// evalUnitChoice runs when main selector1 menu is chosen from
function changeUnit() {

  unitChoice = this.value;

  if(unitChoice == 'temperature') {
    inputLeft.value = 100; // degrees Fahrenheit
    inputRight.value = 212; // degrees Celsius
    labelLeft.textContent = "Fahrenheit";
    labelRight.textContent = "Celsius";
    formula.textContent = "(32°F - 32) * 5/9 = 0°C";

  } else if(unitChoice == 'distance') {
    inputLeft.value = 1; // Mile
    inputRight.value = 5280; // Feet
    labelLeft.textContent = "Miles";
    labelRight.textContent = "Feet";
    formula.textContent = "1 Mile = 5,280 Feet";
    
  } else if(unitChoice == 'length') {
    inputLeft.value = 1; // Inch
    inputRight.value = 2.54; // Centimeters
    labelLeft.textContent = "Inches";
    labelRight.textContent = "Centimeters";
    formula.textContent = "1 Inch = 2.54 Centimeters";

  } else if(unitChoice == 'weight') {
    inputLeft.value = 1; // Kilogram
    inputRight.value = 2.205; // Pounds
    labelLeft.textContent = "Kilograms";
    labelRight.textContent = "Pounds";
    formula.textContent = "1 Kilogram = 2.205 Pounds";

  } else if(unitChoice == 'time') {
    inputLeft.value = 1; // Hour
    inputRight.value = 3600; // Seconds
    labelLeft.textContent = "Hours";
    labelRight.textContent = "Seconds";
    formula.textContent = "1 Hour = 3,600 Seconds";

  }

}
