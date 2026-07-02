function generateQR() {

    let qrContainer = document.getElementById("qrcode");
    let qrText = document.getElementById("qrText").value.trim();

    qrContainer.innerHTML = "";

    if (qrText === "") {
        alert("Please enter text or URL.");
        return;
    }

    new QRCode(qrContainer, {
        text: qrText,
        width: 250,
        height: 250,
        colorDark: "#111827",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
}

function downloadQR() {

    let img = document.querySelector("#qrcode img");
    let canvas = document.querySelector("#qrcode canvas");

    let source = img || canvas;

    if (!source) {
        alert("Please generate a QR Code first.");
        return;
    }

    let link = document.createElement("a");
    link.download = "qr-code.png";
    link.href = source.src || canvas.toDataURL("image/png");
    link.click();
}
