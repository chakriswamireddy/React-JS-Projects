import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage';
import wave from './wave.svg'

function App() {
  return (
    <div className="App">
      <Homepage />
      <img src={wave} className='wave-img' alt="" />
    </div>
  );
}

export default App;
