import "../styles/Header.css";

export default function Header() {
  return (
    <header>
      <div className="headerTitle">
        <h1>Memory Matcher </h1>
        <p><strong>Objective:</strong> Gain 1 point for clicking an image. But if you click the same image twice, you lose!</p>
      </div>
      <div className="scoreCounter">
        <h2>Score:</h2>
        <span>0 / 12</span>
      </div>
      <div className="bestScore">
        <h2>Best:</h2>
        <span>0</span>
      </div>
    </header>
  );
}