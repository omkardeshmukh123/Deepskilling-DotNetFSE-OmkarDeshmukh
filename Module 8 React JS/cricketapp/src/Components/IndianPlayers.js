// Odd Players
export function OddPlayers({ IndianTeam }) {
  const [first, , third, , fifth] = IndianTeam;

  return (
    <ul>
      <li>First : {first}</li>
      <li>Third : {third}</li>
      <li>Fifth : {fifth}</li>
    </ul>
  );
}

// Even Players
export function EvenPlayers({ IndianTeam }) {
  const [, second, , fourth, , sixth] = IndianTeam;

  return (
    <ul>
      <li>Second : {second}</li>
      <li>Fourth : {fourth}</li>
      <li>Sixth : {sixth}</li>
    </ul>
  );
}

// Arrays
const T20Players = [
  "First Player",
  "Second Player",
  "Third Player"
];

const RanjiPlayers = [
  "Fourth Player",
  "Fifth Player",
  "Sixth Player"
];

// Merge Arrays
export const IndianPlayers = [
  ...T20Players,
  ...RanjiPlayers
];

// Display Merged Players
export function ListOfIndianPlayers({ IndianPlayers }) {
  return (
    <ul>
      {IndianPlayers.map((player, index) => (
        <li key={index}>Mr. {player}</li>
      ))}
    </ul>
  );
}