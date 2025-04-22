import { useState } from "react";
// import pottery1 from './assets/pottery1.png';
// import pottery2 from './assets/pottery2.png';
// import viteLogo from '/vite.svg';
import Card from "./components/card/card";
import FetchCSVData from "./FetchCSVData";
import { Product } from "./models/product.model ";
import cupLogo from '../public/assets/cup.png'
import "./App.css";
import Image from "next/image";

function App() {
  const [count, setCount] = useState(0);
  const data: Product[] = FetchCSVData();
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
          <Image src={cupLogo} width={50} height={50} className="react logo" alt="React logo" />
          {/* <img src={cupLogo.src} className="logo react" alt="React logo" /> */}
        </a>
      </div>
      Test {process.env.NEXT_PUBLIC_TEST}
      <h1>Luli Pottery</h1>
      <div className="grid">
        {data ? (
          data.map((e) => (
            <Card key={e.id} title={e.title} photo={e.imageUrl} />
          ))
        ) : (
          <div></div>
        )}
      </div>
      <div className="purchase">
        <button onClick={() => setCount((count) => count + 1)}>
          Purchase amount {count}
        </button>
      </div>
      <p className="read-the-docs">The ceramic way ☕</p>
    </>
  );
}

export default App;
