//scripts.js

const readerDiv = document.getElementById('reader');
const startReadingButton = document.getElementById('start-reading');
const stopReadingButton = document.getElementById('stop-reading');
const qrCodeResultDiv = document.getElementById('qr-code-result');

let qrCodeReader;

startReadingButton.addEventListener('click', () => {
    qrCodeReader = new Html5Qrcode(readerDiv);
    qrCodeReader.start({
        facingMode: 'environment',
        fps: 10,
        qrBox: {width:250, height:250}
    }, (decodedText, decodedResult)=> {
        alert('qr code leido');
        alert('Texto:', decodedText);
        alert('Resultado', decodedResult);
        localStorage.setItem('qrCodeResult', decodedText);

    }, (errorMessage) => {
        alert('Error al leer codigo QR');
        alert(errorMessage);
    });
});
 stopReadingButton.addEventListener('click', () => {
    qrCodeReader.stop();
 });
