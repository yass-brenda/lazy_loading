/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/


// 1. HTML
//
// 2. imagenes html -> JS
// 3. Eventos  - DOM

const minimun = 1;
const maximun = 122;

const random = () => Math.floor(Math.random() * (maximun - minimun)) + minimun

const createImageNode = () => {
    const  container = document.createElement('div')
    container.className = "p-4"

    const imagen = document.createElement('img')
    imagen. className = "mx-auto";
    imagen.width = '320';
    imagen.src = `https://randomfox.ca/images/${random()}.jpg`; // TODO

    container.appendChild(imagen)

    return container;
}

const nuevaImagen = createImageNode()
const mountNode = document.getElementById("images");
const addButton = document.querySelector("button");


const addImage = () => {
    const newImage = createImageNode();
    mountNode.append(newImage)
}
addButton.addEventListener("click",addImage)
