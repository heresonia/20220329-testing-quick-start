import { messages } from './messages.js'



describe('messages', () => {
    
    beforeEach(() => {
         // ARRANGE:
         messages.restart();
    })
    
    it('should not have previous message at start and hasNext to be true', () => {      
        // ACT
        const msgObject = messages.getNextMessage();
        
        // ASSERT
        expect(msgObject.hasNext).toBe(true);
        expect(msgObject.hasPrevious).toBe(false);
        //expect(msgObject.message).toBeTruthy();
        
    })
    
    it('should not have previous message at start and hasNext to be true', () => {
        const msgObject = messages.getNextMessage();
        

        expect(msgObject.hasNext).toBe(true);
        expect(msgObject.hasPrevious).toBe(false);
        //expect(msgObject.message).toBeTruthy();
        
    })
})