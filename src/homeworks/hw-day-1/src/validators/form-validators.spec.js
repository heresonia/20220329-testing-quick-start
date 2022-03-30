import {
  validateEmail,
  validateMinLength,
  validatePassword,
  validateRequired,
} from 'validators/form-validators.js';

  describe('validateRequired', () => {
    // ARRANGE:
    it("should inform when the field is required", () => {      
      // ACT
      const value = '';
      // ASSERT
      expect(validateRequired(value)).toBe({ required: 'This field is required' });  
    })

    it("should accept validation after passing value", () => {      
      // ACT
      const value = 'aaa';
      // ASSERT
      expect(validateRequired(value)).toBe({ required: '' });
    })
  })

  describe('validateMinLength', () => {
    // ARRANGE:
    it("should inform about min lenght when provided value is to short", () => {      
    // ACT
    const value = 'xyz';
    const minLength = 5;
    // ASSERT
    expect(validateMinLength(value, minLength)).toBe({ minLength: `Field must have at least ${minLength} chars` });
  })

    it("should accept validation after passing value", () => {      
      // ACT
      const value = 'xyz';
      const minLength = 2;
      // ASSERT
      expect(validateMinLength(value, minLength)).toBe({ minLength: '' });
    })
  })

  describe('validateEmail', () => {
    // ARRANGE:
    it("should inform about invalid e-mail address ", () => {      
    // ACT
    const value = 'xxx.pl'
    // ASSERT
    expect(validateEmail(value)).toBe({ email: `Invalid e-mail address`});
    })

    it("should accept validation after passing proper email with @", () => {      
      // ACT
    const value = 'xxx@.pl'
    // ASSERT
    expect(validateEmail(value)).toBe({ email: ''});
    })
  })

  describe('validateEmail', () => {
    // ARRANGE:
    it("should inform about invalid e-mail address ", () => {      
    // ACT
    const value = 'xxx.pl'
    // ASSERT
    expect(validatePassword(value)).toBe({ password: `Invalid e-mail address`});
    })

    it("should accept validation after passing proper email with @", () => {      
      // ACT
    const value = 'xxx@.pl'
    // ASSERT
    expect(validatePassword(value)).toBe({ password: ''});
    })
  })