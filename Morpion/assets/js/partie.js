class Partie{
	constructor(tableau){
		this.tableau = tableau;
		this.iconCercle = false;
		this.enCoursDeJeu = false;
	}

	conditionDeVictoir(){
		if (this.tableau[1].src == this.tableau[2].src == this.tableau[3].src) {
			return true;
		}
	}

	conditionDarret(){
		
	}

	changementIcon(){
		if (this.iconCercle){
			return "assets/img/croix.jpg";
		}
		return "assets/img/cercle.jpg";
	}

	EnCoursDePartie(){
		return "assets/img/vide.jpg";
	}

	setIcon(){
		this.iconCercle = !this.iconCercle;
	}
}
