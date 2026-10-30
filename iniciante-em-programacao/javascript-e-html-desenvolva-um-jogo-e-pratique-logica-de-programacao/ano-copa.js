function pulaLinha() {

    document.write("<br>");
    document.write("<br>");
}

function mostra(frase) {

    document.write(frase);
    pulaLinha();
}

var limite = parseInt(prompt("Informe a data limite:"));

var anoCopa = 1930;

while (anoCopa <= limite) {

    mostra("Houve copa no ano de " + anoCopa);
    anoCopa = anoCopa + 4;
}

mostra("Fim da execução.");