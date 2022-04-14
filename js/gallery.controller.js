'use strict'

function renderGallery() {
    let strHtmlOpener = '<div class="imgs-container grid">'
    let strHtmlCloser = '</div>'
    const imgs = getImgs()
    let strHtmls = imgs.map((img, idx) => {
        return `
        <img class="img${idx+1}" onclick="onImgSelect(this.dataset, ${img.id})" data-line-idx1="${idx}"data-line-idx2="${idx+1}"
        data-keywords="${img.keywords}" src="${img.url}" alt=""/>`
    })
    document.querySelector('.gallery-container').innerHTML = strHtmlOpener + strHtmls.join('') + strHtmlCloser

}

function onImgSelect(dataset, imgId) {
    setImg(imgId, dataset.lineIdx1, dataset.lineIdx2)
    document.querySelector('.gallery-container').classList.add('hide')
    renderMeme()
}