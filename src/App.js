import React from 'react';
import { BrowserRouter as Router,  Route, Routes  } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/home.component';
import Nav from './components/nav.component';
import Login from './components/login.component';
import Register from './components/register.component';

function App() {
  return (
    <Router>
    <div className="App">
         <Nav/>
             <div className="auth-wrapper">
                <div className="auth-inner">
                  <Routes>
                     <Route exact path="/" component={Home} />
                     <Route exact path="/login" component={Login} />
                     <Route exact path="/register" component={Register} />
                  </Routes>
         <Home/>
            </div>
         </div>
    </div>
    </Router>
  );
}

export default App;

