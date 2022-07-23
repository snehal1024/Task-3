
let celsius = document.getElementById('celsius');
let fahrenheit = document.getElementById('fahrenheit');
let kelvkelvinin = document.getElementById('kelvin');

celsius.oninput = () => {
    let output1 = (parseFloat(celsius.value) * 9) / 5 + 32;
    fahrenheit.value = parseFloat(output1.toFixed(2));
    let output2 = (parseFloat(celsius.value) + 273.15);
    kelvin.value = parseFloat(output2.toFixed(2));
};

fahrenheit.oninput = () => {
    let output1 = ((parseFloat(fahrenheit.value) - 32) * 5) / 9;
    celsius.value = parseFloat(output1.toFixed(2));
    let output2 = ((parseFloat(fahrenheit.value) - 32) * 5) / 9 + 273.15;
    kelvin.value = parseFloat(output2.toFixed(2));
};

kelvin.oninput = () => {
    let output1 = ((parseFloat(kelvin.value) - 273.15))
    celsius.value = parseFloat(output1.toFixed(2));
    let output2 = ((parseFloat(kelvin.value) - 273.15) * 9) / 5 + 32;
    fahrenheit.value = parseFloat(output2.toFixed(2));
};


function reset() {
    document.getElementsByClassName("temp").reset();

}
