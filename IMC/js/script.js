
    function calcularPlanos() { // /Criando a funcao e ela é chamada quando clicka no botão "calcular" com id= "calculate"
        var idade = parseFloat(document.getElementById('idade').value); //Criando váriavel idade,e por meio do metódo que puxano documento html o valor que consta no id= "idade"
        var imc = parseFloat(document.getElementById('imc').value); // *Cria váriavel imc,e por meio do metódo que puxa no html o valor referende ao id= "imc"

        // Regras Operadora A
        var precoPlanoABasico = 100 + (idade * 10 * (imc / 10));    //cria a variavel precoPlanoABasico, e aplica a formula.
        var precoPlanoAStandard = (150 + (idade * 15)) * (imc / 10); // cria a variavel precoPlanoAStandard , e aplica a formula.
        var precoPlanoAPremium = (200 - (imc * 10) + (idade * 20)) * (imc / 10); // cria a variavel precoPlanoAPremium, e aplica a formula

        // Regras Operadora B
        var fatorComorbidade = obterFatorComorbidade(imc);
        var precoPlanoBBasico = 100 + (fatorComorbidade * 10 * (imc / 10)); // cria a variavel precoPlanoBBasico, e aplica a formula considerando o fator atorComorbidade
        var precoPlanoBStandard = (150 + (fatorComorbidade * 15)) * (imc / 10);// cria a variavel precoPlanoBStandard, e aplica a formula fator considerando o atorComorbidade
        var precoPlanoBPremium = (200 - (imc * 10) + (fatorComorbidade * 20)) * (imc / 10);//cria a variavel precoPlanoBPremium, e aplica a formula considerando o atorComorbidade

        // Exibir resultados na tabela
        document.getElementById('planoABasico').textContent = "R$" + precoPlanoABasico.toFixed(2); // Exibe o resultado de acordo com os dados do usuário que é puxado do html atráve do id 'planoABasico',e que foi feito a conta.
        document.getElementById('planoAStandard').textContent = "R$" + precoPlanoAStandard.toFixed(2);//Exibe o resultado de acordo com os dados do usuário que é puxado do html atráve do id 'planoAStandard' ,e que foi feito a conta.
        document.getElementById('planoAPremium').textContent = "R$" + precoPlanoAPremium.toFixed(2);//Exibe o resultado de acordo com os dados do usuário que é puxado do html atráve do id 'planoAPremium',e que foi feito a conta.

        document.getElementById('planoBBasico').textContent = "R$" + precoPlanoBBasico.toFixed(2); //Exibe o resultado de acordo com os dados do usuário que é puxado do html atráve do id 'planoBBasico',e que foi feito a conta.
        document.getElementById('planoBStandard').textContent = "R$" + precoPlanoBStandard.toFixed(2); // Exibe o resultado de acordo com os dados do usuário que é puxado do html atráve do id 'planoBStandard',e que foi feito a conta.
        document.getElementById('planoBPremium').textContent = "R$" + precoPlanoBPremium.toFixed(2);// Exibe o resultado de acordo com os dados do usuário que é puxado do html atráve do id 'planoBPremium',e que foi feito a conta.
    }

    function obterFatorComorbidade(imc) { // Funcao que calcula o imc através da funcao obterFatorComorbidade(imc), e mostrando a descricao para o súario de acordo com a situção.
        if (imc < 18.5) {
            return 10; // Abaixo do peso
        } else if (imc < 24.9) {
            return 1; // Normal
        } else if (imc < 29.9) {
            return 6; // Sobrepeso
        } else if (imc < 34.9) {
            return 10; // Obesidade
        } else if (imc < 39.9) {
            return 20; // Obesidade mórbida grave
        } else {
            return 30; // Obesidade mórbida muito grave
        }
    }
