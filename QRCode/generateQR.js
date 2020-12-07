var texte = document.getElementById("texte");

var DonneeForm = "";
var nom = document.getElementById("Nom");
var prenom = document.getElementById("Prenom");
var adresse = document.getElementById("adresse");
var heure = document.getElementById("heure");
var geneQR = new QRCode(document.getElementById("qrcode"));

var formAlt = [Nom,Prenom, adresse, heure];

function genereQRCode(chaine) {
	var valText = chaine;
	geneQR.makeCode(valText);
}

function DonnesForm()
{
	var Nom = nom.value;
	var Prenom = prenom.value;
	var Adresse = adresse.value;
	var Heure = heure.value;

	var formAlt = [Nom,Prenom, Adresse, Heure];

	DonneeForm += formAlt[0]+" ";
	for (var i = 1; i < formAlt.length; i++) {
		DonneeForm += formAlt[i]+" ";
	}

	genereQRCode(DonneeForm);
}
	



