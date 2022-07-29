const produtos = [{
    "produto_id": 1,
    "descricao": "Monitor LED 27'' Gamer Curvo Samsung  1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50",
    "preco_atual": "R$ 2.599,00",
    "preco": "R$ 2.813,99",
    "parcelas": "10x",
    "valor": "R$ 259,90",
    "favoritos": false,
    "url_imagem": "./imagens/monitor.png",
}, {
    "produto_id": 2,
    "descricao": "Teclado Gamer Vinik VX Gaming Dragon V2, ABNT2, Preto e Vermelho - GT100 RED",
    "preco_atual": "R$ 29,00",
    "preco": "R$ 40,61",
    "parcelas": "1x",
    "valor": "R$ 29,00",
    "favoritos": false,
    "url_imagem": "./imagens/teclado.jpg",
}]
produtos.forEach(element => {
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="card1">
            <div class="produto">
                <button class="bola"><img class="coracao" src="./imagens/cora.png"> </button>
                <img class="imagem" src="${element.url_imagem}">
                <p id="descricao" class="descricao">
                   ${element.descricao}
                </p>
                <p id="preco" class="preco">${element.preco}</p>
                <p id="preco_atual" class="preco_atual">${element.preco_atual}</p>
                <p id="parcelas" class="parcelas"><small>em até ${element.parcelas}</small></p> de</small> ${element.valor}<small> sem juros</small></p>
                <button class="botao"><img class="check" src="./imagens/Vector.png">ADICIONAR</button>
            </div>
        </div>
    `
    document.querySelector(".pai").appendChild(div)
});