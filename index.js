function convertToCelsius(fahren) {
  return ((fahren - 32) * 5) / 9;
}

function createMessage(fahren, celc) {
  let message = "";
  if (fahren < 32)  {
    return "Extremely Cold, where is my beanie?";
  } else if (fahren < 64) {
    return  "cold, can someone turn on the heater?";
  } else if (fahren < 86) {
    return  "warm, time for a fan";
  } else if (fahren < 100) {
    return "hot im sweating i need water!";
  } else {
    return "It's scorching!";
  }
}




function rand(limit) {
  return Math.floor(Math.random() * (limit + 1));
}

let fahren = parseFloat(prompt("Enter the temperature in Fahrenheit:"));
let celc = convertToCelsius(fahren);
let roundedCelc = Math.round(celc);
const message = createMessage(fahren, celc);


console.log(`Temperature in Fahrenheit: ${fahren}`);
console.log(`Temperature in Celsius: ${celc}`);
console.log(`Feels: ${message}`);
