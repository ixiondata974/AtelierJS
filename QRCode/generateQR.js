var texte = document.getElementById("texte");
var geneQR = new QRCode(document.getElementById("qrcode"));

function genereQRCode() {
	var valText = texte.value;
	geneQR.makeCode(valText);
}
