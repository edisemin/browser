const divs = document.querySelectorAll("div");
const button = document.querySelector("#bitcoin-button");

button.addEventListener("click", (e) => {
    e.target.textContent = "Hi!";
})

divs.forEach((d, i) => {
    d.addEventListener("click", (e) => {
        updateBitcoinButtonText(i);
    })
})
