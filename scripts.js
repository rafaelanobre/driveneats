const pratos = document.querySelectorAll(".prato");
const bebidas = document.querySelectorAll(".bebida");
const sobremesas = document.querySelectorAll(".sobremesa");
let prato = "";
let bebida = "";
let sobremesa = "";
let total = 0;

function escolherPrato(event) {
   const pratoSelecionado = event.currentTarget.closest('.prato');

   if (!pratoSelecionado) {
     return;
   }

   if (pratoSelecionado.classList.contains('selected')) {
     return;
   }

   pratoSelecionado.classList.add('selected');



   pratos.forEach((prato) => {
     if (prato !== pratoSelecionado && prato.classList.contains('selected')) {
       prato.classList.remove('selected');
     }
   });

   const prato = pratoSelecionado.querySelector('h4');



   ativarBotao();
   calcularTotal();
 }
 
 pratos.forEach(prato => {
   const elementosFilhos = prato.querySelectorAll('*');

   elementosFilhos.forEach(elemento => {
     elemento.addEventListener('click', (event) => {
       escolherPrato(event);
     });
   });
 });




 function escolherBebida(event) {
   const bebidaSelecionada = event.currentTarget.closest('.bebida');

   if (!bebidaSelecionada) {
     return;
   }

   if (bebidaSelecionada.classList.contains('selected')) {
     return;
   }

   bebidaSelecionada.classList.add('selected');

   bebidas.forEach((bebida) => {
     if (bebida !== bebidaSelecionada && bebida.classList.contains('selected')) {
       bebida.classList.remove('selected');
     }
   });

   const bebida = bebidaSelecionada.querySelector('h4');


   ativarBotao();
   calcularTotal();
 }

 bebidas.forEach(bebida => {
   const elementosFilhos = bebida.querySelectorAll('*');

   elementosFilhos.forEach(elemento => {
     elemento.addEventListener('click', (event) => {
       escolherBebida(event);
     });
   });
 });



function escolherSobremesa(event) {
 const sobremesaSelecionada = event.currentTarget.closest('.sobremesa');

 if (!sobremesaSelecionada) {
   return;
 }

 if (sobremesaSelecionada.classList.contains('selected')) {
   return;
 }

 sobremesaSelecionada.classList.add('selected');

  sobremesas.forEach((sobremesa) => {
   if (sobremesa !== sobremesaSelecionada && sobremesa.classList.contains('selected')) {
     sobremesa.classList.remove('selected');
   }
  });

  const sobremesa = sobremesaSelecionada.querySelector('h4');


  ativarBotao();
  calcularTotal();
 }

 sobremesas.forEach(sobremesa => {
  const elementosFilhos = sobremesa.querySelectorAll('*');

  elementosFilhos.forEach(elemento => {
    elemento.addEventListener('click', (event) => {
      escolherSobremesa(event);
  });
 });
});


function ativarBotao() {
    const button = document.querySelector("button");

    if (prato !== "" && bebida !== "" && sobremesa !== "") {
        button.classList.remove("disabled");
        button.textContent = "Fechar pedido";
    }

    button.addEventListener("click", enviarPedido);
    console.log("Botão ativado!");
}



function calcularTotal(){
    const produtosSelecionados = document.querySelectorAll(".produto.selected");

    produtosSelecionados.forEach((produto) => {
        const precoTexto = produto.querySelector("p").textContent;
        const preco = Number(precoTexto.replace("R$ ", "").replace(",", "."));
        window.total += preco;
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
