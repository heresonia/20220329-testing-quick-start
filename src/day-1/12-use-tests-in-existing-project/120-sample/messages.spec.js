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
    
    it('should return proper messageObject structure', () => {
        const messageObject = messages.getNextMessage();
        

        expect(messageObject).toHaveProperty('text')
        expect(messageObject).toHaveProperty('message')
    })
    
    it('should have previous message when go next by 2 indexes', () => {
        
        // ACT:
        messages.getNextMessage(); // 0
        const messageObject = messages.getNextMessage(); // 1
        

        // ASSERT
        expect(messageObject.hasNext).toBe(true);
        expect(messageObject.hasPrevious).toBe(true);
    })
    
    it('should have previous message when current idx === 1 and we pop previous message', () => {
        
        // ACT:
        messages.getNextMessage(); //0
        messages.getNextMessage(); //1
        messages.getNextMessage(); //2
        const messageObject = messages.getPreviousMessage();
        

        // ASSERT
        expect(messageObject.hasNext).toBe(true);
        expect(messageObject.hasPrevious).toBe(true);
    })
    
    it('should NOT have next message when all messages passed', () => {
        
        // ACT:
        messages.getNextMessage(); //0
        messages.getNextMessage(); //1
        messages.getNextMessage(); //2
        messages.getNextMessage(); //3
        const messageObject = messages.getNextMessage(); //4
        

        // ASSERT
        expect(messageObject.hasNext).toBe(false);
    })
    
    
    it('should Always provide a message even when index of messages in service is out of bound', () => {
        
        // ACT:
        // GO forward 10 messages:
        for(let x = 0; x < 10; x++ ){
            messages.getNextMessage(); 
        }
        const messageObject = messages.getNextMessage(); 
        

        // ASSERT
        expect(messageObject.message).toBeDefined();
        expect(typeof messageObject.message).toBe('string');
    })
})