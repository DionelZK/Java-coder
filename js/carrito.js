const btnDelete = document.getElementById("btn-delete");
let cartProducts = JSON.parse(localStorage.getItem("cartProducts") || "[]");
const tableBody = document.querySelector("#table-body");
console.log(localStorage.getItem("cartProducts"));
function createEmptyCart() {
	tableBody.innerHTML += `
		<tr>
		<th class="empty-cart">Tu carrito esta vacio</th>
		</tr>`;
}
if (cartProducts.length === 0) {
	createEmptyCart();
} else {
	loadProduct();
}
//           CARGAR PRODUCTO
function loadProduct() {
	tableBody.innerHTML = "";
	cartProducts = JSON.parse(localStorage.getItem("cartProducts"));
	cartProducts.forEach((producto) => {
		tableBody.innerHTML += `<tr>
		<th><img class="imgCarrito" src=${producto.imagen} alt=""/></th>		
		<th>${producto.description}</th>
		<th>${producto.importe}</th>		
        </tr>`;
	});
}
//       BORRAR PRODUCTO
function handleDelete() {
	let deletedCart = [];
	localStorage.setItem("cartProducts", JSON.stringify(deletedCart));
	loadProduct();
	createEmptyCart();
}

btnDelete.addEventListener("click", () => {
	handleDelete();
});
