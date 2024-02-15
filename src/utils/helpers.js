import { EMAIL_REGEX } from 'constants';

export const checkIsFormaValuesValid = (formValues) => {
  // If any field is empty return false
  if (Object.values(formValues).some((value) => !value)) {
    return false;
  }
  // If email value doesn't match email regex return false
  if (!formValues.email.match(EMAIL_REGEX)) {
    return false;
  }
  return true;
};
