const products = [];

class product {
	constructor(imagen, description, importe, id) {
		this.imagen = imagen;
		this.description = description;
		this.importe = importe;
		this.id = id;
	}
}
function addProducts() {
	let description = prompt("Descripción del nuevo producto:").toUpperCase();
	let importe = parseFloat(prompt("Importe (sin IVA):"));
	products.push(new product(description, importe));
	console.table;
}

function productList() {
	products.push(new product("SPIDER-MAN", 10000));
	products.push(new product("THOR", 2000));
	products.push(new product("DUENDE VERDE", 2000));
	products.push(new product("MOON KNIGHT", 20000));
}
productList();

function filterProduct() {
	let prod = prompt("ingresa el producto a buscar:").toUpperCase();
	const result = products.filter((elemento) =>
		elemento.nombre.includes(prod)
	);
	console.table(result);
}
function viewProduct() {
	products.forEach((product) => {
		console.table(product);
	});
}
function calculateCarrito() {
	let total = products.reduce(
		(acumulador, products) => acumulador + products.importe,
		0
	);
	console.log("total a pagar:", total);
}
function pruebaDeEventos() {
	const botonPrueba = document.getElementById("boton-prueba");
	botonPrueba.addEventListener("click", () => {
		handleAddCart();
	});
}
