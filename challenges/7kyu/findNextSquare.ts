/* You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

Examples:(Input --> Output)

121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square */

function oldFindNextSquare(sq: number): number {
  if (Number.isInteger(Math.sqrt(sq))) {
    let nextSq = sq + 1;

    while (!Number.isInteger(Math.sqrt(nextSq))) {
      //   console.log(nextSq);
      nextSq += 1;
    }

    return nextSq;
  }

  return -1;
}

// Observações: não é todo dia que tenho chance de usar while, gostei da prática mas pesquisando outras respostas não foi a forma mais inteligente já que aqui estou testando todos os numeros seguintes até encontrar a resposta, usar Math.pow teria feito mais sentido já que testar tantos numeros é bem custoso.

export default function findNextSquare(sq: number): number {
  let square = Math.sqrt(sq);

  if (Number.isInteger(square)) return Math.pow(++square, 2);

  return -1;
}
