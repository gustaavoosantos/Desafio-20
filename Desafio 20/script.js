
function eleicao() {


    var candidatos = {
     
        1: "Chris Rock ",
        2: "Jullius ",
        3: "Grege Wulige ",
        4: "Sr.Omar",
        0: "Nulo/Branco "
    };
    var votos = {};
    for (var candidato in candidatos) {
        votos[candidatos[candidato]] = 0;
    }

 
    while (true) {

        var voto = prompt("Escolha seu candidato (Digite o número correspondente):\n" + 
                          "1: Chris Rock \n" +
                          "2: Jullius \n" +
                          "3: Grege Wulige \n" +
                          "4: Sr.Omar \n" +
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
