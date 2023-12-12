import logo from './logo.svg';
import './App.css';
import PasswordEntry from './PasswordEntry';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <PasswordEntry />
      </header>
    </div>
  );
}

export default App;
