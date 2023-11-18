import Piechart from './components/utilities/Piechart'
import './App.css';
import Dashboard from './components/Dashboard';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import {  Route, BrowserRouter, Routes } from 'react-router-dom';
import Footer from './components/Footer';




function App() {
  return (

    <div className="flex flex-col">
      
      <Navbar />
      <Routes>

        <Route path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        
      <Footer />

    </div>

  );
}

export default App;
