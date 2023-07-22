import { passwordPatterns } from '../configs/passwordConfigs';

const minPasswordLength: number = 8;

export const checkPasswordComplexity = (password: string): number => {
  if (password.length === 0) {
    return 0;
  }

  if (password.length < minPasswordLength) {
    return 1;
  }

  return Object.values(passwordPatterns).reduce((complexity, patternValue) => {
    if (patternValue.test(password)) {
      complexity++;
    }
    return complexity;
  }, 1);
};
