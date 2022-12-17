'use strict';

const images = [
    {'id': '1', 'url':'./imgs/nois1.jpeg'}, 
    {'id': '2', 'url':'./imgs/nois2.jpeg'},
    {'id': '3', 'url':'./imgs/nois3.jpeg'},
    {'id': '4', 'url':'./imgs/nois4.jpeg'},
    {'id': '5', 'url':'./imgs/nois5.jpeg'},
    {'id': '8', 'url':'./imgs/nois8.jpeg'},
    {'id': '9', 'url':'./imgs/nois9.jpeg'},
    {'id': '10', 'url':'./imgs/nois10.jpeg'},
]


const containerItems = document.getElementById('container-items');



const loadImages = (images, containerItems) => {
    images.forEach(image => {
        containerItems.innerHTML += `
            <div class="item">
                <img src='${image.url}'>
            </div>
        `
    })
}



loadImages(images, containerItems);

let items = document.querySelectorAll('.item');

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore(lastItem, items[0])
    items = document.querySelectorAll('.item');
}

document.querySelector("#previous").addEventListener("click", previous)
document.querySelector("#next").addEventListener("click", next)