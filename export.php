<?php
$tableau= array(
  $_COOKIE['Nom'],$_COOKIE['Prenom'],$_COOKIE['Note'],$_COOKIE['Age'],$_COOKIE['Email'],date("d/m/Y"),$_COOKIE['CategorieFav']
);
$fp = fopen('export.csv','a+');
fputcsv($fp, $tableau,';',"'");

fclose($fp);
header("Location:Remerciements.html");
?>
