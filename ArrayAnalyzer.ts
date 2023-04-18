class ArrayAnalyzer {

  constructor(private arr: (string | number)[]) {
    this.arr = arr;
  };

  // Método para obter um array contendo apenas as letras
  public getLettersArray(): string[] {
    return this.arr.filter((elem) => typeof elem === "string") as string[];
  };

  // Método para obter um array contendo apenas os números
  public getNumbersArray(): number[] {
    return this.arr.filter((elem) => typeof elem === "number") as number[];
  };

  // Método para obter o maior número do array de números
  public getHighestNumber(): number {
    const numbersArr = this.getNumbersArray();
    return numbersArr.reduce((acc, curr) => (curr > acc ? curr : acc), 0);
  };
};

const arr = ["a", 10, "b", "hola", 122, 15];
const analyzer = new ArrayAnalyzer(arr);
console.log(analyzer.getLettersArray()); // Saída: [ 'a', 'b', 'hola' ]
console.log(analyzer.getNumbersArray()); // Saída: [ 10, 122, 15 ]
console.log(analyzer.getHighestNumber()); // Saída: 122 
