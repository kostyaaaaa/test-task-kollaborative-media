import { checkIsFormaValuesValid } from './helpers';

it('should return false for empty values', () => {
  const response = checkIsFormaValuesValid({
    email: 'email@gmail.com',
    firstName: '',
  });
  expect(response).toEqual(false);
});

it('should return true for valid (non-empty) values and valid email', () => {
  const response = checkIsFormaValuesValid({
    email: 'email@gmail.com',
    firstName: 'kostya',
    lastName: 'arabadzhi',
  });
  expect(response).toEqual(true);
});
