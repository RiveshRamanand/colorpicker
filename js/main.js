console.log("main.js loaded");

// Variables
const bgColor = {
    r: 12,
    g: 50,
    b: 100,

    toCSS: function () {
        let result = `rgb(${this.r},${this.g}, ${this.b})`;

        return result;
    },

    toHex: function () {
        let result = "";
        // bewerk hier het resultaat naar een hexadecimaal getal. 

        return result;
    }
}

const redSlider = document.querySelector("input.red");
const greenSlider = document.querySelector("input.green");
const blueSlider = document.querySelector("input.blue");

const redValue = document.querySelector("span.r-value");
const greenValue = document.querySelector("span.g-value");
const blueValue = document.querySelector("span.b-value");

//Event listeners
redSlider.addEventListener("change", (event) => {
    bgColor.r = event.target.value;
    console.log("changing red: " + bgColor.r)

    changeCircleColor();
    
    redValue.textContent = bgColor.r;
});

greenSlider.addEventListener("change", (event) => {
    bgColor.g = event.target.value;
    console.log("changing green: " + bgColor.g)

    changeCircleColor();

    greenValue.textContent = bgColor.g;
});

blueSlider.addEventListener("change", (event) => {
    bgColor.b = event.target.value;
    console.log("changing blue: " + bgColor.b)

    changeCircleColor();

    blueValue.textContent = bgColor.b;
});


//Functions
function changeCircleColor() {
    const circleDiv = document.querySelector("div.circle");
    circleDiv.style.backgroundColor = bgColor.toCSS();

}

