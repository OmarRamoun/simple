import logo from './logo.svg';
import './App.css';
import './buttons.css';
import ThemeChooser from './ThemeChooser';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ThemeChooser />
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello 👋</h1>
        <h2>My name is&nbsp;
          <a
            className="Ramoun-link"
            href="https://ramoun.me"
            target="_blank"
            rel="noreferrer"
          >
            Ramoun
          </a>
        </h2>
        <p>
          I am a software engineer and the creator of the open source JavaScript framework&nbsp;
          <a
            href="https://remixjs.org"
            target="_blank"
            rel="noreferrer"
          >
            remix.js
          </a>.
          Most of my work is open source and publicly available on&nbsp;
          <a
            href="https://github.com/MrRamoun"
            target="_blank"
            rel="noreferrer"
            >
              GitHub
          </a>.
        </p>
      </header>
    </div>
  );
}

export default App;
