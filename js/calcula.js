var pacientes = document.querySelectorAll(".paciente");
  

  for (var i = 0; i < pacientes.length; i++) { //Percore todas as classes paciente
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso") //Pegando as informações do peso da tr paciente
    var tdAltura = paciente.querySelector(".info-altura")
    var tdImc = paciente.querySelector(".info-imc")

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;


    //Verificando se peso e altura estão ok

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if(!pesoEhValido){
      console.log("Peso invalido!")
      tdImc.textContent = "Peso Inválido!"
      pesoEhValido = false;
      paciente.classList.add("paciente-invalido")
    }

    if(!alturaEhValida){
      console.log("Altura inválida");
      tdImc.textContent = "Altura Inválida"
      alturaEhValida = false;
      paciente.classList.add("paciente-invalido")
    }

    if(pesoEhValido && alturaEhValida){
      imc = calculaImc(peso, altura)
      tdImc.textContent = imc

    }
  }

  function calculaImc(peso, altura){
    let imc = 0
    imc = peso / (altura * altura)
    return imc.toFixed(2)
  }

  function validaPeso(peso) {
    if (peso > 0 && peso < 1000) {
        return true;
    } else {
        return false;
    }
}
function validaAltura(altura) {
    if (altura > 0 && altura <= 3.00) {
        return true;
    } else {
        return false;
    }
}