import { checkIsFormaValuesValid } from './helpers';

it('should return false for empty values', () => {
  const response = checkIsFormaValuesValid({
    email: 'email@gmail.com',
    'first-name': '',
  });
  expect(response).toEqual(false);
});

it('should return true for valid (non-empty) values and valid email', () => {
  const response = checkIsFormaValuesValid({
    email: 'email@gmail.com',
    'first-name': 'kostya',
    'last-name': 'arabadzhi',
  });
  expect(response).toEqual(true);
});
