'use strict'

let gElCanvas
let gCtx
let gStartPos
const gTouchEvs = ['touchstart', 'touchmove', 'touchend']

function onInit() {
    gElCanvas = document.querySelector('#meme-canvas')
    gCtx = gElCanvas.getContext('2d')
        // addEventListeners()
    drawText('test', gElCanvas.width - 50, gElCanvas.height - 50)
    renderMeme()
}

// function addEventListeners() {
//     const addBtn = document.querySelector('.btn1')
//     addBtn.addEventListener('onclick', renderMeme)
// }

function renderMeme() {
    const meme = getMemeById(1)
    drawMeme(meme)



}

console.dir(gElCanvas)

function drawMeme(meme) {
    console.log('in draw meme');
    let img = new Image();
    img.src = meme.url;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
        drawText('Meme Line 1', gElCanvas.width / 2, gElCanvas.height / 10)
    };

}


function drawText(txt, x, y) {


    gCtx.font = '48px serif';
    // gCtx.fillText(txt, x, y);
    gCtx.textBaseline = 'middle';
    gCtx.textAlign = 'center';
    gCtx.lineWidth = 2;
    gCtx.fillStyle = 'white';
    gCtx.font = '50px david';
    // gCtx.fillText(txt, x, y);
    gCtx.strokeStyle = 'white';
    gCtx.strokeText(txt, x, y);
}