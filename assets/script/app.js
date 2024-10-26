const text = document.querySelector(".text");
const box = document.querySelector(".box");
const loading = document.querySelector(".loading");
let foiz = 0
let boxWidth = 0;

const run = setInterval(load, 100)
function load() {
    if (foiz == 100 && boxWidth == 400) {
        clearInterval(run);
    } else {
        foiz += 1;
        boxWidth += 4;
        text.textContent = foiz + "%";
        loading.style.width = boxWidth + "px";
    }
}