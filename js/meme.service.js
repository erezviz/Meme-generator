'use strict'
const IMG_KEY = 'imagesDB'
let gImgs = [{ id: 1, url: 'meme-imgs-square/1.jpg', keywords: ['funny', 'cat'] }]
let gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0
}
const ImageCount = 18

// function createImages(){
//     gImgs = loadFromStorage(IMG_KEY)
//     if(!gImgs){
//         gImgs = new Array(ImageCount)
//         gImgs.forEach(img=> {

//         })


//     }
// }

function getMeme() {
    return gMeme
}