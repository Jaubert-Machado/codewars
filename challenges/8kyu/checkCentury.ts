// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

export default function checkCentury(year: number): number {
  return Math.ceil(year / 100);
}

// Observações: Essa solução considera que qualquer numero decimal seja arredondado para cima, sendo assim, 2.01 será arredondando para 3, ou seja, ano 201 é arredondado para 3.
