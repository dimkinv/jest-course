export class Calculator {
    add(a: number, b: number): number {
      console.log(`Adding ${a} and ${b}`);
      const result = a + b;
      console.log(`Result: ${result}`);
      return result;
    }
  
    subtract(a: number, b: number): number {
      console.log(`Subtracting ${b} from ${a}`);
      const result = a - b;
      console.log(`Result: ${result}`);
      return result;
    }
  }