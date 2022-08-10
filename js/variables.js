const products = [];
class product {
	constructor(nombre, importe) {
		this.nombre = nombre;
		this.importe = importe;
	}
}
function addProducts() {
	let description = prompt("Descripción del nuevo producto:").toUpperCase();
	let importe = parseFloat(prompt("Importe (sin IVA):"));
	products.push(new product(description, importe));
	console.table;
}

function productList() {
	products.push(new product("MESA DE VIDRIO", 25000));
	products.push(new product("MESA DE ROBLE", 20000));
	products.push(new product("ESCRITORIO MEDIANO", 15000));
	products.push(new product("ESCRITORIO GRANDE", 20000));
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
