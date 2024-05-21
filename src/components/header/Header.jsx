import ScoreCounter from "./ScoreCounter";
import BestCounter from "./BestCounter";

export default function Header() {
  return (
    <>
      <h1>Memory Matcher </h1>
      <p>Objective: Gain 1 point for clicking an image. But if you click the same image twice, you lose!</p>
      <BestCounter />
      <ScoreCounter />
    </>
  );
}