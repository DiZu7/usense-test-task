export const passwordPatterns: { [key: string]: RegExp } = {
  lettersPattern: /[A-Za-z]/,
  numbersPattern: /\d/,
  symbolsPattern: /\W/,
};

export interface PasswordValidationItem {
  text: string;
  progress: string;
  color: string;
}

export const passwordValidationConfigs: PasswordValidationItem[] = [
  { text: 'Field is empty', progress: '0%', color: '#d3d3d3' },
  { text: 'Password has less than 8 characters', progress: '100%', color: '#f00' },
  { text: 'Your password is easy', progress: '33%', color: '#f00' },
  { text: 'Your password is medium', progress: '66%', color: '#ffff00' },
  { text: 'Your password is strong', progress: '100%', color: '#0f0' },
];
