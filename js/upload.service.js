'use strict'

const whatsappText = `Hey%20Ido%2C%20is%20this%20meme%20good%20enough%20for%20%23random%3F`
const bakimerCel = '972548152798'
    //* &&&&&&&&&&&&&&&&&   UPLOAD A - WHATSAPP &&&&&&&&&&&&&&&&&
function uploadImgA(elBtn) {
    const imgDataUrl = gElCanvas.toDataURL("image/jpeg")

    function onSuccessA(uploadedImgUrl) {
        const encodedUploadedImgUrl = encodeURIComponent(uploadedImgUrl)

        let whatsappLink = `https://wa.me/${bakimerCel}?text=${encodedUploadedImgUrl}%0A${whatsappText}`
        window.open(whatsappLink, '_blank')
    }
    doUploadImgA(imgDataUrl, onSuccessA)
}

function doUploadImgA(imgDataUrl, onSuccessA) {

    const formData = new FormData();
    formData.append('img', imgDataUrl)

    fetch('//ca-upload.com/here/upload.php', {
            method: 'POST',
            body: formData
        })
        .then(res => res.text())
        .then((url) => {

            onSuccessA(url)
        })
        .catch((err) => {
            console.error(err)
        })
}



//* &&&&&&&&&&&&&&&&&   UPLOAD B - FACEBOOK   &&&&&&&&&&&&&&&&&
function uploadImgB(elBtn) {
    const imgDataUrl = gElCanvas.toDataURL("image/jpeg")


    function onSuccessB(uploadedImgUrl) {
        const encodedUploadedImgUrl = encodeURIComponent(uploadedImgUrl)

        let facebookLink = `https://www.facebook.com/sharer/sharer.php?u=${encodedUploadedImgUrl}&t=${encodedUploadedImgUrl}`
        window.open(facebookLink, '_blank')

    }
    doUploadImgB(imgDataUrl, onSuccessB)

}

function doUploadImgB(imgDataUrl, onSuccessB) {

    const formData = new FormData();
    formData.append('img', imgDataUrl)

    fetch('//ca-upload.com/here/upload.php', {
            method: 'POST',
            body: formData
        })
        .then(res => res.text())
        .then((url) => {

            onSuccessB(url)
        })
        .catch((err) => {
            console.error(err)
        })
}