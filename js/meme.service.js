'use strict'
const IMG_KEY = 'imagesDB'

let gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }
let gImgs = [
    { id: 1, url: 'meme-imgs-square/1.jpg', keywords: ['funny', 'cat'] },
    { id: 2, url: 'meme-imgs-square/2.jpg', keywords: ['funny', 'cat'] },
    { id: 3, url: 'meme-imgs-square/3.jpg', keywords: ['funny', 'cat'] },
    { id: 4, url: 'meme-imgs-square/4.jpg', keywords: ['funny', 'cat'] }
]
let gMeme = {
    selectedImgId: 3,
    selectedLineIdx: 0,
    lines: [{
        txt: 'I sometimes eat Falafel',
        size: 20,
        align: 'center',
        color: 'red'
    }]
}

function setLineTxt(newTxt) {
    const meme = getMeme()
    meme.info.txt = newTxt
}
// function createImages(){
//     gImgs = loadFromStorage(IMG_KEY)
//     if(!gImgs){
//         gImgs = new Array(ImageCount)
//         gImgs.forEach(img=> {

//         })


//     }
// }

function getMeme() {
    return {
        info: gMeme.lines[gMeme.selectedLineIdx],
        img: _getImgById(gMeme.selectedImgId)
    }
}

function _getImgById(imgId) {
    return gImgs.find(img => img.id === imgId)
}