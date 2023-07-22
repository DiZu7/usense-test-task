import React, { useState, ChangeEvent } from 'react';
import ProgressBar from './ProgressBar';
import { checkPasswordComplexity } from './utils/passwordUtils';
import { passwordValidationConfigs } from './configs/passwordConfigs';

// ALGO
// 1. Обробити введення паролю (контрольована форма)
// 2. перевірити силу введеного пароля (регулярні вирази):
//  - easy (Only letters/digits/symbols)
//  - medium (letters-symbols/letters-digits/digits-symbols)
//  - strong (letters, symbols and numbers)
// 3. Відповідно до сили паролю змінити колір прогресбару:
//  - інпут пустий - всі секції сірі
//  - інпут менше 8 символів - всі секції червоні
//  - easy - 1ша секція червона, інші сірі
//  - medium - 2ві секції жовті, інша сіра
//  - strong - 3и секції зелені
// 4. Паралельно змінювати колір тексту про силу пароля

const App: React.FC = () => {
  const [password, setPassword] = useState<string>('');

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
  };

  const passwordComplexity: number = checkPasswordComplexity(password);

  return (
    <div className="password-checker">
      <h2 className="password-checker__title">Password strength checker</h2>
      <input
        className="password-checker__input"
        type="password"
        placeholder="Password"
        onChange={handlePasswordChange}
        value={password}
      />
      <ProgressBar
        progress={passwordValidationConfigs[passwordComplexity].progress}
        color={passwordValidationConfigs[passwordComplexity].color}
      />
      <span className="password-checker__desc">
        {passwordValidationConfigs[passwordComplexity].text}
      </span>
    </div>
  );
};

export default App;
