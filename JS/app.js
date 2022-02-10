const dark = document.querySelector('div');
const valider = document.querySelector('button');
const prenom = document.querySelector('.firstName');
const nom = document.querySelector('.lastName');
const mail = document.querySelector('.mail');
const sujet = document.querySelector('.subject');
const message = document.querySelector('.message')
let error_first_name = document.getElementById('first_name')

dark.addEventListener('click', function () {
    let body = document.getElementById("body");
    let currentClass = body.className;
    body.className = currentClass == "light-mode" ? "dark-mode" : "light-mode";
  })

valider.addEventListener('click', function (){
    let valeur_prenom = prenom.value
    let valeur_nom = nom.value
    let valeur_mail = mail.value
    let valeur_sujet = sujet.value
    let valeur_message = message.value

    //if(valeur_prenom = null){
    //    error_first_name.
    //}

    console.log(valeur_prenom, valeur_nom, valeur_mail, valeur_sujet, valeur_message);
  }
  )