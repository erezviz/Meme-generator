'use strict'




function uploadImg(val) {
    const imgDataUrl = gElCanvas.toDataURL("image/jpeg")

    // A function to be called if request succeeds
    function onSuccess(uploadedImgUrl) {
        const encodedUploadedImgUrl = encodeURIComponent(uploadedImgUrl)
            // console.log(encodedUploadedImgUrl);
        const whatsappText = `Hey%20Ido%2C%20is%20this%20meme%20good%20enough%20for%20%23random%3F`
        let whatsappLink = `https://wa.me/972526814195?text=${encodedUploadedImgUrl}%0A${whatsappText}`
        let facebookLink = `https://www.facebook.com/sharer/sharer.php?u=${encodedUploadedImgUrl}&t=${encodedUploadedImgUrl}`
            // window.open(facebookLink, '_blank')
        window.open(whatsappLink, '_blank')
            // document.querySelector('.share').innerHTML = `
            // <a class="share-link" href="https://www.facebook.com/sharer/sharer.php?u=${encodedUploadedImgUrl}&t=${encodedUploadedImgUrl}" title="Share on Facebook" target="_blank" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}'); return false;">
            //    Share   
            // </a>`
    }
    doUploadImg(imgDataUrl, onSuccess)
}

function doUploadImg(imgDataUrl, onSuccess) {

    const formData = new FormData();
    formData.append('img', imgDataUrl)

    fetch('//ca-upload.com/here/upload.php', {
            method: 'POST',
            body: formData
        })
        .then(res => res.text())
        .then((url) => {

            onSuccess(url)
        })
        .catch((err) => {
            console.error(err)
        })
}

function resetUploadBtn() {
    document.querySelector('.share').innerHTML = 'Upload'
}