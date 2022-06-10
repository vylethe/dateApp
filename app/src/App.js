import Login from "./pages/Login";
import Container from "./container/Container";
import React from "react"
import { BrowserRouter as Router, Routes } from "react-router-dom"
import { Route } from "react-router"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        {/* <Route path="/register" component={Register} /> */}
        <Route path="/" element={<Container/>} />
      </Routes>
      {/* <CreatePost /> */}
   </Router>
  );
}

export default App;
