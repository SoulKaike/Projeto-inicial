const botao = document.getElementById("botao");
botao.addEventListener("click", alertar,false);

var nome = document.getElementById("nome");
var saida = document.getElementById("saida-de-dados");

function alertar(){
      //alert("O nome inserido foi" + nome.value);

      saida.innerText  = "Nome:" + nome.value +
            "\n Email:" + email.value +
            "\n Telefone:" +Telefone.value +
            "\n CEP:" + cep.value +
            "\n Logradouro:" + Logradouro.value +
            "\n Número:" + .value +
            "\n Complemento:" + complemento.value +                        ;
            "\n Bairro:" + Bairro.value +
            "\n Cidade:" + Cidade.value +
            "\n Estado:" + email.value +

      }
