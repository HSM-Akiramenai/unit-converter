/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

function convert(number) {
    const meterToFeet = Number((number * 3.28084).toFixed(3))
    const litreToGallon = Number((number * 0.264172).toFixed(3))
    const kiloToPound = Number((number * 2.20462).toFixed(3))
    const feetToMeter = Number((number / 3.28084).toFixed(3))
    const gallonToLitre = Number((number / 0.264172).toFixed(3))
    const poundToKilo = Number((number / 2.20462).toFixed(3))
    
    const lengthConversion = `${number} meters = ${meterToFeet} feet | ${number} feet = ${feetToMeter} meters`
    const volumeConversion = `${number} litres = ${litreToGallon} gallons | ${number} gallons = ${gallonToLitre} litres`
    const massConversion = `${number} kilos = ${kiloToPound} pounds | ${number} pounds = ${poundToKilo} kilos`
    
    return [lengthConversion, volumeConversion, massConversion]
}

function renderConversion(arr){
    const lengthConversionsEl = document.getElementById("length-conversions")
    const volumeConversionsEl = document.getElementById("volume-conversions")
    const massConversionsEl = document.getElementById("mass-conversions")
    
    lengthConversionsEl.textContent = arr[0]
    volumeConversionsEl.textContent = arr[1]
    massConversionsEl.textContent = arr[2]
}

const btnEl = document.getElementById("btn-el")
const inputEl = document.getElementById("input-el")

btnEl.addEventListener("click", function(){
    const conversions = convert(Number(inputEl.value))
    renderConversion(conversions)
})