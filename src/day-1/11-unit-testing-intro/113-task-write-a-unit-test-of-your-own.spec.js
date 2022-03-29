/**
 * TASK(113);
 *
 * W naszym systemie musimy mieć funkcję dekoratora, aby wziąć dowolny obiekt (`user`) i dodać wartość `profession`.
 *
 *   Ta funkcja musi zachowywać się tak:
 *
 *   1. Obiekt dostarczony do tej funkcji nie powinien być mutowany!!!
 *   2. Funkcja powinna zwrócić obiekt z właściwością i wartością profession.
 *   3. Tylko `user` musi być podany, aby funkcja zadziałała.
 *   4. Jeśli nie podano `profession`, powinno to uczynić zawód "unknown".
 *
 *   przykład wywołania:
 *   attachProfession({}, "programmer")  ---- wynik: { profession: 'programmer' }
 *   attachProfession({name: 'John'}) ---- wynik: { name: 'John', profession: 'unknown' }
 *
 *  Rozpisz przypadki testowe, zaimplementuj funkcję.
 * */

function attachProfession(user, profession) {
    let computedProfession = profession;
    if(!profession) {
        computedProfession = 'unknown';
    }
    const computedUser = {};
    for(const key in user) {
      computedUser[key] = user[key];
    }
    computedUser.profession = computedProfession;
    return computedUser;
}

describe('attachProfession', () => {
    
    it('should give me "unknown" profession if no argument given', () => {
        const user = {};
        
        const result = attachProfession(user);
        
        expect(result).toEqual({profession: 'unknown'})
    });
    
    it('should attach profession "programmer"', () => {
        const user = {};
        
        const result = attachProfession(user, 'programmer');
        
        expect(result).toEqual({profession: 'programmer'})
    });
    
    it('should attach profession "pilot" to existing user', () => {
        const user = {name: 'John'};
        
        const result = attachProfession(user, 'pilot');
        
        expect(result).toEqual({name: 'John', profession: 'pilot'})
    });
    
    it('should not mutate input value', () => {
        const user = {name: 'John'};
        
        const result = attachProfession(user, 'pilot');
        
        expect(result).not.toBe(user)
    });
})





