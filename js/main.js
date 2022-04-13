'use strict'



function onInit() {
    renderGallery()


    // addEventListeners()
    // drawText('test', gElCanvas.width - 50, gElCanvas.height - 50)
}
//! func does not work, find the issue or find another way to implement
function onRender(txt) {
    console.log(txt);
    switch (txt) {
        case 'Gallery':
            console.log('hi gallery');
            document.querySelector('.meme-container').classList.add('hide')
            renderGallery()

            break
        case 'Memes':
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
//     const addBtn = document.querySelector('.btn1')
//     addBtn.addEventListener('onclick', renderMeme)
// }