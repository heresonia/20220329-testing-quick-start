/**
 * TASK(104);
 *
 * Czas napisać własne testy.
 *
 * W ich opisach masz dokładne założenia.
 * Musisz zdefiniować logikę dla `divide` żeby je spełnić
 *
 * Zadanie uruchom jako:
 * ```
 * npm run test:warm-up-104
 * ```
 *
 * Zastanów się dlaczego:
 *
 * 1. Warto najpierw zapalić test "na czerwono"
 * 2. Nie ma znaczenia czy najpierw napiszesz test, czy logikę implementacji.
 * 3. Możesz wymyślić więcej możliwości sprawdzenia działania tej logiki jednak,
 *    dla każdego sprawdzenia warto napisać osobny test.
 *
 * */

function throwIfNotNumber(num, name) {
    if(typeof num !== 'number') {
        throw new Error(`${name} must be a number !`)
    } 
}

function divide(dividend, divisor) {
    throwIfNotNumber(dividend, 'Dividend')
    throwIfNotNumber(divisor, 'Divisor')
    if(divisor === 0) {
        throw new Error('You cannot divide by 0')  
    }
    return dividend / divisor;
}

test('should properly divide positive numbers', () => {
    const a = 100;
    const b = 10;
    
    const result = divide(a, b);
    
    expect(result).toBe(10);
});

test('should properly divide negative numbers', () => {
    const a = -1000;
    const b = 10;
    
    const result = divide(a, b);
    
    expect(result).toBe(-100);
});

test('should throw error if not a number given as argument', () => {
    const a = 'hello';
    const b = 'world';
    
    expect(() => divide(a, 10)).toThrowError('Dividend must be a number !');
    expect(() => divide(10, b)).toThrowError('Divisor must be a number !');
});

// Extra task:
test('*should throw error when divisor is equal 0 like "You cannot divide by 0"', () => {
    const a = 100;
    const b = 0;
    
    expect(() => divide(a, b)).toThrowError('You cannot divide by 0');
});
