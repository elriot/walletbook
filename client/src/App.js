// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { HeaderPage } from "./page/HeaderPage";
import { MainPage } from "./page/MainPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SignupPage } from './page/SignupPage';


function App() {
  return (
    <div className="App">             
    <Router>
      <div>
        <HeaderPage />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/signup" element={<SignupPage />} />
          {/* <Route path="/contact" element={<ContactPage />} /> */}
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
