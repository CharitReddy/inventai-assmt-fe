import "./App.css";
import { useState } from "react";
import Home from "pages/Home";
import { APIs } from "services/apiCalls";

function App() {
  return (
    <div className='App'>
      <Home />
    </div>
  );
}

export default App;
