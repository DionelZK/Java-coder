/*------------------------> AGREGAR AL CARRITO <----------------------*/
function creoID() {
	return parseInt(Math.random() * 10000);
}
let cart = JSON.parse(localStorage.getItem("cartProducts") || "[]");
const botonAdd = document.getElementById("boton-add");
botonAdd.addEventListener("click", () => {
	handleAddCart();
});

function handleAddCart() {
	cart.push(
		new product("../images/spider-man.webp", "SPIDER-MAN", 10000, creoID())
	);
	localStorage.setItem("cartProducts", JSON.stringify(cart));
	console.log(cart);
}
