function calcularSalario() {

    var salarioAtual = parseFloat(document.getElementById("salario_atual").value);
    var aumento, percentualString, montante, valor_aumento;

    if(salarioAtual <= 280) {

        aumento = 0.2; // Aumento de 20%

        percentualString = "20%"

        valor_aumento = salarioAtual * aumento;

        montante = salarioAtual + valor_aumento;
    }

    else if(salarioAtual > 280 && salarioAtual < 700) {

        aumento = 0.15; // Aumento de 15%

        percentualString = "15%"

        valor_aumento = salarioAtual * aumento;

        montante = salarioAtual + valor_aumento;
    }

    else if(salarioAtual > 700 && salarioAtual < 1500) {

        aumento = 0.1; // Aumento de 10%

        percentualString = "10%"

        valor_aumento = salarioAtual * aumento;

        montante = salarioAtual + valor_aumento;

    }

    else {

        aumento = 0.05 // Aumento de 5%

        percentualString = "5%"

        valor_aumento = salarioAtual * aumento;

        montante = salarioAtual + valor_aumento;

    }

    // Buscando os IDs das DIVs

    salario_antigo = document.getElementById("salario_antigo");

    salario_percentual = document.getElementById("salario_percentual");

    salario_aumento = document.getElementById("salario_aumento");
    
    salario_montante = document.getElementById("salario_montante");

    // Transformando o HTML

    salario_antigo.innerHTML = "Salário antes do reajuste: <strong>R$" + salarioAtual + "</strong>";

    salario_percentual.innerHTML = "Percentual de aumento aplicado: <strong>" + percentualString + "</strong>";

    salario_aumento.innerHTML = "Valor do aumento: R$ <strong>" + valor_aumento + "</strong>";

    salario_montante.innerHTML = "Novo salário, após o aumento: R$ <strong>" + montante + "</strong>";

}