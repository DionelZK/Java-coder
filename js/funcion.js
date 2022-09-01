const productsContainer = document.getElementById("products-container");

const finalPrice = document.getElementById("final-price");

let cart = JSON.parse(localStorage.getItem("cart") || "[]");

stockProducts.forEach((product) => {
	const div = document.createElement("div");
	div.classList.add("card");
	div.innerHTML = `
						<img class="productosimg" src="${product.img}" alt=""/>
					<h2>Pop</h2>
					<p>${product.name}</p>
					<span>${product.price}$</span>
					<button class="btnAddToCart" id="add${product.id}">
						Agregar al carrito
					</button>
	`;
	productsContainer.appendChild(div);

	const button = document.getElementById(`add${product.id}`);
	button.addEventListener("click", () => {
		addToCart(product.id);
	});
});

const addToCart = (prodId) => {
	const item = stockProducts.find((prod) => prod.id === prodId);

	const newItem = {
		id: Date.now(),
		name: item.name,
		quantity: 1,
		price: item.price,
		img: item.img,
	};

	cart.push(newItem);
	localStorage.setItem("cart", JSON.stringify(cart));
	console.log(cart);
	Swal.fire({
		position: "top-end",
		icon: "success",
		title: "Tu producto se ha agregado correctamente",
		showConfirmButton: false,
		timer: 1500,
	});
};
