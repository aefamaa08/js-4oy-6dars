function generateQR() {
    let qrText = document.getElementById("text").value;
    let qrColor = document.getElementById("qrColor").value;
    let bgColor = document.getElementById("bgColor").value;
    document.getElementById("qrcode").innerHTML = "";
    new QRCode(document.getElementById("qrcode"), {
        text: qrText,
        width: 150,
        height: 150,
        colorDark: qrColor,
        colorLight: bgColor
    });
}