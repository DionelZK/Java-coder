const emptyBtn = document.getElementById("empty-cart");

const cartContainer = document.getElementById("cart-container");

const finalPrice = document.getElementById("final-price");

let cart = JSON.parse(localStorage.getItem("cart") || "[]");

const refreshCart = () => {
	cart = JSON.parse(localStorage.getItem("cart") || "[]");
	cartContainer.innerHTML = "";
	cart.forEach((prod) => {
		cartContainer.innerHTML += `
		<tr>
		<td><img src="${prod.img}" alt="${prod.name}" class="imgCarrito"/></td>
		<td>${prod.name}</td>
		<td>${prod.price}</td>
		<td><a onclick="cartDelete(${prod.id})" class="delete-button"><i class="fa-solid fa-trash-can trashCan"></i></a></td>
		<td><span id="quantity">1</span></td></tr>
		`;
	});
	finalPrice.innerText = cart.reduce((acc, prod) => acc + prod.price, 0);
};

const cartDelete = (prodId) => {
	const newCart = cart.filter((prod) => prod.id !== prodId);
	console.log(newCart);
	localStorage.setItem("cart", JSON.stringify(newCart));
	refreshCart();
};

refreshCart();

emptyBtn.addEventListener("click", () => {
	localStorage.setItem("cart", JSON.stringify([]));
	refreshCart();
});
