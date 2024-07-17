const btnEl = document.getElementById("btn-el");

btnEl.addEventListener("click", function () {
  const inputEl = document.getElementById("input-el");
  const conversions = convert(Number(inputEl.value));
  renderConversion(conversions);
});

function formatNumber(number) {
  if (number.toFixed(3).toString().length > 12) {
    formattedNum = number.toExponential(3);
  } else {
    formattedNum = number.toFixed(3);
  }
  return formattedNum;
}

function convert(number) {
  const meterToFeet = formatNumber(number * 3.28084);
  const litreToGallon = formatNumber(number * 0.264172);
  const kiloToPound = formatNumber(number * 2.20462);
  const feetToMeter = formatNumber(number / 3.28084);
  const gallonToLitre = formatNumber(number / 0.264172);
  const poundToKilo = formatNumber(number / 2.20462);

  const lengthConversion = `${number} meters = ${meterToFeet} feet | ${number} feet = ${feetToMeter} meters`;
  const volumeConversion = `${number} litres = ${litreToGallon} gallons | ${number} gallons = ${gallonToLitre} litres`;
  const massConversion = `${number} kilos = ${kiloToPound} pounds | ${number} pounds = ${poundToKilo} kilos`;

  return [lengthConversion, volumeConversion, massConversion];
}

function renderConversion(arr) {
  const lengthConversionsEl = document.getElementById("length-conversions");
  const volumeConversionsEl = document.getElementById("volume-conversions");
  const massConversionsEl = document.getElementById("mass-conversions");

  lengthConversionsEl.textContent = arr[0];
  volumeConversionsEl.textContent = arr[1];
  massConversionsEl.textContent = arr[2];
}
