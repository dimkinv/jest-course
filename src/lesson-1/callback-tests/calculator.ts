export class Calculator{
    plus(a: number, b: number, callback: CallbackFn){
        callback(null, a + b);
    }

    minus(a: number, b: number, callback: CallbackFn){
        callback(null, a - b);
    }

    divide(a: number, b: number, callback: CallbackFn){
        if(b === 0){
            return callback(new Error('cannot divide by 0'), null);
        }

        callback(null, a / b);
    }

    multiply(a: number, b: number, callback: CallbackFn){
        callback(null, a * b);
    }
}

type CallbackFn = (err: Error | null, response:number | null)=> void;