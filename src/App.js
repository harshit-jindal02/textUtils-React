import React, {useState} from 'react'
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState("light");
  
  const [alert, setAlert] = useState(null);

  function showAlert(message, type) {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(()=> {
      setAlert(null);
    },2000);
  }

  function toggleMode() {
    if(mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#2f2b3a";
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
      <Router>
          <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
          <Alert alert={alert} />
        <div className="container my-3" showAlert={showAlert} >
          <Routes>
              <Route exact path="/about" element={ <About/> } />
              <Route exact path="/" element={ < TextForm showAlert={showAlert} heading="Enter your text to analyze below" mode={mode} /> } />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
