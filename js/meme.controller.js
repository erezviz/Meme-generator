'use strict'

let gElCanvas
let gCtx
let gStartPos
let gSelector = 1

// const gTouchEvs = ['touchstart', 'touchmove', 'touchend']

//TODO  ############ FUNCTION RENDER TEXT BOX - STILL NEEDS WORK ##################
function renderTextBox(x, y, width, height) {
    strHtml = `<div class="text-box" style="padding: 100px; width: 50px; height: 50px; 
    position: absolute; border: 2px dashed rgb(126, 124, 124);"></div>`
    document.querySelector('.meme-editor').innerHTML += strHtml
}

//TODO  ############ FUNCTION RENDER MEME ##################
function renderMeme() {
    const currMeme = getMemeForEdit()
    const memeEditor = document.querySelector('.meme-editor')
        //! fix issue with input, see comment on line 74, onTxtChange() 
    memeEditor.classList.remove('hide')

    if (!memeEditor.classList.contains('flex')) memeEditor.classList.add('flex')
        // resizeCanvas()
    drawMeme(currMeme)
}

//TODO  ############ FUNCTION DRAW MEME ##################
function drawMeme(meme) {
    const infos = getMemeLines()
    let img = new Image()
    img.src = meme.img.url
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
        drawText(infos, gElCanvas.width / 2, gElCanvas.height / 10, gElCanvas.width / 2, gElCanvas.height / 1.25)
    }
}

//TODO  ############ FUNCTION DRAW TEXT ##################
function drawText(infos, x1, y1, x2, y2) {
    // SETTINGS FOR LINE1 :
    gCtx.font = `${infos.line1.size}px ${infos.line1.font}`
    gCtx.textBaseline = 'middle'
    gCtx.textAlign = infos.line1.align
    gCtx.lineWidth = 2
    gCtx.fillStyle = 'white'
    gCtx.strokeStyle = infos.line1.color
    gCtx.strokeText(infos.line1.txt, x1, y1)
        // SETTINGS FOR LINE2 :
    gCtx.strokeStyle = infos.line2.color
    gCtx.font = `${infos.line2.size}px ${infos.line2.font}`
    gCtx.textBaseline = 'middle'
    gCtx.textAlign = infos.line2.align
    gCtx.lineWidth = 2
    gCtx.fillStyle = 'white'
    gCtx.strokeText(infos.line2.txt, x2, y2)
}
//*     ############ FUNCTION ON FONT SELECT ##################
function onFontSelect(val) {

    setFont(val, gSelector)
    renderMeme()

}
//TODO  ############ FUNCTION ON FONT CHANGE ##################
function onFontSizeChange(diff) {
    setSize(diff, gSelector)
    renderMeme()
}

//TODO  ############ FUNCTION ON COLOR INPUT ##################
function onColorInput(val) {
    setColor(val, gSelector)
    renderMeme()
}

//TODO  ############ FUNCTION ON TXT CHANGE ##################
function onTxtChange(val) {
    setLineTxt(val, gSelector)
    renderMeme()
}

//TODO  ############ FUNCTION ON SWITCH ##################
function onSwitch(elSwitch) {

    elSwitch.classList.toggle('txt2')
    resetTxtInput()

    if (elSwitch.classList.contains('txt2')) {
        gSelector = 2
    } else {
        gSelector = 1
    }
}


//TODO  ############ FUNCTION ON DOWNLOAD CANVAS ##################
function onDownloadCanvas(elLink) {

    const data = gElCanvas.toDataURL();
    elLink.href = data;
    elLink.download = 'my-meme';
}