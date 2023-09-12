/ Taxa de câmbio atual de 1 Bitcoin para dólar (exemplo)
var bitcoin_to_dollar_rate = 45000.0;  // Substitua pelo valor atual

// Função para converter Bitcoin para dólar
function bitcoin_to_dollar(bitcoin_amount) {
    var dollar_amount = bitcoin_amount * bitcoin_to_dollar_rate;
    return dollar_amount;
}

// Solicitar ao usuário o valor em Bitcoin
var bitcoin_amount = parseFloat(prompt("Digite a quantidade de Bitcoin: "));

// Calcular o valor em dólar
var dollar_amount = bitcoin_to_dollar(bitcoin_amount);

// Exibir o resultado
alert(bitcoin_amount + " Bitcoin(s) equivale(m) a " + dollar_amount.toFixed(2) + " dólar(es).");
