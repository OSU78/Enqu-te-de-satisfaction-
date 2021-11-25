<!DOCTYPE html>
<!-- page d'accueil -->

<html>

<!-- en-tete technique-->

<head>
  <meta charset="utf-8">
  <title>CinéVerse</title>

  <!-- commentaire pour indexation par les robots de recherche-->
  <meta name="description" content="Le site de Vidéo à la Demande spécial séances en direct">
  <meta name="keywords" lang="fr" content="CinéVerse, streaming, séance en direct, séance, cinéma, streaming en direct, film en direct">
  <meta name="Author" content="Catherine Rasser, Ousmane Salamatao, Aymen Haily">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">

  <link href="style/fullscreen.css" rel="stylesheet" type="text/css">
  <link rel="stylesheet" type="text/css" href="style/cookie.css">

  <link rel="shortcut icon" href="image/icone.ico" />
  <!-- <script type="text/javascript" src="javascript/script.js"></script>-->
</head>


<body class="body">

  <header>
    <div id="intro" class="fullscreen">
      <!--bandeau fixe header-->
      <div class="sticky">
        <!-- logo renvoyant vers la page d'accueil -->
        <a href="index.php"><img class="logo" src="image/logo.png" width="220"></a>
      </div>

      <ul class="topnav">
        <li style="display:inline"><a class="topnav active" href="index.php">Accueil</a></li>
        <li style="display:inline"><a href="enquete.html">Enquête de satisfaction</a></li>
      </ul>
    </div>
  </header>

  <main id="swup" class="transition-fade">
    <div class="SuiteLinearGrad">
      <div class="table">

        <h1 id="h1Index">Vivez une nouvelle</h1><br>
        <h1 id="h1Index">expérience cinématographique</h1><br>


        <section class="dynamicSection">
          <img class="mobileImg" src="image/avatar2.jpg" width="80">
          <img class="laptopImg" src="image/avatar3.jpg" width="300">
          <img class="tvImg" src="image/avatar1.jpg" width="600">
          <img class="tvImgMobile" src="image/avatar1.jpg" width="350">

          <br><br><br>
          <aside class="asideP">
            <a href="#" class="btn-success">JE M'INSCRIE</a>
          </aside>

        </section>


      </div>
    </div>


    <div class="linearGr">
      <h2 style="margin-left: 15px; font-size : 35px;color: rgba(0,0,0,0.75);">Alors, c'est quoi CinéVerse ?</h2><br>

      <div id="flexDiv">
        <a href="enquete.html" class="card">
          <aside>
            <p>Projet n°1 - JavaScript </p>
          </aside>
        </a>
        <a href="#" class="card">
          <aside>
            <p>Projet n°2 - PHP</p>
          </aside>
        </a>
        <a href="#" class="card">
          <aside>
            <p>Projet n°3 - JEE</p>
          </aside>
        </a>
        <a href="#" class="card">
          <aside>
            <p>Projet n°4 - NODEJS </p>
          </aside>
        </a>
        <a href="#" class="card">
          <aside>
            <p>Projet n°5 - C#/ASP</p>
          </aside>
        </a>
        <a href="#" class="card">
          <aside>
            <p>Projet n°6 - Angular/Bootstrap</p>
          </aside>
        </a>
        <a href="#" class="card">
          <aside>
            <p>Projet n°7 - Android appli</p>
          </aside>
        </a>
      </div>


<!--COOKIE PARTIE-->
      <div class="cookie-consent-banner"  >
        <div class="cookie-consent-banner__inner">
          <div class="cookie-consent-banner__copy">
            <div class="cookie-consent-banner__header" style="transition: none">NOTIFICATION COOKIES 🔔</div>
            <div class="cookie-consent-banner__description inlineContent">
              <div>
                <p>Ce site utilise des cookies pour vous offrir une meilleure expérience..</p>
              </div>

              <div class="cookie-consent-banner__actions action">
                <a href="#" class="cookie-consent-banner__cta" onclick="acceptCookie()">
                  Accepter
                </a>

                <a href="#" class="cookie-consent-banner__cta cookie-consent-banner__cta--secondary" onclick="refuseCookie()">
                  Refuser
                </a>
              </div>
            </div>
          </div>


        </div>
      </div>

<!---->



  </main>

  <!--bandeau footer-->
  <script src="js/cookie.js"></script>


  <footer>
    <div class="footer">
      <!-- logo renvoyant vers la page d'accueil -->
      <p style="margin-left: 15px;">CinéVerse Copyright@2020 by Os. All Rights Reserved.</p>
    </div>
  </footer>
  <!-- or directly from unpkg -->



</body>

</html>