const containerSquares = document.querySelectorAll(".square");
const body = document.querySelector("body");

function changeBackgroundColor(event) {
    body.style.setProperty("--primary-color", `${event.target.id}`)
}
for (const square of containerSquares) {
    square.addEventListener("click", changeBackgroundColor)
}