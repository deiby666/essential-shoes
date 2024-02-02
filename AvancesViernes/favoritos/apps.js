const btnsFavorite = document.querySelectorAll('.favorite');
const products = document.querySelectorAll('.card-product');
const counterFavorites = document.querySelector('.counter-favorite');
const containerProducts = document.querySelector('.container-products');

let urlProductos = 'http://localhost:4000/productos'

document.addEventListener('DOMContentLoaded', ingresarProductos)

async function ingresarProductos(){

	const receive = await fetch(urlProductos)
	const received = await receive.json()
	
	received.forEach((product) => {
		console.log('hola')
		const {imagen, nombre, detalles, precio} = product

		let cartaProductos = document.createElement('div')
		cartaProductos.classList.add('card-product')

		cartaProductos.innerHTML = `
		<div class="container-img">
			<img src='./images/${imagen}' />
	  	</div>
	  	<div class="content-card-product" data-product-id="1">
			<h3>${nombre}</h3>
			<p>${detalles}</p>
			<div class="footer-card-product">
				<span class="price">${precio}</span>

				<div class="container-buttons-card">
					<button class="favorite">
					<i class="fa-regular fa-heart" id="favorite-regular"></i>
					<i class="fa-solid fa-heart" id="added-favorite"></i>
					</button>
					<button class="cart">
					<i class="fa-solid fa-bag-shopping"></i>
					</button>
				</div>
			</div>
	 	 </div>

		`

		containerProducts.appendChild(cartaProductos)

	})
}

const containerListFavorites = document.querySelector(
	'.container-list-favorites'
);
const listFavorites = document.querySelector('.list-favorites');

let favorites = [];

const updateFavoritesInLocalStorage = () => {
	localStorage.setItem('favorites', JSON.stringify(favorites));
};

const loadFavoritesFromLocalStorage = () => {
	const storedFavorites = localStorage.getItem('favorites');

	if (storedFavorites) {
		favorites = JSON.parse(storedFavorites);
		showHTML();
	}
};

const toggleFavorite = product => {
	const index = favorites.findIndex(
		element => element.id === product.id
	);

	if (index > -1) {
		favorites.splice(index, 1);
		updateFavoritesInLocalStorage();
	} else {
		favorites.push(product);
		updateFavoritesInLocalStorage();
	}
};

const updateFavoriteMenu = () => {
	listFavorites.innerHTML = '';

	favorites.forEach(fav => {
		// Crear un nuevo elemento 'div' para el producto favorito
		const favoriteCard = document.createElement('div');
		favoriteCard.classList.add('card-favorite');

		// Crear y añadir el título del producto
		const titleElement = document.createElement('p');
		titleElement.classList.add('title');
		titleElement.textContent = fav.title;
		favoriteCard.appendChild(titleElement);

		// Crear y añadir el precio del producto
		const priceElement = document.createElement('p');
		priceElement.textContent = fav.price;
		favoriteCard.appendChild(priceElement);

		// Añadir el producto favorito a la lista
		listFavorites.appendChild(favoriteCard);
	});
};

const showHTML = () => {
	products.forEach(product => {
		const contentProduct = product.querySelector(
			'.content-card-product'
		);
		const productId = contentProduct.dataset.productId;
		const isFavorite = favorites.some(
			favorite => favorite.id === productId
		);

		const favoriteButton = product.querySelector('.favorite');
		const favoriteActiveButton =
			product.querySelector('#added-favorite');
		const favoriteRegularIcon = product.querySelector(
			'#favorite-regular'
		);
		favoriteButton.classList.toggle('favorite-active', isFavorite);
		favoriteRegularIcon.classList.toggle('active', isFavorite);
		favoriteActiveButton.classList.toggle('active', isFavorite);
	});

	counterFavorites.textContent = favorites.length;
	updateFavoriteMenu();
};

btnsFavorite.forEach(button => {
	button.addEventListener('click', e => {
		const card = e.target.closest('.content-card-product');

		const product = {
			id: card.dataset.productId,
			title: card.querySelector('h3').textContent,
			price: card.querySelector('.price').textContent,
		};

		toggleFavorite(product);

		showHTML();
	});
});

const btnClose = document.querySelector('#btn-close');
const buttonHeaderFavorite = document.querySelector(
	'#button-header-favorite'
);

buttonHeaderFavorite.addEventListener('click', () => {
	containerListFavorites.classList.toggle('show');
});

btnClose.addEventListener('click', () => {
	containerListFavorites.classList.remove('show');
});

loadFavoritesFromLocalStorage();
updateFavoriteMenu();


