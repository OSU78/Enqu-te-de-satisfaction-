/**
 * README : 
 * Toute les fonctions personnaliser seront crée tout en bas du scripts
 * Dans la rubrique : " DEBUT FONCTIONS PERSO "
 * 
 * LES FONCTIONS COOKIES :
 * createCookie : sert à crée un nouveau cookie,
 * deleteCookie : sert à supprimer un cookie (prend en paramètre le nom du cookie),
 * lireCookie : sert à renvoyer la valeur contenue dans le cookie dans un tableau,
 * 
 * LES FONCTIONS LIER AU FORMULAIRE D'IDENTIFICATION :
 * verifRadio()
 * verifNom(),
 * verifPrenom(),
 * verifEmail(),
 * verifAge(),
 * 
 * AUTRE FONCTIONS :
 * createErreur()
 * CloseErreur()
 * ------------
 */

document.forms["identification"].addEventListener("submit", function (e) {

	var paragrapheErreur = document.querySelector(".erreur");
	var erreur;
	var formName = "identification";
	var inputs = this;
	var t = 0;


	// Traitement générique
	for (var i = 0; i < inputs.length; i++) {
		if (!inputs[i].value) {
			inputs[i].style.borderBottom = "2px solid  red";
			erreur = "Veuillez renseigner tous les champs";

		}
	}

	if (erreur) {

		e.preventDefault();
		paragrapheErreur.style.padding = "20px";
		//Veuillez remplir tout les champs pour continuer
		console.log('erreur')
		paragrapheErreur.innerHTML = '<span class="closebtn" onclick=\'closeErreur("' + formName + '")\'>&times;</span><strong>ERREUR : </strong>' + erreur;

		return false;
	} else {
		//activer le e.preventDefault() pour TEST 
		//e.preventDefault();
		
		console.log("formulaire remplie")

		var nom = this.elements["nom"].value;
		var prenom = this.elements["prenom"].value;
		var age = this.elements["age"].value;
		var email = this.elements["email"].value;
		var numero = this.elements["tel"].value;
		var cinepass = this.elements["nonpass"].checked ? false : true;
		var listSelect=["Comédie","Drame","Action","Romance","Horreur","Science-fiction","Fantastique","Aventure"]
		var categorieFav= getSelectContent(this.elements["categorie"].selectedIndex,listSelect,"identification");
		//on appele les fonctions de verification pour chaque input
		console.log(categorieFav)
		
		verifNom(nom);
		verifPrenom(prenom);
		verifAge(age);
		verifEmail(email);
		verifNumero(numero);
		//si une des verifications returne une errreur on arrete l'execution et 
		//on renvoie l'erreur
		if ( !verifNom(nom)&& !verifPrenom(prenom) && !verifAge(age) && !verifEmail(email) && !verifNumero(numero) && categorieFav) {
			//Si l'utilisateur à bien remplie chaque champs correctement
			//On procede maintenant à la Creation des cookie
			
			console.log("ENREGISTRER AVEC SUCCES")
			createCookie("SessionStart", "yes", 5);
			createCookie("Nom", nom, 5);
			createCookie("Prenom", prenom, 5);
			createCookie("Age", age, 5);
			createCookie("Email", email, 5);
			createCookie("Telephone", numero, 5);
			createCookie("CategorieFav",categorieFav, 5);
			createCookie("CinePass", cinepass, 5);
			
			console.log(document.cookie);
			return true;
		}
		else{
			e.preventDefault()
		}





	}



}
);


function getSelectContent(selectIndex,tabSelect,formName){
	console.log(selectIndex);
	if(selectIndex>7){
		return false;
	}
	return tabSelect[selectIndex];
	

}
//////////////////DEBUT FONCTIONS PERSO//////////////////

//Fonction pour fermer l'affichage de l'erreur lorsqu'il ya en

function createErreur(ErreurText, formName, nominput) {
	var erreur = document.querySelector('.erreur');
	var form = document.forms[formName].elements;

	//On precise le champ de l'erreur
	if (nominput != "all") {
		document.forms[formName].elements[nominput].style.borderBottom = "2px solid #f34444";
	}
	else if (nominput != "all") {
		for (var i = 0; i < form.length - 1; i++) {
			form[i].style.borderBottom = "2px solid #f34444";
		}
	}

	erreur.style.padding = "20px";
	//Veuillez remplir tout les champs pour continuer
	return erreur.innerHTML = '<span class="closebtn" onclick=\'closeErreur("' + formName + '")\'>&times;</span><strong>ERREUR : </strong>' + ErreurText;


}
function closeErreur(formName) {
	var er = document.querySelector('.erreur');
	var form = document.forms[formName].elements
	er.innerHTML = "";
	er.style.padding = "0px";
	for (var i = 0; i < form.length - 1; i++) {

		form[i].removeAttribute("style");

	}

}

// Creation de la fonction appelé dans l'input NOM
function verifNom(nom) {
	if (nom.length < 4 || !isNaN(nom) || nom.length>50) {
		return createErreur("le nom renseigner est incorrect", "identification", "nom");
		;
	}
	nom = nom.toUpperCase();
}



//Creation de la fonction appelé dans l'input PRENOM
function verifPrenom(prenom) {
	if (prenom.length < 4 || !isNaN(prenom) || prenom.length>50) {
		return createErreur("le prenom renseigner est incorrect", "identification", "prenom");
		;
	}
	//On met la première lettre en majuscule
	var rewriteP = prenom.toLowerCase().split("");
	rewriteP[0] = prenom[0].toUpperCase();

	//Affectation de la reécriture dans l'input prenom
	prenom = rewriteP.join("");

}


//Creation de la fonction appelé dans l'input EMAIL
function verifEmail(email) {

	var tab = email.split("");
	var counter = 0;
	for (var i = 0; i < tab.length; i++) {
		if (tab[i] == "@" || tab[i] == ".") {
			counter++;
		}
	}
	if (counter > 2 || counter < 2) {
		return createErreur("le format de l'email renseigner est incorrect", "identification", "email");
		;
	}

}


//Creation de la fonction appelé dans l'input AGE
function verifAge(age) {
	if (age < 10 || isNaN(age)) {
		age.value = "";
		return createErreur("L'age renseigner est incorrect", "identification", "age");
		;
	}
}

function verifNumero(numero) {
	if (numero.length < 9 || numero.length>10) {
		numero = "";
		return createErreur("Le numero renseigner est incorrect", "identification", "tel");
		;
	}


}



