'use strict'

const ImageCount = 20

let gImgs = createImages()
let gMeme = createMeme()

//*  ############ FUNCTION  CREATE IMGS ##################
function createImages() {
    let imgs = []
    for (let i = 0; i < ImageCount; i++) {
        const img = { id: i + 1, url: `meme-imgs-square/${i+1}.jpg`, }
        imgs.push(img)
    }
    return imgs
}
//*  ############ FUNCTION  CREATE MEME ##################
function createMeme() {
    return {
        selectedImgId: 3,
        selectedLine: { idx1: 0, idx2: 1 },
        lines: _createMemeLines()

    }
}

//*  ############ FUNCTION  CREATE MEME LINES ##################
function _createMemeLines() {
    let lines = []
    for (let i = 0; i < ImageCount * 2; i++) {
        const line = { txt: 'Your meme goes here', size: 20, align: 'center', color: 'red', font: 'Impact' }
        lines.push(line)
    }
    return lines
}

//*  ############ FUNCTION  SET IMG ##################
function setImg(imgId, idx1, idx2) {

    gMeme.selectedImgId = imgId
    gMeme.selectedLine.idx1 = idx1
    gMeme.selectedLine.idx2 = idx2
}

//*  ############ FUNCTION  SET SIZE ##################
function setSize(diff, selector) {
    let memeLines = getMemeLines()
    if (selector === 1) {
        memeLines.line1.size += diff
    } else {

        memeLines.line2.size += diff
    }
}
//*  ############ FUNCTION  SET FONT ##################
function setFont(val, selector) {
    let memeLines = getMemeLines()
    if (selector === 1) {
        memeLines.line1.font = val
    } else {
        memeLines.line2.font = val
    }
}


//*  ############ FUNCTION  SET COLOR ##################
function setColor(color, colorSelect) {
    let memeLines = getMemeLines()
    if (colorSelect === 1) {
        memeLines.line1.color = color
    } else {
        memeLines.line2.color = color
    }
}

//*  ############ FUNCTION  GET LINE TEXT ##################
function getLineText(txt) {
    return txt
}


//*  ############ FUNCTION  SET LINE TXT ##################
function setLineTxt(newTxt, txtSelect) {

    const meme = getMemeForEdit()
    if (txtSelect === 1) {
        meme.info.line1.txt = newTxt
    } else {
        meme.info.line2.txt = newTxt

    }
}


//*  ############ FUNCTION  GET MEME LINES ##################
function getMemeLines() {
    return {
        line1: gMeme.lines[gMeme.selectedLine.idx1],
        line2: gMeme.lines[gMeme.selectedLine.idx2]
    }
}
//*  ############ FUNCTION  GET MEME FOR EDIT ##################
function getMemeForEdit() {
    return {
        info: { line1: gMeme.lines[gMeme.selectedLine.idx1], line2: gMeme.lines[gMeme.selectedLine.idx2] },
        img: _getImgById(gMeme.selectedImgId)
    }
}

//* ########### FUNCTION  _GET IMG BY ID ############
function _getImgById(imgId) {
    return gImgs.find(img => img.id === imgId)
}

//*  ############ FUNCTION  GET IMGS ##################
function getImgs() {
    return gImgs
}

//*  ############ FUNCTION  RESET MEME ##################
function resetMeme() {
    gMeme = createMeme()
}