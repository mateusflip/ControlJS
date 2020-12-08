let botaoAdicionar = document.querySelector("#adicionar-paciente")
    botaoAdicionar.addEventListener("click", function(event){ // This is an anonymous function
      event.preventDefault()

      let form = document.querySelector ("#form-adiciona")
        let paciente = obtemPaciente(form)
        let pacienteTr = montaTr(paciente)

        let erros = validaPaciente(paciente)
            if(erros.length >0){
                exibeMensagensDeErro(erros);
                return;
            }


        let tabela = document.querySelector("#tabela-pacientes")
        tabela.appendChild(pacienteTr)
      form.reset()

      var mensagensErro = document.querySelector("#mensagens-erro");
            mensagensErro.innerHTML = "";
    })

    function obtemPaciente(form){
        let paciente = {
            nome: form.nome.value,
            peso: form.peso.value,
            altura: form.altura.value,
            gordura: form.gordura.value,
            imc: calculaImc(form.peso.value, form.altura.value)
        }
        return paciente
    }
    function montaTr(paciente){
        let pacienteTr = document.createElement("tr")
        pacienteTr.classList.add("paciente")

        pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"))
        pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"))
        pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"))
        pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"))
        pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"))
        return pacienteTr
    }

    function montaTd(dado, classe){
        let td = document.createElement("td")
        td.classList.add(classe)
        td.textContent = dado

        return td
    }

    function validaPaciente(paciente){
        let erros = []

        if(paciente.nome.length == 0){
            erros.push("O nome do paciente não pode ser em branco")
        }

        if(paciente.gordura.length == 0){
            erros.push("A gordura não pode ser em branco")
        }

        if(paciente.peso.length == 0){
            erros.push("O Peso não pode se em branco")
        }

        if(paciente.altura.length == 0){
            erros.push("A altura não pode ser em branco")
        }
        if(!validaPeso(paciente.peso)){
            erros.push("Peso é invalido")
        }
        if(!validaAltura(paciente.altura)){
            erros.push("Altura é inválida")
        }

        return erros;
    }


    function exibeMensagensDeErro(erros) {
        var ul = document.querySelector("#mensagens-erro");
        ul.innerHTML = "";

        erros.forEach(function(erro) {
            var li = document.createElement("li");
            li.textContent = erro;
            ul.appendChild(li);
        });
    }
