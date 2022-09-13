changeColor();

function changeColor() {
  let red = document.querySelector("#slider-red").value;
  let blue = document.querySelector("#slider-blue").value;
  let green = document.querySelector("#slider-green").value;

  let color = rgbToHex(parseInt(red), parseInt(green), parseInt(blue));

  document.body.style.backgroundColor = color;
  document.querySelector("#colorOutput").innerHTML = " " + color;
}

function rgbToHex(red, green, blue) {
  let hexRed = red.toString(16);
  let hexBlue = blue.toString(16);
  let hexGreen = green.toString(16);

  prefixHex(hexRed);
  prefixHex(hexGreen);
  prefixHex(hexBlue);

  return "#" + prefixHex(hexRed) + prefixHex(hexBlue) + prefixHex(hexGreen);
}

function prefixHex(hex) {
  if (hex.length < 2) {
    return "0" + hex;
  } else {
    return hex;
  }
}

document.querySelector("button").addEventListener("click", function () {
  fetch("https://dummy-apis.netlify.app/api/color")
    .then((response) => {
      console.log(response.status);
      console.log(response.ok);

      return response.json();
    })
    .then((data) => {
      console.log(data.color);

      document.body.style.backgroundColor = data.color;
      document.querySelector("#colorOutput").innerHTML = " " + data.color;

      document.querySelector("#slider-red") = color.data;
    });
});

document.querySelector("#slider-red").addEventListener("input", changeColor);
document.querySelector("#slider-green").addEventListener("input", changeColor);
document.querySelector("#slider-blue").addEventListener("input", changeColor);
