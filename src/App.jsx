import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

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

const App = () => {
  const [password, setPassword] = useState('');

  // password checker function solution 1
  const passwordPatterns = {
    lettersPattern: /[A-Za-z]/,
    numbersPattern: /\d/,
    symbolsPattern: /\W/,
  };

  const minPasswordLength = 8;

  const checkPasswordComplexity = password => {
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

  // password checker function solution 2
  
  // const lettersRegex = /[A-Za-z]/;
  // const numbersRegex = /\d/;
  // const symbolsRegex = /\W/;

  // const checkPasswordComplexity = password => {
  //   let complexity = 1;

  //   if (password.length === 0) {
  //     return 0;
  //   }

  //   if (password.length < 8) {
  //     return complexity;
  //   }

  //   if (lettersRegex.test(password)) {
  //     complexity++;
  //   }

  //   if (numbersRegex.test(password)) {
  //     complexity++;
  //   }

  //   if (symbolsRegex.test(password)) {
  //     complexity++;
  //   }

  //   return complexity;
  // };

  const config = {
    0: { text: 'field is empty', progress: 0, color: '#d3d3d3' },
    1: { text: 'password has less than 8 characters', progress: '100%', color: '#f00' },
    2: { text: 'Your password is easy', progress: '33%', color: '#f00' },
    3: { text: 'Your password is medium', progress: `66%`, color: '#ffff00' },
    4: { text: 'Your password is strong', progress: '100%', color: '#0f0' },
  };

  const passwordComplexity = checkPasswordComplexity(password);

  return (
    <div className="password-checker">
      <h2 className="password-checker__title">Password strength checker</h2>
      <input
        className="password-checker__input"
        type="password"
        placeholder="Password"
        onChange={event => setPassword(event.target.value)}
        value={password}
      />
      <ProgressBar
        progress={config[passwordComplexity].progress}
        color={config[passwordComplexity].color}
      />
      <span className="password-checker__desc">{config[passwordComplexity].text}</span>
    </div>
  );
};

export default App;

// draft solution - work
// const App = () => {
//   const [password, setPassword] = useState('');
//   const [progressBarColor, setProgressBarColor] = useState('');
//   const [progress, setProgress] = useState(0);
//   const [message, setMessage] = useState('');

//   const handleChange = event => {
//     setPassword(event.target.value);
//   };

//   useEffect(() => {
//     checkPasswordStrength(password);
//   }, [password]);

//   const strongPasswordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]+$/;
//   const easyPasswordRegex = /[\W\dA-Za-z]/;
//   const mediumPasswordRegex =
//     /^(?=.*[\W\d])(?=.*[A-Za-z])|(?=.*[\W_])(?=.*\d)|(?=.*[A-Za-z])(?=.*[\W_])[\W\dA-Za-z]+$/;

//   const checkPasswordStrength = password => {
//     if (strongPasswordRegex.test(password)) {
//       setProgress(100);
//       setProgressBarColor('#0f0');
//       setMessage('strong');
//     } else if (mediumPasswordRegex.test(password)) {
//       setProgress((100 / 3) * 2);
//       setProgressBarColor('#ffff00');
//       setMessage('medium');
//     } else if (easyPasswordRegex.test(password)) {
//       setProgress(100 / 3);
//       setProgressBarColor('#f00');
//       setMessage('easy');
//     } else {
//       setProgressBarColor('#d3d3d3');
//     }
//   };

//   return (
//     <div className="password-checker">
//       <h2 className="password-checker__title">Password strength checker</h2>
//       <input
//         className="password-checker__input"
//         type="password"
//         placeholder="Password"
//         onChange={handleChange}
//       />
//       <ProgressBar progress={progress} progressBarColor={progressBarColor} />

//       <span className="password-checker__desc">
//         {password.length !== 0 ? `Your password is ${message}` : ''}
//       </span>
//     </div>
//   );
// };

// export default App;
