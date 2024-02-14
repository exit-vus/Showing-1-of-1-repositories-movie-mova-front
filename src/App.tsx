import React, {useState} from 'react';
import { Routes, Route, BrowserRouter as Router, Link } from 'react-router-dom';
import AuthPage from './auth/page';
import MyMoviePage from './myMovie/page';
function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태를 관리합니다.

  return (
    <div className="App">
      <header className="App-header">    
        공통  메뉴 
      </header>
      <main>
        <Router>
          <Routes>
            <Route path="/login" element={<AuthPage/>}/>
            <Route path="/myMovie" element={<MyMoviePage/>}/>
          </Routes>
        </Router>
       
      </main>
      
    </div>
  );
}

export default App;
