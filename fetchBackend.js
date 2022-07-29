const fetchAsync = async () => {
    const resposta = await fetch('https://venda-produtos.herokuapp.com/produto')
    const dados = await resposta.json()
    const produtos = dados.devolve
    console.log(produtos)
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
}

fetchAsync()