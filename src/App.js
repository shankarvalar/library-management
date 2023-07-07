import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,


} from "react-router-dom";
import Login from "./login";
import Signup from "./signup";
import Home from "./home";


function App(auth) {

  return (
    <>

      <Router>


        <div className="container">
          <Routes>


            <Route path="/library-management" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/signup" element={<Signup />} />






          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

