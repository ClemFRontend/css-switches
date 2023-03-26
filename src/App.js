import './App.css';
import Switch1 from './components/Switch1/Switch1';
import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher';

function App() {
  return (
    <div className="app">
      <h1>Switches</h1>
      <div>
        <p>Theme switch</p>
        <ThemeSwitcher />
      </div>
      <div>
        <p>Switch1</p>
        <Switch1 
          name='theme'
          handleChange={() => {}} />
      </div>
    </div>
  );
}

export default App;
