var botao = document.querySelector("#buscar-pacientes")

botao.addEventListener("click", function(){
  console.log("buscando paciente...")

  var xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes")

  xhr.addEventListener("load", function(){
    console.log(xhr.responseText);

    var resposta = xhr.responseText

    var pacientes = JSON.parse(resposta) //Parseando um objeto JSON

    pacientes.forEach(function(paciente) {
      adicionaPacienteNaTabela(paciente);
    });

  })

  xhr.send();
})
