// import logo from './logo.svg';
// import { useState } from 'react';
// import About from './About';
import './App.css';
// import Navbar from './components/Navbar';
// import Textform from './components/Textform';
import Aboutt from './components/Aboutt';
import Services from "./components/Services";
// import Privacy from "./components/Privacy";
// import React, { useState } from 'react';
// import Alert from './components/Alert';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Privacy from './components/Privacy';
import ContactForm from './components/ContactForm';
// import Footer from './components/Footer/Footer.jsx';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
//  // Link
// } from "react-router-dom";

function App() {
  //   const [mode, setMode] = useState('light');
  //   const [alert, setAlert] = useState(null);

  //   const showAlert = (message, type)=>{
  //     setAlert({
  //       msg: message,
  //       type: type
  //     })
  //   }
  //   const toggleMode = ()=>{
  //     if(mode === 'light'){
  //       setMode('dark');
  //       document.body.style.background = 'grey'
  //       showAlert("Dark Mode has been enabled", "success");
  //     }
  //     else{
  //       setMode('light');
  //       document.body.style.background = 'white'
  //       showAlert("Light Mode has been enabled", "success");
  //     }
  //   }
  return (
    <>
      {/* <Router> */}
      {/* <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/> */}
      {/* <Alert Alert={alert}/> */}
      {/* <div className="container my-3">
      <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/"> */}
      {/* <Textform showAlert={showAlert} heading="Enter the text to analyse below" mode={mode}/> */}
      {/* </Route>
      </Switch>
      </div>
      </Router>  */}
      {/* <About/> */}
      <div className='App'>
        
          <BrowserRouter>
          <Footer />
          {/* <Services/> */}
          <Routes>
            {/* <Route exact path="/" element={<Footer />} /> */}
            <Route exact path="/about" element={<Aboutt />} />
            <Route exact path="/privacy" element={<Privacy />} />
            <Route exact path="/services" element={<Services />} />
            <Route exact path="/contact us" element={<ContactForm />} />
          </Routes>
          
          
          {/* <Aboutt/> */}


          </BrowserRouter>
        
      </div>
     


    </>
  );
}

export default App;
