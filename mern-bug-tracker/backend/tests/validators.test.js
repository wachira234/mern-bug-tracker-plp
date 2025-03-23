const { isValidBug } = require('../utils/validators'); // Hypothetical utility

describe('Validators', () => {
  test('validates correct bug data', () => {
    expect(isValidBug({ title: 'Test', description: 'Desc' })).toBe(true);
  });

  test('rejects invalid bug data', () => {
    expect(isValidBug({ title: '' })).toBe(false);
  });
});
