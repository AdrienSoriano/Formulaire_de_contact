const dark = document.querySelector('div');
const form = document.querySelector("form")
const valider = document.querySelector('button');
const prenom = document.querySelector('.firstName');
const nom = document.querySelector('.lastName');
const mail = document.querySelector('.mail');
const sujet = document.querySelector('.subject');
const message = document.querySelector('.message');
let error_first_name = document.getElementById('first_name');
let error_last_name = document.getElementById('last_name');
let error_mail = document.getElementById('email');
let error_subject = document.getElementById('subject');
let error_message = document.getElementById('message');

dark.addEventListener('click', function () {
    let body = document.getElementById("body");
    let currentClass = body.className;
    body.className = currentClass == "light-mode" ? "dark-mode" : "light-mode";
  })

form.addEventListener('submit', function (e){
    let valeur_prenom = prenom.value;
    let valeur_nom = nom.value;
    let valeur_mail = mail.value;
    let valeur_sujet = sujet.value;
    let valeur_message = message.value;
    let background_first_name = document.querySelector('.firstName');
    let background_last_name = document.querySelector('.lastName');
    let background_mail = document.querySelector('.mail');
    let background_subject = document.querySelector('.subject');
    let background_message = document.querySelector('.message');
    let Error = document.querySelector(".resultError");
    let Validated = document.querySelector(".resultValidated")
    let Re = /^[a-z0-9.-]{2,}@+[a-z0-9.-]{2,}$/i
    
    e.preventDefault()
  let formData = new FormData(form)
  let url = 'script.php';
  fetch(url,{
      method: 'POST',
      body: formData
  })
  .then((response) => {
      return response.json()
  })
  .then((data) => {
      console.log(data);
      console.log("coucou");
  })

    if(valeur_prenom == ""){
        error_first_name.innerHTML = "Champ obligatoire.";
        background_first_name.style.backgroundColor = 'rgba(255, 14, 14, 0.2)';
    }
    else{
      error_first_name.innerHTML = "";
      background_first_name.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
    }
    if(valeur_nom == ""){
      error_last_name.innerHTML = "Champ obligatoire.";
      background_last_name.style.backgroundColor = 'rgba(255, 14, 14, 0.2)';
    }
    else{
      error_last_name.innerHTML = "";
      background_last_name.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
    }
    if (Re.test(valeur_mail) == false) {
      error_mail.innerHTML = "Veuillez respecter le format demander (my.email@example.com)."
      background_mail.style.backgroundColor = 'rgba(255, 14, 14, 0.2)';
    }
    
    else{
      error_mail.innerHTML = "";
      background_mail.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
    }
    if(valeur_sujet == ""){
      error_subject.innerHTML = "Champ obligatoire.";
      background_subject.style.backgroundColor = 'rgba(255, 14, 14, 0.2)';
    }
    else{
      error_subject.innerHTML = "";
      background_subject.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
    }
    if(valeur_message == ""){
      error_message.innerHTML = "Champ obligatoire.";
      background_message.style.backgroundColor = 'rgba(255, 14, 14, 0.2)';
    }
    else{
      error_message.innerHTML = "";
      background_message.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
    }
    if((valeur_mail == "")||(valeur_message == "")||(valeur_nom == "")||(valeur_prenom == "")||(valeur_sujet == "")){
      Error.style.visibility = 'visible';
      Validated.style.visibility = 'hidden'
    }
    else{
      Error.style.visibility = 'hidden';
      Validated.style.visibility = 'visible'
      return form.reset();
    }

})