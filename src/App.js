import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/Login";
import Discover from "./pages/Discover";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper"
import newUser from './pages/newUser';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/discover" component={Discover} />
          <Route exact path="/createUser" component={newUser} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
