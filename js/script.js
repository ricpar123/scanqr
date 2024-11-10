// script.js file

 



const readerDiv = document.getElementById("qr-reader");

const qrCodeResult = document.getElementById("qr-result");

var myqr = [];




function onScanSuccess(decodedText, decodedResult) {
    myqr = decodedText;
    window.location.href= "../html/page1.html";

    var htmlQrcode = new Html5QrcodeScanner(
        "qr-reader", { fps:10, qrbox:300}
    );

    htmlQrcode.render(onScanSuccess);

   
   
    htmlQrcode.clear();

    
}


htmlQrcode.render(onScanSuccess);

