var texte = document.getElementById("texte");

var Formulaire = [];
var DonneeForm = "";
/*var Nom = document.getElementById("Nom");
var Prenom = document.getElementById("Prenom");
var adresse = document.getElementById("adresse");
var heure = document.getElementById("heure");*/
var geneQR = new QRCode(document.getElementById("qrcode"));

function genereQRCode(chaine) {
	var valText = chaine.value;
	geneQR.makeCode(valText);
}


function DonnesForm()
{
	for(var i=0; i<document.forms["QrForm"].length;i++)
	{
		Formulaire[i] = document.forms["QrForm"].elements[i].value;
		DonneeForm += Formulaire[i] + ' ';
	}
	genereQRCode(DonneeForm);
	

}
	



