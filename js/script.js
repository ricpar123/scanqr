// script.js file

function domReady(fn) {
    if (
        document.readyState === "complete" ||
        document.readyState === "interactive"
    ) {
        setTimeout(fn, 1000);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

domReady(function () {
let qr = '';
    // If found you qr code
    function onScanSuccess(decodeText, decodeResult) {
        alert('qrcode', qr = + decodeText, decodeResult);
    }

    let htmlscanner = new Html5QrcodeScanner(
        "my-qr-reader",
        { fps: 10, qrbos: 250 }
    );
    htmlscanner.render(onScanSuccess);

   
});

document.getElementById('my-qr-reader').addEventListener('click', update);
function update(){
    var qrcode = document.getElementById('my-qr-reader').innerText;
    alert('qrcode', qrcode);
}
