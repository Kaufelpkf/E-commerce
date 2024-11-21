
function carregarCarrinho() {
    
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const carrinhoItensDiv = document.getElementById('carrinho-itens');
    const carrinhoTotalSpan = document.getElementById('carrinho-total');

    
    carrinhoItensDiv.innerHTML = '';

    if (carrinho.length === 0) {
        
        carrinhoItensDiv.innerHTML = '<p>O carrinho está vazio.</p>';
        carrinhoTotalSpan.textContent = 'R$ 0,00';
        return;
    }

    let total = 0;

 
    carrinho.forEach((produto, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('carrinho-item');

        itemDiv.innerHTML = `
            <div class="carrinho-item-detalhes">
                <img src="${produto.imagem}" alt="${produto.nome}" class="carrinho-item-imagem" style="width: 80px; height: 80px;">
                <div>
                    <p><strong>${produto.nome}</strong></p>
                    <p>Preço: R$ ${produto.preco.toFixed(2)}</p>
                </div>
            </div>
            <button class="remover-item" onclick="removerDoCarrinho(${index})">Remover</button>
        `;

        carrinhoItensDiv.appendChild(itemDiv);
        total += produto.preco;
    });

    
    carrinhoTotalSpan.textContent = `R$ ${total.toFixed(2)}`;
}


function removerDoCarrinho(index) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.splice(index, 1);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    carregarCarrinho(); 
}


document.addEventListener('DOMContentLoaded', carregarCarrinho);



document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const sideNav = document.getElementById('side-nav');
    const closeBtn = document.getElementById('close-btn');

    menuBtn.addEventListener('click', () => {
        sideNav.classList.add('open'); 
    });

    closeBtn.addEventListener('click', () => {
        sideNav.classList.remove('open'); 
    });

    window.addEventListener('click', (event) => {
        if (event.target === sideNav) {
            sideNav.classList.remove('open');
        }
    });
});