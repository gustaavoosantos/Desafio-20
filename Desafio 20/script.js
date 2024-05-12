
function eleicao() {


    var candidatos = {
     
        1: "HTML5 ",
        2: "CSS3 ",
        3: "JAVASCRIPT ",
        4: "PYTHON ",
        0: "Nulo/Branco "
    };
    var votos = {};
    for (var candidato in candidatos) {
        votos[candidatos[candidato]] = 0;
    }

 
    while (true) {

        var voto = prompt("Escolha seu candidato (Digite o número correspondente):\n" + 
                          "1: HTML5 \n" +
                          "2: CSS3 \n" +
                          "3: JAVASCRIPT \n" +
                          "4: PYTHON \n" +
                          "0: Nulo/Branco\n" +
                          "Pressione Cancelar para sair/votar novamente");

  
        if (voto === null || voto === "") {
            break;
        }

        voto = parseInt(voto);


        if (voto in candidatos) {
            votos[candidatos[voto]]++;
            alert("Voto registrado com sucesso!");
        } else {
            alert("Opção inválida! Por favor, escolha um número válido.");
        }
    }

    var resultado = "Resultado da Eleição:\n";
    for (var candidato in votos) {
        resultado += candidato + ": " + votos[candidato] + " votos\n";
    }
    alert(resultado);
}


eleicao();
