// script.js file

 



const readerDiv = document.getElementById("qr-reader");

const qrCodeResult = document.getElementById("qr-result");

var myqr = [];


var htmlQrcode = new Html5QrcodeScanner(
    "qr-reader", { fps:10, qrbox:300}
);

function onScanSuccess(decodedText, decodedResult) {
    alert(`Scan result: ${decodedText}`, decodedResult );
    qrCodeResult = readerDiv.innerText;
    myqr = qrCodeResult;
   
    htmlQrcode.clear();

    window.location.href= "../html/page1.html";

}


htmlQrcode.render(onScanSuccess);

