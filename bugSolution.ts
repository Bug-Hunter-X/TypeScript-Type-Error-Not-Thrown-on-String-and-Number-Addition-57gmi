function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

let result1 = add(1, 2); // Correct usage, no error
console.log(result1); // Logs 3

try {
  let result2 = add(1, "2");
} catch (error) {
  console.error(error.message); // Logs 'Both arguments must be numbers'
}

//Alternative solution using type predicates
function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function addSafe(a: any, b: any): number {
  if (!isNumber(a) || !isNumber(b)) {
      throw new Error('Both arguments must be numbers');
  }
  return a + b;
}
let result3 = addSafe(1,2);
console.log(result3); // Logs 3

try{
 let result4 = addSafe(1, "2");
} catch (error) {
  console.error(error.message); //Logs 'Both arguments must be numbers'
}