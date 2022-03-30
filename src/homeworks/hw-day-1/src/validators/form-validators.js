export function validateRequired(value) {
  if (!value) {
    return { required: 'This field is required' };
  }
  return { required: '' };
}

export function validateMinLength(value, minLength) {
  const numericMinLength = Number(minLength);
  if (value.length < numericMinLength) {
    return { minLength: `Field must have at least ${minLength} chars` };
  }
  return { minLength: '' };
}

export function validateEmail(value) {
  if (!value.includes('@')) {
    return { email: `Invalid e-mail address` };
  }
  return { email: '' };
}

export function validatePassword(value) {
  const errors = [];
  if (value && !value.match(/[#!$]/g)) {
    errors.push('must have special sign (#!$)');
  }
  if (value && !value.match(/\d/g)) {
    errors.push('must have a digit');
  }
  if (errors.length > 0) {
    return { password: 'Password: ' + errors.join(', ') };
  }
  return { password: '' };
}



  describe('validateEmail', () => {
    // ARRANGE:
    it("should inform when the field is required", () => {      
      // ACT
      const value = '';
      // ASSERT
      expect(validateEmail(value)).toBe({ required: 'This field is required' });  
    })

    it("should accept validation after passing value", () => {      
      // ACT
      const value = 'aaa';
      // ASSERT
      expect(validateEmail(value)).toBe({ required: '' });
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
    const value = 'xyz';

    it("should throw an error when password doesn't contain ", () => {      
    // ACT
    const minLength = 5;
    // ASSERT
    expect(validateMinLength(value, minLength)).toBe({ minLength: `Field must have at least ${minLength} chars` });
  })

    it("should accept validation after passing proper value", () => {      
      // ACT
      const minLength = 2;
      // ASSERT
      expect(validateMinLength(value, minLength)).toBe({ minLength: '' });
    })
  })