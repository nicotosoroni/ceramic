import { useState } from 'react';
import cupLogo from './assets/cup.png';
// import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        {/* <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a> */}
        <a
          href="https://www.instagram.com/lucilagarat.ceramica/"
          target="_blank"
        >
          <img src={cupLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Luli Pottery</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Purchase amount {count}
        </button>
      </div>
      <p className="read-the-docs">The ceramic way ☕</p>
    </>
  );
}

export default App;
