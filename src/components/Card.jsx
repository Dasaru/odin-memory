import '../styles/Card.css';

export default function Card({ imgSrc = "https://placehold.co/300x300", name = "Card Name" }) {
  return (
    <div className="card">
      <img src={imgSrc} width="240" alt="card image" draggable="false" />
      <div>{name}</div>
    </div>
  );
}