'use strict'
const DIFF = 5


function onInit() {
    renderGallery()
    getCanvas()


    // addEventListeners()
    // drawText('test', gElCanvas.width - 50, gElCanvas.height - 50)
}
//?  FIXED THIS! IT WORKS func does not work, find the issue or find another way to implement
function onPageChange(txt) {
    if (!document.querySelector('.gallery-container').classList.contains('hide')) return
    const userConfirm = confirm('Exiting the editor will discard your changes, are you sure?') // Try and Make a modal later
    if (!userConfirm) return
    switch (txt) {
        case 'Gallery':
            resetTxtInput()
            document.querySelector('.gallery-container').classList.remove('hide')
            document.querySelector('.meme-editor').classList.add('hide')
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

//! try to fix and use this func to add the event listeners to the HTML
// function addEventListeners() {
//    
//      
// }

function resetTxtInput() {
    const txtInput = document.querySelector('[type="text"]')
    if (txtInput.value) txtInput.value = ''
}


function SelectedPage() {

}


function getCanvas() {
    gElCanvas = document.querySelector('#meme-canvas')
    gCtx = gElCanvas.getContext('2d')

}