# 🎮 Calculadora de Partidas Rankeadas

Desafio da trilha **Formação Lógica de Programação** da [DIO](https://web.dio.me).

## Objetivo

Criar uma função que recebe as vitórias e derrotas de um jogador, calcula o saldo (`vitórias - derrotas`) e mostra o nível dele:

| Saldo | Nível |
|---|---|
| até 10 | Ferro |
| 11 a 20 | Bronze |
| 21 a 50 | Prata |
| 51 a 80 | Ouro |
| 81 a 90 | Diamante |
| 91 a 100 | Lendário |
| 101 ou mais | Imortal |

## Conceitos usados

- **Funções**: `calcularSaldo(vitorias, derrotas)` e `definirNivel(saldo)`, as duas com `return`
- **Variáveis**: `saldoVitorias` e `nivel` guardam os valores retornados
- **Operadores**: subtração (`-`), comparação (`<=`) e incremento (`i++`)
- **Laço de repetição**: um `for` que passa por uma lista de jogadores
- **Estrutura de decisão**: uma cadeia de `if / else if / else`

## Como executar

Com o [Node.js](https://nodejs.org) instalado:

```bash
node index.js
```

## Saída

```
O Herói tem de saldo de 5 está no nível de Ferro
O Herói tem de saldo de 15 está no nível de Bronze
O Herói tem de saldo de 40 está no nível de Prata
O Herói tem de saldo de 60 está no nível de Ouro
O Herói tem de saldo de 85 está no nível de Diamante
O Herói tem de saldo de 95 está no nível de Lendário
O Herói tem de saldo de 150 está no nível de Imortal
```
