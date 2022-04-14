'use strict'
const IMG_KEY = 'imagesDB'
const MEME_KEY = 'memeDB'
let gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }
let gImgs = [
    { id: 1, url: 'meme-imgs-square/1.jpg', keywords: ['funny', 'cat'] },
    { id: 2, url: 'meme-imgs-square/2.jpg', keywords: ['funny', 'cat'] },
    { id: 3, url: 'meme-imgs-square/3.jpg', keywords: ['funny', 'cat'] },
    { id: 4, url: 'meme-imgs-square/4.jpg', keywords: ['funny', 'cat'] }
]
let gMeme = createMeme()

//TODO  ############ FUNCTION  CREATE MEME ##################
function createMeme() {
    return {
        selectedImgId: 3,
        selectedLine: { idx1: 0, idx2: 1 },
        // selectedLine2Idx: 1,
        lines: [
            { txt: 'Meme goes here1', size: 20, align: 'center', color: 'red' },
            { txt: 'Meme goes here2', size: 20, align: 'center', color: 'red' },
            { txt: 'Meme goes here3', size: 20, align: 'center', color: 'red' },
            { txt: 'Meme goes here4', size: 20, align: 'center', color: 'red' },
            { txt: 'Meme goes here5', size: 20, align: 'center', color: 'red' },
            { txt: 'Meme goes here6', size: 20, align: 'center', color: 'red' },
            { txt: 'Meme goes here7', size: 20, align: 'center', color: 'red' },
            { txt: 'Meme goes here8', size: 20, align: 'center', color: 'red' },
        ]

    }
}

//TODO  ############ FUNCTION  SET IMG ##################
function setImg(imgId, idx1, idx2) {

    gMeme.selectedImgId = imgId
    gMeme.selectedLine.idx1 = idx1
    gMeme.selectedLine.idx2 = idx2
}

//TODO  ############ FUNCTION  SET SIZE ##################
function setSize(diff, selector) {
    let memeLines = getMemeLines()
    if (selector === 1) {
        memeLines.line1.size += diff
    } else {

        memeLines.line2.size += diff
    }
}


//TODO  ############ FUNCTION  SET COLOR ##################
function setColor(color, colorSelect) {
    let memeLines = getMemeLines()
    if (colorSelect === 1) {
        memeLines.line1.color = color
    } else {
        memeLines.line2.color = color
    }
}

//TODO  ############ FUNCTION  GET LINE TEXT ##################
function getLineText(txt) {
    return txt
}


//TODO  ############ FUNCTION  SET LINE TXT ##################
function setLineTxt(newTxt, txtSelect) {

    const meme = getMemeForEdit()
    if (txtSelect === 1) {
        meme.info.line1.txt = newTxt
    } else {
        meme.info.line2.txt = newTxt

    }
}

// function createImages(){
//     gImgs = loadFromStorage(IMG_KEY)
//     if(!gImgs){
//         gImgs = new Array(ImageCount)
//         gImgs.forEach(img=> {

//         })


//     }
// }

//TODO  ############ FUNCTION  GET MEME LINES ##################
function getMemeLines() {
    return {
        line1: gMeme.lines[gMeme.selectedLine.idx1],
        line2: gMeme.lines[gMeme.selectedLine.idx2]
    }
}
//TODO  ############ FUNCTION  GET MEME FOR EDIT ##################
function getMemeForEdit() {
    return {
        info: { line1: gMeme.lines[gMeme.selectedLine.idx1], line2: gMeme.lines[gMeme.selectedLine.idx2] },
        img: _getImgById(gMeme.selectedImgId)
    }
}

//TODO _#_#_#_#_# FUNCTION  _GET IMG BY ID #_#_#_#_#_#_
function _getImgById(imgId) {
    return gImgs.find(img => img.id === imgId)
}

//TODO  ############ FUNCTION  GET IMGS ##################
function getImgs() {
    return gImgs
}

//TODO  ############ FUNCTION  RESET MEME ##################
function resetMeme() {
    gMeme = createMeme()
}