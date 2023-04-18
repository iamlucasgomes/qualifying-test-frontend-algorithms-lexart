// Reduz um array usando a função reduce
function reduceArray(arr: number[],
  reducer: (acc: number, cur: number)
    => number, initialValue: number): number {
  return arr.reduce(reducer, initialValue);
}

// Cria um hashmap
const hashmap = {
  addition: (a: number, b: number) => a + b,
  subtraction: (a: number, b: number) => a - b,
  multiplication: (a: number, b: number) => a * b,
  division: (a: number, b: number) => {
    if (b === 0) {
      throw new Error("Divisor não pode ser zero!");
    }
    return a / b;
  },
  sum: (arr: number[]) => reduceArray(arr, (acc, cur) => acc + cur, 0),
  subtractArray: (arr: number[]) => reduceArray(arr, (acc, cur) => acc - cur, 0),
  multiplyArray: (arr: number[]) => reduceArray(arr, (acc, cur) => acc * cur, 1),
};

// Exemplos de uso
console.log(hashmap.addition(3, 5)); // Saída: 8
console.log(hashmap.subtraction(10, 5)); // Saída: 5
console.log(hashmap.multiplication(4, 2)); // Saída: 8
console.log(hashmap.division(10, 5)); // Saída: 2
console.log(hashmap.sum([1, 2, 3])); // Saída: 6
console.log(hashmap.subtractArray([10, 2, 3])); // Saída: -15
console.log(hashmap.multiplyArray([2, 3])); // Saída: 6
console.log(hashmap.division(5, 0)); // Lança uma exceção
