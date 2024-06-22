// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState, useSyncExternalStore } from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


// let name = "<b>Harry</b>"
function App() {
  const [Mode, setMode] = useState("light");  //wheather dark mode in enable or not 
  const [alert, setalert] = useState(null);  //wheather dark mode in enable or not 
  
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }
  
  const toggleMode=() => {
    if (Mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "#26244d";
      showalert("Dark mode has been enabled", "success");
      // document.title = "TextUtils-Dark Mode";
      
      // fanki funki logic 
      // setInterval(() => {
      //   document.title = "TextUtils is Amazing";
      // }, 1000);
      // setInterval(() => {
      //   document.title = "Install TextUtils Now";
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      showalert("Light mode has been enabled", "success ")
      // document.title = "TextUtils-Light Mode"
    }
  }


  return (
    <Router>
        <Navbar title = "TextUtils" aboutText = "About TextUtils" mode = {Mode} toggleMode = {toggleMode} /> 
        <Alert alert = {alert}/>
        <div className="container my-3">
          <Routes>
            <Route path="about" element={<About mode = {Mode} />}/>
              {/* <About/> */}
            {/* </Route> */}
            <Route path="/"
              element={<TextForm heading = "Try TextUtils - Wordcounter, Charactercounter, (Upper to Lower)case, (Lower to Upper)case"
                  showalert = {showalert} mode = {Mode} toggleMode = {toggleMode}/>}
            />
            {/* </Route> */}
          </Routes>
          {/* <TextForm heading = "Enter The Text To Analysis" showalert = {showalert} 
                mode = {Mode} toggleMode = {toggleMode}/>
          <About/>  */}
        </div>
    </Router>
  );  
}

export default App;

{/* 
  dummy model 
  <BrowserRouter>
      <Routes>
        <Route></Route>
      <Home Mode= {Mode} toggleMode={toggleMode} alert={alert} showalert={showalert}/>
      </Routes>
      </BrowserRouter> */}