class Mountain {
    constructor(marca, rodado, precio) {
        this.marca = marca;
        this.rodado = rodado;
        this.precio = precio;
        this.imagen = "";
    }
}

const mountains = [
    new Mountain("raptor", 29, 150000),
    new Mountain("crazy", 26, 145000),
    new Mountain("bmz", 29, 200000),
    new Mountain("yellow", 29, 500000),
    new Mountain("grey", 26, 400000),
    new Mountain("blue", 29, 350000)
]

let carrito = [];

let botonAñadir = document.getElementsByClassName("btn-add-cart");
console.log(botonAñadir);
let price = document.getElementsByClassName("price");
let rodado = document.getElementsByClassName("rodado");



let iconoCarrito = document.getElementById("icono");
let carritoCreador = document.createElement("div");
let otraPag = document.getElementById('div-carrito')

  

//iconoCarrito.onclick = function() {
    
   // window.open("index2.html", "_blank");
//};


let raptor = document.getElementById("raptor-bike");

raptor.onclick = () => {
    carrito.forEach(myFunction)
    carrito.push(mountains[0]);
    carrito.forEach(myFunction);

};


function myFunction(item) {
    console.log(item.marca);
};

let crazy = document.getElementById('crazy-bike');

crazy.onclick = () => {
    carrito.push(mountains[1]);
    carrito.forEach(myFunction);
}

    let bmz = document.getElementById('bmz-bike');
    
    bmz.onclick = () => {
        carrito.push(mountains[2]);
        carrito.forEach(myFunction);
    }

    let redm = document.getElementById('redm-bike');

    redm.onclick = () => {
        carrito.push(mountains[3]);
        carrito.forEach(myFunction);
    }

    let orang = document.getElementById('orang-bike');
    orang.onclick = () => {
        carrito.push(mountains[4]);
        carrito.forEach(myFunction);
    }

    let wonf = document.getElementById('wonf-bike');
    wonf.onclick = () => {
        carrito.push(mountains[5]);
        carrito.forEach(myFunction);
    }

iconoCarrito.onclick = () => {
    window.open("index2.html", "_blank");
    let otroHTML = document.createElement('h1');
    otroHTML.innerText = "Carrito";
    otraPag.append(otroHTML);

    
}