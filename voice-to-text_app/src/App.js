import logo from './logo.svg';
import './App.css';
import Dictaphone from './Dictaphone';
import Voicetext from './Voicetext';
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState('light');
  return (
    <div className={`${theme} App`}>
      <Dictaphone setTheme={setTheme} theme={theme}  />
      {/* <Voicetext /> */}
    </div>
  );
}

export default App;
