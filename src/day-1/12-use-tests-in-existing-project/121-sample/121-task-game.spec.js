import { makeAMove, possibleChoices } from './game.js';

/**
 * TASK(121);
 *
 * Zostajesz przydzielony do projektu ROCK — PAPER — SCISSORS.
 *
 * Czas poznać jak on działa.
 * Napisz odpowiednie testy do modułu `game.js`.
 *
 * Sprawdź prawidłowości w makeAMove
 * czy faktycznie można grać z zasadami:
 *
 * ROCK pokojnuje SCISSORS
 * PAPER pokonuje ROCK
 * SCISSORS pokonują PAPER ?
 *
 *
 *
 * **BONUS:
 * Hint (do tego zadania warto wrócić dopiero po poznaniu składni it.each ([]) )
 *  https://jestjs.io/docs/api#testeachtablename-fn-timeout
 * jest to dobry przykład testowania założeń algorytmów.
 *
 *
 * Czy możliwe jest zagranie w ROCK - PAPER - SCISSORS - LIZARD - SPOCK
 * zgodnie z zasadami:
 * - podając dokładnie kolejność: ['paper', 'lizard', 'scissors', 'rock', 'spock']
 * - z czego wynika, że:
 *
 *   PAPER pokonuje SPOCK i ROCK
 *   LIZARD pokonuje PAPER i SPOCK
 *   SCISSORS pokonują PAPER i LIZARD
 *   ROCK pokonuje SCISSORS i LIZARD
 *   SPOCK pokonuje SCISSORS i ROCK
 * */

describe('The Rock-Paper-Scissors Game', () => {
  beforeEach(() => {
    possibleChoices(['rock', 'paper', 'scissors']);
  });

  it('should throw Error if 1st choice does not exist', () => {
      
      // Arrange
      const gameChoice = 'NOT-existing';   
      
      expect(() => makeAMove(gameChoice)).toThrow(`There is no "${gameChoice}" option in game choices!`);
  })
  
  
  it('should be DRAW if the same choices given', () => {
      
    // Arrange
    const firstChoice = 'paper';
    const secondChoice = 'paper';   
    
    // Act:
    const gameResult = makeAMove(firstChoice, secondChoice);
    
    expect(gameResult).toBe('game-draw')
    // expect(makeAMove('scissors', 'scissors')).toBe('game-draw')
    // expect(makeAMove('paper', 'paper')).toBe('game-draw')
  })
  
  it.each([
    ['rock', 'rock'],
    ['paper', 'paper'],
    ['scissors', 'scissors']
  ])('should be DRAW if 1st: %s , 2nd: %s', (firstChoice, secondChoice) => {
    const gameResult = makeAMove(firstChoice, secondChoice);
    
    expect(gameResult).toBe('game-draw')
  });

  it.each([
    ['rock', 'scissors', 'game-win'],
    ['paper', 'rock', 'game-win'],
    ['scissors', 'paper', 'game-win'],
    ['rock', 'paper', 'game-loose'],
    ['paper', 'scissors', 'game-loose'],
    ['scissors', 'rock', 'game-loose']
  ])(' 1st: %s , 2nd: %s THEN %s', (firstChoice, secondChoice, expectedResult) => {
    const gameResult = makeAMove(firstChoice, secondChoice);
    
    expect(gameResult).toBe(expectedResult) 
  });

  
  
});
