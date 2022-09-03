function changeColor() {
  let red = document.querySelector("#slider-red").value;
  let green = document.querySelector("#slider-green").value;
  let blue = document.querySelector("#slider-blue").value;
  let color = "rgb(" + red + "," + green + "," + blue + ")";

  document.body.style.backgroundColor = color;
  document.querySelector("#colorOutput").innerHTML = ": " + color;
}

document.querySelector("#slider-red").addEventListener("input", changeColor);
document.querySelector("#slider-green").addEventListener("input", changeColor);
document.querySelector("#slider-blue").addEventListener("input", changeColor);

const color = document.querySelector("colorOutput");

/*function ColorToHex(color) {
  let hexadecimal = color.toSTring(16);
  return hexadecimal.lenght == 1 ? "0" + hexerdecimal : hexadecimal;
}

function ConvertRGBtoHex(red, green, blue) {
  return "#" + ColorToHex(red) + ColorToHex(green) + ColorToHex(blue);
}
console.log(convertRGBtoHex(255, 100, 200));
