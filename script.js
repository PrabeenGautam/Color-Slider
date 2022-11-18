const sliderInput = document.querySelectorAll("input[type=range]");
const numberInput = document.querySelectorAll("input[type=number]");
const inputParent = document.querySelector(".input");

const rgbValue = document.querySelector("#rgb-value");
const hexValue = document.querySelector("#hex-value");
const body = document.body;

const color = [];

function changeValue() {
  body.style.backgroundColor = `rgba(${color})`;
  rgbValue.textContent = color;
  hexValue.textContent = rgbToHex(...color);
}

const inputChanger = function (inputElement, outElement) {
  inputElement.forEach((value, index) =>
    value.addEventListener("input", function (e) {
      outElement[index].value = e.target.value;
      color[index] = +e.target.value;
      changeValue();
    })
  );
};

function rgbToHex(r, g, b, a) {
  r = r.toString(16);
  g = g.toString(16);
  b = b.toString(16);
  a = Math.round(a * 255).toString(16);

  return (
    "#" +
    r.padStart(2, 0) +
    g.padStart(2, 0) +
    b.padStart(2, 0) +
    a.padStart(2, 0)
  );
}

sliderInput.forEach((slider, index) => {
  slider.value = numberInput[index].value;
  color.push(+numberInput[index].value);
});

changeValue();
inputChanger(sliderInput, numberInput);
inputChanger(numberInput, sliderInput);
