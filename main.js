import './style.css'

document.querySelector('#app').innerHTML = `
  <container class="main-container">
    <div class="section-1">
      <ul class="nav-ul">
        <li class="li-item" id="app-title">Color Flipper</li>
        <li class="li-item li-item-right"><a href="hex.html">Hex</a></li>
        <li class="li-item li-item-right"><a href="index.html">Simple</a></li>
      </ul>
    </div>

    <div class="section-2">
      <button id="btn-main">
        Change Background Color: <span class="color">
          Whitesmoke</span>
      </button>
    </div>
  </container>
`

const colors = ["Red", "Blue", "Yellow", "Orange", "Green", "Black", "Purple"];
const btnMain = document.getElementById("btn-main");
const sectionTwo = document.querySelector(".section-2")
const clr = document.querySelector(".color")

btnMain.addEventListener("click", function() {
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  clr.textContent = colors[randomNumber]
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
};
