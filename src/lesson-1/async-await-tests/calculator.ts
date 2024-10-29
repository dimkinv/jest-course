export class Calculator{
    async plus(a: number, b: number){
        return a + b;
    }

    async minus(a: number, b: number){
        return a - b;
    }

    async divide(a: number, b: number){
        if(b === 0){
            throw new Error('cannot divide by 0');
        }

        return a / b;
    }

    async mulitply(a: number, b: number){
        return a * b;
    }
}
