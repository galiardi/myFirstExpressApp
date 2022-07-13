import React from 'react';
import './App.css';

function App() {

  const post = () => {
    fetch('http://0.0.0.0:7000', {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        a: 10,
        b: 20,
      }),
    }).then((response) => {
      return response.json();
    }).then((data) => console.log(data))
  };

  return (
    <div>
      <h1>home</h1>
      <button onClick={post}>post</button>
    </div>
  );
}

export default App;
