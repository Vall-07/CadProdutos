var produtos = [];

function adicionarProduto() {
    var produtoInput = document.getElementById('produto');
    var valorInput = document.getElementById('valor');
    var cadInput = document.getElementById('cad');

    var produto = produtoInput.value;
    var valor = valorInput.value;
    var cad = cadInput.value;

    if (produto && valor && cad) {
        var novoProduto = { produto: produto, valor: valor, cad: cad };
        produtos.push(novoProduto);
        exibirProdutos();
        produtoInput.value = '';
        valorInput.value = '';
        cadInput.value = '';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

function exibirProdutos() {
    var listaProdutos = document.getElementById('lista-produtos');
    listaProdutos.innerHTML = '';

    produtos.forEach(function(produto, index) {
        var produtoItem = document.createElement('div');
        produtoItem.classList.add('produto');
        produtoItem.innerHTML = '<h2>' + produto.produto + '</h2>' +
                                '<p><strong>Valor:</strong> R$ ' + produto.valor + '</p>' +
                                '<p><strong>Cadastro:</strong> ' + produto.cad + '</p>';
        listaProdutos.appendChild(produtoItem);
    });
}

function searchProduto() {
    var searchTerm = document.getElementById('search').value.toLowerCase();

    var produtosFiltrados = produtos.filter(function(produto) {
        return produto.produto.toLowerCase().includes(searchTerm);
    });

    var listaProdutos = document.getElementById('lista-produtos');
    listaProdutos.innerHTML = '';

    produtosFiltrados.forEach(function(produto, index) {
        var produtoItem = document.createElement('div');
        produtoItem.classList.add('produto');
        produtoItem.innerHTML = '<h2>' + produto.produto + '</h2>' +
                                '<p><strong>Valor:</strong> R$ ' + produto.valor + '</p>' +
                                '<p><strong>Cadastro:</strong> ' + produto.cad + '</p>';
        listaProdutos.appendChild(produtoItem);
    });
}
