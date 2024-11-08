// script.js file



const readerDiv = document.getElementById("qr-reader");
const startReading = document.getElementById("start");
const stopReading = document.getElementById("stop");
const qrCodeResult = document.getElementById("qr-result");

let qrCodeReader;

startReading.addEventListener("click", () => {
    qrCodeReader = new Html5Qrcode(readerDiv);
    qrCodeReader.start({
        facingMode:"environment",
        fps:10,
        qrbox:{ width:250, height:250}}, (decodedText, decodedResult)=>{
            console.log("Codigo QR leido");
            console.log("Texto:", decodedText);
            console.log("Resultado:", decodedResult);
            qrCodeResult.innerText = decodedText;
            localStorage.setItem("qrcodeResult", decodedText);
        }, (error) => {
            console.log(error);
        });
    });

    stopReading.addEventListener("click", () => {
        qrCodeReader.stop();
    });
