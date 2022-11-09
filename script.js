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

  if (r.length == 1) r = "0" + r;
  if (g.length == 1) g = "0" + g;
  if (b.length == 1) b = "0" + b;
  if (a.length == 1) a = "0" + a;

  return "#" + r + g + b + a;
}

sliderInput.forEach((slider, index) => {
  slider.value = numberInput[index].value;
  color.push(+numberInput[index].value);
});

changeValue();
inputChanger(sliderInput, numberInput);
inputChanger(numberInput, sliderInput);
