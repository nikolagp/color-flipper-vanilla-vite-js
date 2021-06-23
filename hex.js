import './style.css'

document.querySelector('#app-1').innerHTML = `
<container class="main-container">
<div class="section-1">
  <ul class="nav-ul">
    <li class="li-item" id="app-title">Color Flipper</li>
    <li class="li-item li-item-right"><a href="hex.html">Hex</a></li>
    <li class="li-item li-item-right"><a href="index.html">Simple</a></li>
  </ul>
</div>

<div class="section-2">

  <button id="btn-main">Choose HEX color: <span class="color">#F5F5F5</span></button>
</div>
</container>
`

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btnMain = document.getElementById("btn-main");
const clr = document.querySelector(".color");

btnMain.addEventListener("click", function() {
  let hexColor = "#";
  for (let i=0; i<6; i++) {
    hexColor += hex[getRandomColor()];
  }
  document.body.style.backgroundColor = hexColor;
  clr.textContent = hexColor;
});

function getRandomColor() {
  return Math.floor(Math.random()* hex.length);
};