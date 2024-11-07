// src/pages/Home.tsx
import './Home.css';

export default function Home() {
  return (
    <div className="home">
      <h1 className="home-title">Key Simulator</h1>
      <div className="home-buttons">
        <button className="home-button">Instruccions</button>
        <button className="home-button">Play</button>
      </div>
    </div>
  );
}

