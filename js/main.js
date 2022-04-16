'use strict'

//*  -$ # $ # $ # $ # $ # $- FUNCTION  ON INIT -$ # $ # $ # $ # $ # $- 
function onInit() {
    renderGallery()
    getCanvas()

    manageResizeCanvas()
    window.addEventListener('resize', manageResizeCanvas)
}


//*  ############ FUNCTION  ON PAGE CHANGE ##################
function onPageChange(txt) {
    if (!document.querySelector('.gallery-container').classList.contains('hide')) return
    const userConfirm = confirm('Exiting the editor will discard your changes, are you sure?')
    if (!userConfirm) return
    switch (txt) {
        case 'Gallery':
            resetTxtInput()
            document.querySelector('.gallery-container').classList.remove('hide')
            removeMemeEditor()
            resetUploadBtn()
            resetMeme()

            break
        case 'Memes':
            document.querySelector('.meme-editor').classList.remove('hide')
            renderMemes()
            break
        case 'About':
            console.log('renderAbout()');
            break
        default:
            console.log('nothing works');
            break

    }
}

//*  ##############  FUNCTION REMOVE EDITOR  ##############
function removeMemeEditor() {
    const elEditor = document.querySelector('.meme-editor')
    elEditor.classList.remove('flex')
    elEditor.classList.add('hide')
}

//*  ############ FUNCTION  RESET TXT INPUT ##################
function resetTxtInput() {
    const txtInput = document.querySelector('[type="text"]')
    if (txtInput.value) txtInput.value = ''
}




//*  ############ FUNCTION  GET CANVAS ##################
function getCanvas() {
    gElCanvas = document.querySelector('#meme-canvas')
    gCtx = gElCanvas.getContext('2d')

}


//*  ############ FUNCTION MANAGE RESIZE CANVAS ##################

function manageResizeCanvas() {

    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)

    if (vw <= 320) {
        resizeCanvas(150, 150)


    } else if (vw > 320 && vw < 450) {
        resizeCanvas(190, 190)
    } else if (vw > 450 && vw < 500) {
        resizeCanvas(220, 220)

    } else if (vw > 500 && vw < 600) {
        resizeCanvas(250, 250)
    } else if (vw > 600 && vw < 700) {
        resizeCanvas(300, 300)
    } else if (vw > 700 && vw < 1000) {
        resizeCanvas(350, 350)
    } else {
        resizeCanvas(400, 400)
    }
}

//*  ############ FUNCTION  RESIZE CANVAS ##################
function resizeCanvas(x, y) {
    gElCanvas.width = x
    gElCanvas.height = y
    const meme = getMemeForEdit()
    drawMeme(meme)
}