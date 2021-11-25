///////////////////////////COOKIE///////////////////////////////////
//COOKIE CREATE FUNCTION
//COOKIE CREATE FUNCTION
function createCookie(nom, valeur, jour) {
    if (nom && valeur && jour) {
        var date = new Date();
        //On definie la date d'expiration du cookie
        date.setTime(date.getTime() + (jour * 24 * 60 * 60 * 1000));
        var exp = date.toGMTString();
        console.log("Date d'expiration du cookie : "+exp);
        //Creatio du cookie
        document.cookie =nom+"=" +valeur+ ";expires="+exp;
       
    }

}
//Creation d'une fonction pour supprimer un cookie
function deleteCookie(nom) {
    if (nom) {

        //Creatio du cookie
        document.cookie =nom+"=;Max-Age=-999999999;";

        console.log('Cookie "' + nom + '" supprimer avec succès');
    }

}



function lireCookie(nom) {
	
    var tab = document.cookie.split(';');
    var tab2 = new Array;
    for (var i = 0; i < tab.length; i++) {
        tab2.push(tab[i].split('='));
    }

    for (var i = 0; i < tab2.length; i++) {

        if (tab2[i][0].replace(" ","") == nom) {
            //console.log(tab2[i][0]);
            return tab2[i][1];

        }

    }

    return false;

}
//deleteCookie("nom");
//deleteCookie("prenom");
console.log(lireCookie("cookieAccord"));
    
        if(lireCookie("cookieAccord")== false || lireCookie("cookieAccord")=="no" ){
            
            var cookieDiv=document.querySelector(".cookie-consent-banner");
                cookieDiv.style.display="inline-block";
        }
    
    function acceptCookie() {
      console.log("accept");
      createCookie("cookieAccord","yes",2);
      var cookieDiv=document.querySelector(".cookie-consent-banner");

      cookieDiv.className="HiddenCookie";
    }

    function refuseCookie() {
         console.log("refuser");
         createCookie("cookieAccord","no",2);
      var cookieDiv=document.querySelector(".cookie-consent-banner");

      cookieDiv.className="HiddenCookie";

    }
  