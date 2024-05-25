import '../styles/Card.css';

export default function Card({ imgSrc = "https://placehold.co/300x300", name = "Card Name", cardClicked }) {
  return (
    <div className="card" onClick={() => cardClicked(name)}>
      <img src={imgSrc} width="230" alt="card image" draggable="false" />
      <div>{name}</div>
    </div>
  );
}