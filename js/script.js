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
 



const readerDiv = document.getElementById("qr-reader");

const qrCodeResult = document.getElementById("qr-result");

var myqr = [];

domReady(function() {

    var htmlQrcode = new Html5QrcodeScanner(
        "qr-reader", { fps:10, qrbox:200}
    );


    function onScanSuccess (decodedText, decodedResult) {
    //    myqr = decodedText;
    //    window.location.href= "../html/page1.html";
        
        
        alert('qrtext: ' + decodedText);
        qrCodeResult.innerText = decodedText;
        myqr = qrCodeResult.innerText
        localStorage.setItem('qrcode', myqr);
        alert('result:' + qrCodeResult.innerText);
        alert('mi-variable: ' + myqr);
       
    }
        

        

        

        htmlQrcode.render(onScanSuccess);

        
    
    });












