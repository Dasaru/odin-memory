import Card from './Card';
import '../styles/CardArea.css';

export default function CardArea({ cardList, cardClicked }) {
  return (
    <div className="cardArea">
      {cardList.map(card => (
        <Card key={card.name} imgSrc={card.img} name={card.name} cardClicked={cardClicked} />
      ))}
    </div>
  );
}