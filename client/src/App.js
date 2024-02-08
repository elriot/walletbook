// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HeaderPage } from "./page/HeaderPage";
import { MainPage } from "./page/MainPage";
import { SignupPage } from './page/SignupPage';
import { LoginPage } from './page/LoginPage';
import { BookListPage } from './page/BookListPage';


function App() {
  return (
    <div className="App">             
    <Router>
      <div>
        <HeaderPage />
        <div id="page-container">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/mybook" element={<BookListPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </div>
      </div>
    </Router>
    </div>
  );
}

export default App;
