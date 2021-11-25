//Appel a la fonction pour afficher le graphique 2 dès le chargement de la page

/*Declaration de nos principal variables*/
var tab = [];
var tabNote = [];
var tabAge = [];
var tabCat = [];
var colorLine = "rgba(184, 0, 0, 0.2)";
var tabColor = [
    "rgba(184, 0, 0,0.6)",
    "#4BC0C0",
    "#FFCCBC",
    "#FF6384",
    "#FFCD56",
    "rgb(0, 229, 249)",
    "rgb(61, 221, 17)",
    "rgb(237, 255, 181)",
    "rgb(223, 109, 255)"
]

/*****************************/

/*Debut de la fonction de recup CSV*/
var csv = new Promise((resolve, reject) => {
    Papa.parse("export.csv", {
        download: true,
        step: function (row) {
            //console.log("Row:", row.data);
            tab.push(row.data)
            //console.log("test unit")

        },
        complete: function () {

            console.log("All done!");
            for (var i = 0; i < tab.length; i++) {
                //indice de l'age dans le csv c'est 3
                tabAge.push(tab[i][3]);
                //indice de la note dans le csv c'est 2
                tabNote.push(tab[i][2]);
                //indice de categorie dans le csv c'est le 6 plutot
                tabCat.push(tab[i][6]);


            }
            tabCat = suppCaseVide(tabCat);
            resolve("Fichier charger avec succès")
        }

    })
});

//affichage du contenue du tableau tabCat 
//qui contient la liste des catégorieFav de chaque participants
csv.then((value) => {
    console.table(tabCat);
});

function goToGraphique(indice, id, titleClass) {

    csv.then((value) => {
        switch (indice) {
            case 1:
                console.log("Appel à la foncton graphique 1");
                graphique1(id, titleClass);
                break;
            case 2:
                console.log("Appel à la foncton graphique 2");
                graphique2(id, titleClass);
                break
            case 3:
                console.log("Appel à la foncton graphique 3");
                graphique3(id, titleClass);
                break;
            default:
                console.log(`Indice invalides lors de l'appel de la fonction`);
            //console.log(value)
        }

        // expected output: "Success!"
    });

}


//DEBUT DE NOS FUNCTION PRINCIPAL

function createGraphique(labelTab, data, type, labelNom, idCanvas, color) {
    var ctx = document.getElementById(idCanvas).getContext("2d");
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: type,

        // The data for our dataset
        data: {
            labels: labelTab,
            datasets: [
                {

                    label: labelNom,
                    backgroundColor: color,
                    borderColor: "rgb(184, 0, 0)",
                    data: data
                }
            ]
        },

        // Configuration options go here
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }],
                xAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

    Chart.defaults.global.defaultFontSize = 16;
}


//
/*Permet de supprimer dans un tableau toute les cases vides*/
function suppCaseVide(tab) {
    var newTab = tab.filter(function (val) {
        if (val == '' || val == NaN || val == undefined || val == null) {
            return false;
        }
        return true;
    });
    return newTab;

}







/***************FUNCTION POUR LA CREATION DES GRAPHIQUES*********************/

function graphique1(id, titleClass) {
    //GRAPHIQUE DU TAUX DE SATISFACTION
    if (!id) {
        id = "myChart"

    }
    var txt = document.querySelector("." + titleClass);
    txt.innerText = "Graph du taux de satisfactions";
    var sad = 0;
    var confused = 0;
    var smiling = 0;
    var love = 0;
    var happy = 0;


    for (var i = 0; i < tab.length; i++) {

        tabNote = parseInt(tab[i][2]);

        if (tabNote <= 5) {
            sad++
        }

        else if (tabNote < 10 && tabNote > 5) {
            confused++;
        }
        else if (tabNote >= 10 && tabNote <= 13) {
            smiling++;
        }
        else if (tabNote > 13 && tabNote <= 16) {
            happy++;
        }
        else if (tabNote > 16) {
            love++
        }

    }


    var tabTotal = [sad, confused, smiling, happy, love]
    console.log(tab);
    createGraphique(["😥", "😐", "🙂", "😀", "😍"], tabTotal, "bar", "Graphique de satisfaction", id, tabColor);
}


function graphique2(id, titleClass) {
    //GRAPHIQUE DE L'AGE
    if (!id) {
        id = "myChart"

    }
    var txt = document.querySelector("." + titleClass);

    var tabNonDoublon;
    var tabNonDoublon2;
    var keys;
    txt.innerText = "Graph de moyenne d'Ages";
    tabNonDoublon = new Set(tabAge);
    tabNonDoublon2 = [...tabNonDoublon];
    var test = new Map();
    var counter = 1;

    console.log(tabNonDoublon2);
    //console.log(tabNote)

    for (var i = 0; i < tabNonDoublon2.length; i++) {

        for (var j = 0; j < tabAge.length - 1; j++) {
            if (tabAge[j] == tabNonDoublon2[i]) {
                counter++;
                test.set(tabNonDoublon2[i], counter)

            }
        }
        counter = 0;
    }
    var mapIter = test.values();
    keys = Array.from(mapIter);


    console.log(tabNonDoublon2);

    createGraphique(suppCaseVide(tabNonDoublon2), suppCaseVide(keys), "polarArea", "Graphique moyenne d'age", id, tabColor);

}


function graphique3(id, titleClass) {
    //
    if (!id) {
        id = "myChart"

    }
    var txt = document.querySelector("." + titleClass);
    txt.innerText = "Graph par Catégorie de Films ";
    var tab=[0][0];
    var categorieDeFilm = { "comedie" : 0, "drame" : 0, "action": 0,
                            "romance" : 0,"horreur" : 0,"sciencefiction" : 0,
                            "fantastique" : 0,"aventure" : 0 };
    

    for (var i = 0; i < tabCat.length; i++) {

        // tabCat = parseInt(tab[i][5]);

        if (tabCat[i] == "Comédie") {
            categorieDeFilm.comedie++;
            console.log("toto");
        }
        else if (tabCat[i] == "Drame") {
            categorieDeFilm.drame++;
        }
        else if (tabCat[i] == "Action") {
            categorieDeFilm.action++;
        }
        else if (tabCat[i] == "Romance") {
            categorieDeFilm.romance++
        }
        else if (tabCat[i] == "Horreur") {
            categorieDeFilm.horreur++
        }
        else if (tabCat[i] == "Sciencefiction") {
            categorieDeFilm.sciencefiction++
        }
        else if (tabCat[i] == "Fantastique") {
            categorieDeFilm.fantastique++
        }
        else if (tabCat[i] == "Aventure") {
            categorieDeFilm.aventure++
        }

    }


    var tabTotal =  [...Object.values(categorieDeFilm)];
    console.table(tabTotal);
    createGraphique(["Comédie", "Drame", "Action", "Romance", "Horreur", "Sc-fiction", "Fantastique", "Aventure"], tabTotal, "line", "Graph par Catégorie de Films", id, colorLine);
}
