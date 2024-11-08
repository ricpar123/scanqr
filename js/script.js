// script.js file

 



const readerDiv = document.getElementById("qr-reader");

const qrCodeResult = document.getElementById("qr-result");


var htmlQrcode = new Html5QrcodeScanner(
    "qr-reader", { fps:10, qrbox:300}
);

function onScanSuccess(decodedText, decodedResult) {
    console.log(`Scan result: ${decodedText}`, decodedResult );

    htmlQrcode.clear();

}


htmlQrcode.render(onScanSuccess);