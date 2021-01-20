import React, {useState} from 'react';
import './App.css';
import Auth from "./components/Auth";

function App() {
    // const [userRegistered, setUserRegistered] = useState(true);
  return (
    <div className="App">
      <div>
          <Auth/>
      </div>
    </div>
  );
}

export default App;
