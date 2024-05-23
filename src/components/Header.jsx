import "../styles/Header.css";

export default function Header({ score, bestScore }) {
  return (
    <header>
      <div className="headerTitle">
        <h1>Memory Matcher </h1>
        <p><strong>Objective:</strong> Gain 1 point for clicking an image. But if you click the same image twice, you lose!</p>
      </div>
      <div className="scoreCounter">
        <h2>Score:</h2>
        <span>{score} / 12</span>
      </div>
      <div className="bestScore">
        <h2>Best:&nbsp;</h2>
        <span>{bestScore}</span>
      </div>
    </header>
  );
}