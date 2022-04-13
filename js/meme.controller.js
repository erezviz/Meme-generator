'use strict'

let gElCanvas
let gCtx
let gStartPos
const gTouchEvs = ['touchstart', 'touchmove', 'touchend']

function onInit() {
    // renderMeme()
    // gElCanvas = document.querySelector('#meme-canvas')
    // gCtx = gElCanvas.getContext('2d')
    // addEventListeners()
    // drawText('test', gElCanvas.width - 50, gElCanvas.height - 50)
}

// function addEventListeners() {
//     const addBtn = document.querySelector('.btn1')
//     addBtn.addEventListener('onclick', renderMeme)
// }

function renderMeme() {
    const currMeme = getMeme()

    let strHtml = `<canvas id="meme-canvas" width="500" height="500"></canvas>
    <div class="control-box">
        <label for="txt-line">

            <input oninput="onTxtChange(this.value)" type="text" placeholder="Write meme here">
        </label>
        <button class="move-left"></button>
        <button class="move-up"></button>
        <button class="move-down"></button>
        <button class="move-right"></button>
    </div>`
    const editor = document.querySelector('.meme-editor')
    editor.innerHTML = strHtml


    if (editor.classList.contains('hide')) {

        editor.classList.remove('hide')
        editor.classList.add('flex')

    }

    drawMeme(currMeme)



}



function drawMeme(meme) {

    let img = new Image()
    img.src = meme.img.url
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
        drawText(meme.info, gElCanvas.width / 2, gElCanvas.height / 10)
    }

}

function drawText(info, x, y) {

    gCtx.font = `${info.size}px Impact`
    gCtx.textBaseline = 'middle'
    gCtx.textAlign = info.align
    gCtx.lineWidth = 2
    gCtx.fillStyle = 'white'
    gCtx.font = '50px david'
    gCtx.strokeStyle = info.color
    gCtx.strokeText(info.txt, x, y)
}


function onTxtChange(val) {
    setLineTxt(val)
    renderMeme()
}