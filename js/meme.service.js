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
            txt: 'F*** THAT',
            size: 20,
            align: 'center',
            color: 'red'
        },
        {
            txt: 'Friends forever',
            size: 10,
            align: 'center',
            color: 'blue'
        },
        {
            txt: 'It\'s Shnatz time',
            size: 20,
            align: 'center',
            color: 'red'
        },
        {
            txt: 'When coding in sprint',
            size: 15,
            align: 'center',
            color: 'red'
        },
    ]
}

function setImg(imgId, idx) {
    gMeme.selectedImgId = imgId
    gMeme.selectedLineIdx = idx
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

function getMemeLines() {
    return gMeme.lines[gMeme.selectedLineIdx]
}

function getMeme() {
    return {
        info: gMeme.lines[gMeme.selectedLineIdx],
        img: _getImgById(gMeme.selectedImgId)
    }
}

function _getImgById(imgId) {
    return gImgs.find(img => img.id === imgId)
}

function getImgs() {
    return gImgs
}