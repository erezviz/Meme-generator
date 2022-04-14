'use strict'

let gElCanvas
let gCtx
let gStartPos
let gSelector = 1

const gTouchEvs = ['touchstart', 'touchmove', 'touchend']

function renderTextBox(x, y, width, height) {
    strHtml = `<div class="text-box" style="padding: 100px; width: 50px; height: 50px; 
    position: absolute; border: 2px dashed rgb(126, 124, 124);"></div>`
    document.querySelector('.meme-editor').innerHTML += strHtml
}



function renderMeme() {
    const currMeme = getMemeForEdit()
    const memeEditor = document.querySelector('.meme-editor')
        //! fix issue with input, see comment on line 74, onTxtChange() 
    memeEditor.classList.remove('hide')


    drawMeme(currMeme)

}



function drawMeme(meme) {

    let img = new Image()
    img.src = meme.img.url
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
        drawText(gElCanvas.width / 2, gElCanvas.height / 10, gElCanvas.width / 2, gElCanvas.height / 1.25)
    }

}

function drawText(x1, y1, x2, y2) {
    const infos = getMemeLines()
    gCtx.font = `${infos.line1.size}px Impact`
    gCtx.textBaseline = 'middle'
    gCtx.textAlign = infos.line1.align
    gCtx.lineWidth = 2
    gCtx.fillStyle = 'white'
        // gCtx.font = '50px david'
    gCtx.strokeStyle = infos.line1.color
    gCtx.strokeText(infos.line1.txt, x1, y1)
    gCtx.strokeText(infos.line2.txt, x2, y2)
}

function onFontChange(diff) {
    setSize(diff, gSelector)

    renderMeme()
}

function onColorInput(val) {
    setColor(val)
    renderMeme()
}



function onTxtChange(val) {

    setLineTxt(val, gSelector)

    renderMeme()

}

function onSwitch(elSwitch) {

    elSwitch.classList.toggle('txt2')
    resetTxtInput()

    if (elSwitch.classList.contains('txt2')) {
        gSelector = 2
    } else {
        gSelector = 1
    }
}