import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Community from "./Community";
import Post from "./Post";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Community />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </Router>
  );
}

export default App;
