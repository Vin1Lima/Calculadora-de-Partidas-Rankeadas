// Desafio: Calculadora de partidas Rankeadas
// Conceitos usados: variáveis, operadores, laço de repetição, estrutura de decisão e funções

// Recebe vitórias e derrotas e retorna o saldo
function calcularSaldo(vitorias, derrotas) {
  return vitorias - derrotas;
}

// Recebe o saldo e retorna o nível
function definirNivel(saldo) {
  if (saldo <= 10) {
    return "Ferro";
  } else if (saldo <= 20) {
    return "Bronze";
  } else if (saldo <= 50) {
    return "Prata";
  } else if (saldo <= 80) {
    return "Ouro";
  } else if (saldo <= 90) {
    return "Diamante";
  } else if (saldo <= 100) {
    return "Lendário";
  } else {
    return "Imortal";
  }
}

// Lista de jogadores (o laço percorre cada um)
let jogadores = [
  { vitorias: 15, derrotas: 10 },
  { vitorias: 40, derrotas: 25 },
  { vitorias: 60, derrotas: 20 },
  { vitorias: 90, derrotas: 30 },
  { vitorias: 120, derrotas: 35 },
  { vitorias: 150, derrotas: 55 },
  { vitorias: 200, derrotas: 50 },
];

for (let i = 0; i < jogadores.length; i++) {
  let saldoVitorias = calcularSaldo(jogadores[i].vitorias, jogadores[i].derrotas);
  let nivel = definirNivel(saldoVitorias);

  console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`);
}
