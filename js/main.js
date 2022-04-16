'use strict'



//TODO  -$ # $ # $ # $ # $ # $- FUNCTION  ON INIT -$ # $ # $ # $ # $ # $- 
function onInit() {
    renderGallery()
    getCanvas()
        // addListenenrs()
    manageResizeCanvas()
    window.addEventListener('resize', manageResizeCanvas)
        // const meme = getMemeForEdit()
        // drawMeme(meme)

    // addEventListeners()

}


//TODO  ############ FUNCTION  ON PAGE CHANGE ##################
function onPageChange(txt) {
    if (!document.querySelector('.gallery-container').classList.contains('hide')) return
    const userConfirm = confirm('Exiting the editor will discard your changes, are you sure?') // Try and Make a modal later
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



//TODO  ##############  FUNCTION REMOVE EDITOR  ##############
function removeMemeEditor() {
    const elEditor = document.querySelector('.meme-editor')
    elEditor.classList.remove('flex')
    elEditor.classList.add('hide')
}
//! try to fix and use this func to add the event listeners to the HTML
// function addEventListeners() {
//    
//      
// }

//TODO  ############ FUNCTION  RESET TXT INPUT ##################
function resetTxtInput() {
    const txtInput = document.querySelector('[type="text"]')
    if (txtInput.value) txtInput.value = ''
}




//TODO  ############ FUNCTION  GET CANVAS ##################
function getCanvas() {
    gElCanvas = document.querySelector('#meme-canvas')
    gCtx = gElCanvas.getContext('2d')

}


//TODO  ############ FUNCTION  RESIZE CANVAS ##################

// function resizeCanvas() {
//     var elContainer = document.querySelector('.canvas-container');
// Note: changing the canvas dimension this way clears the canvas
//     gElCanvas.width = elContainer.offsetWidth;
// Unless needed, better keep height fixed.
//   gCanvas.height = elContainer.offsetHeight
// }

function manageResizeCanvas() {

    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
        // console.log(vw)

    if (vw <= 320) {
        resizeCanvas(150, 150)
            // const elContainer = document.querySelector('.canvas-container')

    } else if (vw > 320 && vw < 500) {
        resizeCanvas(190, 190)
    } else if (vw > 500 && vw < 600) {
        resizeCanvas(250, 250)
    } else if (vw > 600 && vw < 700) {
        resizeCanvas(300, 300)
    } else if (vw > 700 && vw < 800) {
        resizeCanvas(350, 350)
    } else {
        resizeCanvas(400, 400)
    }
}


function resizeCanvas(x, y) {
    gElCanvas.width = x
    gElCanvas.height = y
    const meme = getMemeForEdit()
    drawMeme(meme)
}