'use strict'

let gElCanvas
let gCtx
let gStartPos
const gTouchEvs = ['touchstart', 'touchmove', 'touchend']





function renderMeme() {
    const currMeme = getMeme()

    let strHtml = `
    <div class="meme-editor">
    <canvas id="meme-canvas" width="500" height="500"></canvas>
    <div class="control-box">
        <label for="txt-line">
        //! fix issue with input, see comment on line 74, onTxtChange() 
            <input oninput="onTxtChange(this.value)" type="text" placeholder="Write meme here">
        </label>
        <button class="move-left"></button>
        <button class="move-up"></button>
        <button class="move-down"></button>
        <button class="move-right"></button>
    </div>
    </div>

    `
    const memeContainer = document.querySelector('.meme-container')
    memeContainer.innerHTML = strHtml


    if (memeContainer.classList.contains('hide')) {

        memeContainer.classList.remove('hide')
        memeContainer.classList.add('flex')

    }
    gElCanvas = document.querySelector('#meme-canvas')
    gCtx = gElCanvas.getContext('2d')
    drawMeme(currMeme)



}



function drawMeme(meme) {

    let img = new Image()
    img.src = meme.img.url
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
        drawText(gElCanvas.width / 2, gElCanvas.height / 10)
    }

}

function drawText(x, y) {
    const infos = getMemeLines()
    gCtx.font = `${infos.size}px Impact`
    gCtx.textBaseline = 'middle'
    gCtx.textAlign = infos.align
    gCtx.lineWidth = 2
    gCtx.fillStyle = 'white'
    gCtx.font = '50px david'
    gCtx.strokeStyle = infos.color
    gCtx.strokeText(infos.txt, x, y)
}

//! fix issue with the input! worked with the renderMeme() on onInit(), now doesn't work
//! issue most likely with gElCanvas and gCtx that are called from within renderMeme().
//! need to figure out how to use these variables from outside the func (or possibly, check them with boolean)
function onTxtChange(val) {

    setLineTxt(val)

    renderMeme()

}