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
 

/*

const readerDiv = document.getElementById("qr-reader");

const qrCodeResult = document.getElementById("qr-result");

var myqr = [];
*/
domReady(function() {

    function onScanSuccess (decodedText, decodedResult) {
    //    myqr = decodedText;
    //    window.location.href= "../html/page1.html";
        myqr = decodedText;
        


        alert('qrtext: ' + decodedText, decodedResult );
    }
        var htmlQrcode = new Html5QrcodeScanner(
            "qr-reader", { fps:10, qrbox:300}
        );

        htmlQrcode.render(onScanSuccess);

        window.location.href= './html/page1.html';
    
    });












