//se crean variables que agarran todo el DOM que conforma desde el id seleccionado
const formProduct = document.getElementById("form-product");
const listProducts = document.getElementById("list-products")

//Se instancian variables como objetos para los metodos map y set
const products = new Map();
const idRepet = new Set();

/**
 * con este escuchador se almacenan cada dato ingresado en la instancia ya creada como products
 */
formProduct.addEventListener('submit', function(e){
    e.preventDefault();
    //Entrada de datos
    const id = parseInt(document.getElementById("id").value);
    const nameProduct = document.getElementById("name-product").value.trim();
    const priceProduct = parseInt(document.getElementById("price-product").value);

    if (idRepet.has(id)) { // verifica que el ID este disponible
        alert("Wrong: this ID is exist!");
        return;
    }
    //Agrega los datos a Products
    const product = {id, nameProduct, priceProduct};
    products.set(id, product);
    idRepet.add(id);

    showProducts(); //invoca la tabla
});

//Mostrar la tabla
function showProducts(){
    listProducts.innerHTML = '';

    if (products.size === 0) { //Verifica que no haya productos y no muestra tabla
        return;
    }

    const table = document.createElement("table"); //crea la tabla en el DOM
    //Les da estilo con css
    table.style.borderCollapse = "collapse"; 
    table.style.marginTop = "15px";

    //crea la fila donde irán los campos
    table.innerHTML = `
        <tr>
            <th style = "border : 1px solid black; padding: 5px;">ID:</th>
            <th style = "border : 1px solid black; padding: 5px;">Name:</th>
            <th style = "border : 1px solid black; padding: 5px;">Price:</th>
        </tr>
    
    `;

    //crea la fila donde irán los registros
    products.forEach(product => { //se recorre con un forEach
        const raw = document.createElement("tr");
        raw.innerHTML = `
            <tr>
                <td style = "border : 1px solid black; padding: 5px;"> ${product.id}</td>
                <td style = "border : 1px solid black; padding: 5px;"> ${product.nameProduct}</td>
                <td style = "border : 1px solid black; padding: 5px;"> ${product.priceProduct}</td>
            </tr>
        `;
        table.appendChild(raw);
    });

    listProducts.appendChild(table); // finalmente se agrega estos nodos en el DOM
}


    
    