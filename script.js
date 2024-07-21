document.querySelector('#botao').addEventListener('click', function() {
    // Obter valores de quilometragem e combustível
    const km = Number(document.querySelector('#km').value);
    const combustivel = Number(document.querySelector('#combustivel').value);

    // Obter o veículo selecionado
    const veiculo = document.querySelector('input[name="veiculo"]:checked');

    // Verificar se todos os campos foram preenchidos e um veículo foi selecionado
    if (Number.isNaN(km) || Number.isNaN(combustivel) || !veiculo) {
        alert('Por favor, preencha todos os campos e selecione um veículo.');
        return;
    }

    // Divisores baseados no veículo selecionado
    let consumoPorLitro;
    switch (veiculo.value) {
        case 'moto':
            consumoPorLitro = 35;
            break;
        case 'carro':
            consumoPorLitro = 14;
            break;
        case 'leve':
            consumoPorLitro = 6;
            break;
        case 'toco':
            consumoPorLitro = 4.5;
            break;
        case 'truck':
            consumoPorLitro = 3.5;
            break;
        case 'carreta':
            consumoPorLitro = 2;
            break;
        default:
            alert('Veículo não reconhecido.');
            return;
    }

    // Calcular a quantidade de litros necessários e o custo total
    const litrosNecessarios = km / consumoPorLitro;
    const custoTotal = litrosNecessarios * combustivel;

    // Exibir o resultado
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML =  `-> Seu veículo faz ${consumoPorLitro} km com 1 litro<br>-> O gasto total de sua viagem será: R$ ${custoTotal.toFixed(2)}<br>-> Você precisará de ${litrosNecessarios.toFixed(2)} litros de combustível.`;
});
