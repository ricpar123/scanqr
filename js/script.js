// script.js file

 



const readerDiv = document.getElementById("qr-reader");

const qrCodeResult = document.getElementById("qr-result");


var htmlQrcode = new Html5QrcodeScanner(
    "qr-reader", { fps:10, qrbox:300}
);

function onScanSuccess(decodedText, decodedResult) {
    alert(`Scan result: ${decodedText}`, decodedResult );
    qrCodeResult = readerDiv.innerText;

    htmlQrcode.clear();

}


htmlQrcode.render(onScanSuccess);