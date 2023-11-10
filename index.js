function formatMoney(value) {
  value = Math.ceil(value * 100) / 100;
  value = value.toFixed(2);
  return "R$ " + value;
}

function formatSplit(value) {
  if (value == 1) return value + " pessoa";
  return value + " pessoas";
}

function update() {
  let conta = Number(document.getElementById("suaConta").value);
  let porcentagemGorjeta = document.getElementById("gorjetaInput").value;
  let pessoas = document.getElementById("pessoasInput").value;

  let valorGorjeta = conta * (porcentagemGorjeta / 100);
  let totalConta = conta + valorGorjeta;
  let valorPessoa = totalConta / pessoas;

  document.getElementById("porcentagemGorjeta").innerHTML =
    porcentagemGorjeta + "%";
  document.getElementById("valorGorjeta").innerHTML = formatMoney(valorGorjeta);
  document.getElementById("valorTotal").innerHTML = formatMoney(totalConta);
  document.getElementById("qntdPessoas").innerHTML = formatSplit(pessoas);
  document.getElementById("valorPessoa").innerHTML = formatMoney(valorPessoa);
}
