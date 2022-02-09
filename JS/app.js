const dark = document.querySelector('div')

dark.addEventListener('click', function () {
    let body = document.getElementById("body");
    let currentClass = body.className;
    body.className = currentClass == "light-mode" ? "dark-mode" : "light-mode";
  })
