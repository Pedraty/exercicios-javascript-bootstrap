function teste() {
    var anoAtual = parseInt(prompt("Insira o ano atual: "));
    var anoNascimento = parseInt(prompt("Insira o ano de seu nascimento: "));
    var idade = anoAtual - anoNascimento

    if (idade > 15 & idade < 18) {
        alert("Voto não obrigatório")
    }
    else if (idade < 15){
        alert("Você não pode votar ainda.")
    }
    else {
        alert("Seu voto é obrigatório.")
    }

}