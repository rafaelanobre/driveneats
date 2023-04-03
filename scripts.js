const pratos = document.querySelectorAll(".prato");
const bebidas = document.querySelectorAll(".bebida");
const sobremesas = document.querySelectorAll(".sobremesa");
let prato = "";
let bebida = "";
let sobremesa = "";
let total = 0;

function escolherPrato(event) {
    pratos.forEach((prato) =>{
        if (prato.classList.contains("selected") && prato !== event.target) {
            prato.classList.remove("selected");
        }
    });

    event.target.classList.toggle("selected");

    prato = event.target.querySelector("h4").textContent;

    calcularTotal();
}


function escolherBebida(event) {
    bebidas.forEach((bebida) =>{
        if (bebida.classList.contains("selected") && bebida !== event.target){
            bebida.classList.remove("selected");
        }
    });

    event.target.classList.toggle("selected");

    bebida = event.target.querySelector("h4").textContent;

    calcularTotal();
}


function escolherSobremesa(event) {
    sobremesas.forEach((sobremesa) =>{
        if (sobremesa.classList.contains("selected") && sobremesa !== event.target){
            sobremesa.classList.remove("selected");
        }
    });

    event.target.classList.toggle("selected");

    sobremesa = event.target.querySelector("h4").textContent;

    calcularTotal();
}


function ativarBotao() {
    const button = document.querySelector("button");

    if (prato !== undefined && bebida !== undefined && sobremesa !== undefined) {
        button.classList.remove("disabled");
        button.textContent = "Fechar pedido";
    }
    
    button.addEventListener("click", enviarPedido);
}


function calcularTotal(){
    const produtosSelecionados = document.querySelectorAll(".produto.selected");

    produtosSelecionados.forEach((produto) => {
        const precoTexto = produto.querySelector("p").textContent;
        const preco = Number(precoTexto.replace("R$ ", "").replace(",", "."));
        total +=preco;
    });
}


function enviarPedido() {
    const mensagem =
        "Olá, eu gostaria de fazer o pedido:\n" +
        `- Prato: ${prato}\n` +
        `- Bebida: ${bebida}\n` +
        `- Sobremesa: ${sobremesa}\n` +
        `Total: R$ ${total.toFixed(2).replace(".", ",")}`;
    
    const link = `https://wa.me/5553981027492?text=${encodeURIComponent(mensagem)}`;

}
