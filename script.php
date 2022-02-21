<?php

$VotreAdresseMail="a.soriano@codeur.online";

$regleNomPrenom = "/^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ'-]+$/";
$regleEmail = "/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/";
$regleMessage = "/^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ',;()-]+$/";

if((isset($_POST['nom']))&&(preg_match($regleNomPrenom, $_POST['nom']))){
    $nom = $_POST['nom'];
}
if((isset($_POST['prenom']))&&(preg_match($regleNomPrenom, $_POST['prenom']))){
    $prenom = $_POST['prenom'];
}
if((isset($_POST['user_email']))&&(preg_match($regleEmail, $_POST['user_email']))){
    $email = $_POST['user_email'];
}
if((isset($_POST['sujet']))&&(preg_match($regleMessage, $_POST['sujet']))){
    $message = $_POST['sujet'];
}
if((isset($_POST['message']))&&(preg_match($regleMessage, $_POST['message']))){
    $message = $_POST['message'];
}
if(($nom)&&($prenom)&&($email)&&($message)){
    $res = array('validation' => "Demande envoyée !");
    echo json_encode($res);
    mail($VotreAdresseMail, "Bonjour, $prenom", $message, "From: $email");
}
        
    