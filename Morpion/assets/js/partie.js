class partie{
	constructor(tableau){
		this.tableau = tableau;
		this.iconCercle = false;
		this.enCoursDeJeu = false;
	}

	start(){
		if (this.enCoursDeJeu) return;
	}

	conditionDeVictoir(){
		if (this.tableau) {
			return true;
		}
	}

	conditionDarret(){
		
	}

	stop(){
		if (!this.conditionDarret()) {
			this.tableau = false;
		}
	}
}