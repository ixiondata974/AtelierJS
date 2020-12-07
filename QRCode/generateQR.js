var nom = document.getElementById("nom");
var prenom = document.getElementById("prenom");
var age = document.getElementById("age");
var email = document.getElementById("email");
var geneQR = new QRCode(document.getElementById("qrcode"));

function genereQRCode() {
	var valNom = nom.value;
	var valPrenom = prenom.value;
	var valAge = age.value;
	var valEmail = email.value;
	if (valNom != "" && valPrenom != "" && valAge != "" && valEmail != "") {
		var chaine = "nom: "+valNom+", prenom: "+valPrenom+", age: "+valAge+", email: "+valEmail
		geneQR.makeCode(chaine);
	}
}
