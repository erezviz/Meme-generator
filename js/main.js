'use strict'



//TODO  -$ # $ # $ # $ # $ # $- FUNCTION  ON INIT -$ # $ # $ # $ # $ # $- 
function onInit() {
    renderGallery()
    getCanvas()
        // addListenenrs()



    // addEventListeners()

}

//TODO  ############ FUNCTION  ON PAGE CHANGE ##################
//?  FIXED THIS! IT WORKS func does not work, find the issue or find another way to implement
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

function resizeCanvas() {
    var elContainer = document.querySelector('.canvas-container');
    // Note: changing the canvas dimension this way clears the canvas
    gElCanvas.width = elContainer.offsetWidth;
    // Unless needed, better keep height fixed.
    //   gCanvas.height = elContainer.offsetHeight
}