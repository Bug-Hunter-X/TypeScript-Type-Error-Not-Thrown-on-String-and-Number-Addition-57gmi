function add(a: number, b: number): number {
  return a + b;
}

let result = add(1, "2"); // Type error is not thrown here
console.log(result); // This will log "12"