const welcome = document.querySelector("#welcome");
const botao = document.querySelector("#btn-save");
const inputName = document.querySelector("#input-name");

const nome = localStorage.getItem("novoNome")

welcome.textContent = nome ? `Seja bem vindo, ${nome}!` : ""

botao.addEventListener("click", () => {
    welcome.textContent = `Seja bem vindo, ${inputName.value}!`
    localStorage.setItem("novoNome", inputName.value)

})