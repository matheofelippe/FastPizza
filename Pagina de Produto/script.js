const cardNames = ['Tomate', 'Manjericão', 'Borda Recheada', 'Azeitona'];
const cardContainer = document.querySelector('.card-container');

function createCounterContainer(name, price) {
    const counterContainer = document.createElement('div');
    counterContainer.classList.add('counter-container');

    const counter = document.createElement('div');
    counter.classList.add('counter');

    const decrementButton = document.createElement('button');
    decrementButton.classList.add('decrement');
    decrementButton.textContent = '-';

    const countSpan = document.createElement('span');
    countSpan.classList.add('count');
    countSpan.textContent = '0';

    const incrementButton = document.createElement('button');
    incrementButton.classList.add('increment');
    incrementButton.textContent = '+';

    const counterTitle = document.createElement('h2');
    counterTitle.classList.add('counter-title');
    counterTitle.textContent = `${name} `;

    const priceSpan = document.createElement('span');
    priceSpan.classList.add('price');
    priceSpan.style.color = 'red';
    priceSpan.textContent = `R$ ${price}`;

    counter.appendChild(decrementButton);
    counter.appendChild(countSpan);
    counter.appendChild(incrementButton);

    counterTitle.appendChild(priceSpan);

    counterContainer.appendChild(counter);
    counterContainer.appendChild(counterTitle);

    // Adicionar os event listeners para os botões de incremento e decremento
    decrementButton.addEventListener('click', () => {
        if (parseInt(countSpan.textContent) > 0) {
            countSpan.textContent = parseInt(countSpan.textContent) - 1;
            updateTotal();
        }
    });

    incrementButton.addEventListener('click', () => {
        if (parseInt(countSpan.textContent) < 5) {
            countSpan.textContent = parseInt(countSpan.textContent) + 1;
            updateTotal();
        }
    });

    return counterContainer;
}

// Limpar o conteúdo existente antes de adicionar os novos elementos
const card1 = document.querySelector('.card1');
card1.innerHTML = '';

const prices = ['2,00', '4,00', '8,00', '4,00'];

let total = 0;

function updateTotal() {
    total = 0;
    const countSpans = document.querySelectorAll('.count');
    const priceSpans = document.querySelectorAll('.price');

    countSpans.forEach((countSpan, index) => {
        const count = parseInt(countSpan.textContent);
        const price = parseFloat(priceSpans[index].textContent.replace('R$ ', '').replace(',', '.'));

        total += count * price;
    });

    const totalElement = document.querySelector('.total');
    totalElement.innerHTML = `<span style="color: black;">Total:</span> <span style="color: red;">R$ ${total.toFixed(2)}</span>`;
}

cardNames.forEach((name, index) => {
    const counterContainer = createCounterContainer(name, prices[index]);
    card1.appendChild(counterContainer);
});

// Adicionar o elemento inicial para exibir o total
const totalElement = document.createElement('div');
totalElement.classList.add('total');
totalElement.innerHTML = `<span style="color: black;">Total:</span> <span style="color: red;">R$ 0.00</span>`;
card1.appendChild(totalElement);

// Adicionar o botão "Adicionar ao Carrinho" abaixo do total
const addToCartButton = document.createElement('button');
addToCartButton.classList.add('add-to-cart-button');
addToCartButton.textContent = 'Adicionar ao Carrinho';

// Adicionando o evento de clique ao botão
addToCartButton.addEventListener('click', () => {
    // Aqui você pode adicionar a lógica para adicionar os itens ao carrinho
    // Por exemplo:
    alert('Produto adicionado ao carrinho!');
});

// Adicionar o botão ao final da seção do carrinho
card1.appendChild(addToCartButton);
