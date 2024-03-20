import { useState } from 'react';

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div
      id="auth-inputs"
      className="flex flex-col mx-auto items-center container border-2 border-yellow-700 p-4 rounded-lg "
    >
      <p className="flex flex-col my-3">
        <label className={`label ${emailNotValid ? 'invalid' : ''}`}>
          Email
        </label>
        <input
          type="email"
          className={`${
            emailNotValid ? 'invalid' : ''
          } rounded-lg bg-transparent border-2 border-white`}
          onChange={(event) => handleInputChange('email', event.target.value)}
        />
      </p>
      <p className="flex flex-col my-2">
        <label className={`label ${emailNotValid ? 'invalid' : ''}`}>
          Password
        </label>
        <input
          type="password"
          className={`${
            passwordNotValid ? 'invalid' : ''
          } rounded-lg bg-transparent border-2 border-white`}
          onChange={(event) =>
            handleInputChange('password', event.target.value)
          }
        />
      </p>

      <div className="actions flex flex-col">
        <button
          className="px-2 py-1 bg-yellow-600 rounded-md my-2 text-white hover:bg-yellow-400"
          onClick={handleLogin}
        >
          Sign In
        </button>
        <p className="text-center">or</p>
        <button
          type="button"
          className="px-2 py-1 bg-yellow-600 rounded-md my-2 text-white hover:bg-yellow-400"
        >
          Create a new account
        </button>
      </div>
    </div>
  );
}
