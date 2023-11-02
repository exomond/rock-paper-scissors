
import ChoiceCard from './ChoiceCard.jsx';
import './GamePlay.css'; // Make sure to create a corresponding CSS file for styling

const GameChoices = () => {
  // Here you could have a state to track each choice's record
  // For simplicity, we'll use static values
  const gameRecords = {
    rock: { wins: 0, losses: 0, ties: 0 },
    paper: { wins: 0, losses: 0, ties: 0 },
    scissors: { wins: 0, losses: 0, ties: 0 }
  };

  return (
    <div className="game-choices-container">
      <ChoiceCard 
        choice="Rock" 
        playerName="Your Name" 
        playerCity="Your City" 
        record={gameRecords.rock} 
      />
      <ChoiceCard 
        choice="Paper" 
        playerName="Your Name" 
        playerCity="Your City" 
        record={gameRecords.paper} 
      />
      <ChoiceCard 
        choice="Scissors" 
        playerName="Your Name" 
        playerCity="Your City" 
        record={gameRecords.scissors} 
      />
    </div>
  );
};

export default GameChoices;
