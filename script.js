let qr;

function generateQR() {
    let qrContainer = document.getElementById("qrcode");
    let qrText = document.getElementById("qrText").value.trim();

    qrContainer.innerHTML = "";

    if (qrText === "") {
        alert("Please enter text or URL");
        return;
    }

    qr = new QRCode(qrContainer, {
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

    if (!img && !canvas) {
        alert("Please generate QR first");
        return;
    }

    let link = document.createElement("a");

    if (img) {
        link.href = img.src;
    } else {
        link.href = canvas.toDataURL("image/png");
    }

    link.download = "qr-code.png";
    link.click();
}
function copyText() {
    let text = document.getElementById("qrText").value;

    if (!text) {
        alert("Nothing to copy!");
        return;
    }

    navigator.clipboard.writeText(text);
    alert("Text copied!");
}

function clearQR() {
    document.getElementById("qrText").value = "";
    document.getElementById("qrcode").innerHTML = "";
}
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
