import './App.css';
import Calculator from './Calculator';
import { ThemeContext } from './ThemeContext';

export default function App() {
  return (
    <div className="App">
      <Calculator />
      <ThemeContext />
    </div>
  );
}


