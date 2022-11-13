function teste() {
    var nota1 = parseFloat(prompt("Digite a nota da primeira avaliação"));
    var nota2 = parseFloat(prompt("Digite a nota da segunda avaliação"));
    var media = (nota1 + nota2) / 2;
    if (media < 5) {
        alert("Sua média é " + media + ". Você foi reprovado(a).");
    }
    else {
        alert("Sua média é "+media+". Você foi aprovado(a).")
    }

}