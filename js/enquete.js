

if(lireCookie("SessionStart")!="yes"){
    window.location.replace("identification.html");
}

else if(lireCookie("SessionStart")=="yes"){
var userInfo=document.querySelector("#userInfo");
var divSticky=document.querySelector(".sticky");
divSticky.classList.remove("sticky");
divSticky.classList.add("sticky2");

userInfo.innerHTML="<aside >Nom <p class='bold'>"+lireCookie("Nom").toUpperCase()+"</p></aside>  <aside>Prenom<p class='bold'> "+lireCookie("Prenom")+"</p></aside>";
}