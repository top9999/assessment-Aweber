import React, { useState } from 'react';

const PasswordEntry = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const validatePassword = () => {
    // Password validation rules
    const minLength = 6;
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const numberRegex = /[0-9]/;
    const specialCharRegex = /[!@#$%^&*()_\-+={[}\]|:;"'<,>.]/;

    if (password.length < minLength) {
      setErrorMessage(`Password should be at least ${minLength} characters long.`);
    } else if (!uppercaseRegex.test(password)) {
      setErrorMessage('Password should contain at least one uppercase character.');
    } else if (!lowercaseRegex.test(password)) {
      setErrorMessage('Password should contain at least one lowercase character.');
    } else if (!numberRegex.test(password)) {
      setErrorMessage('Password should contain at least one number.');
    } else if (!specialCharRegex.test(password)) {
      setErrorMessage('Password should contain at least one special character.');
    } else if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
    } else {
      setIsValid(true);
      setErrorMessage('');
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validatePassword();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input type="password" id="confirmPassword" value={confirmPassword} onChange={handleConfirmPasswordChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
      {isValid && <p>Password is valid!</p>}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default PasswordEntry;