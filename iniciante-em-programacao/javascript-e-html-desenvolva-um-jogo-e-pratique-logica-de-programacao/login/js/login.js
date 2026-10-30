var loginCadastrado = "usuario";
var senhaCadastrada = "123456";

var maximoTentativas = 3;
var tentativaAtual = 1;

while (tentativaAtual <= maximoTentativas) {

    var loginInformado = prompt("Informe seu login: ");
    var senhaInformada = prompt("Informe sua senha: ");

    if (loginCadastrado == loginInformado && senhaCadastrada == senhaInformada) {

        alert("Seja bem-vindo ao sistema, " + loginInformado);

        tentativaAtual = maximoTentativas; // Acertou, contabiliza todas as tentativas para sair do Loop. Incrementa as tentativas em 1! 

    } else {

        if (tentativaAtual == 3) {
            alert("Foi ultrapassado o número de tentativas permitido!");
        } else {
            alert("Login inválido. Tente novamente!");
        }
    }

    // Incrementa a tentativa atual em 1 e continua o Loop até que a tentativa atual seja maior que o máximo de tentativas.
    tentativaAtual = tentativaAtual + 1
}
