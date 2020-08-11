var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event) {
    event.target.parentNode.classList.add("fade");

    setTimeout(function() {
        event.target.parentNode.remove();
    }, 500); //Tempo é setado em milisegundos

});


