'use strict'

function renderGallery() {
    let strHtmlOpener = '<div class="imgs-container grid">'
    let strHtmlcloser = '</div>'
    const imgs = getImgs()
    let strHtmls = imgs.map((img, idx) => {
        return `
        <img class="img${idx+1}" onclick="onImgSelect(this.dataset, ${img.id})" data-line-idx="${idx}" 
        data-keywords="${img.keywords}" src="${img.url}" alt="">
        
        `
    })
    document.querySelector('.gallery-container').innerHTML = strHtmlOpener + strHtmls.join('') + strHtmlcloser

}

function onImgSelect(dataset, imgId) {
    setImg(imgId, dataset.lineIdx)
    document.querySelector('.gallery-container').classList.add('hide')
    renderMeme()
}