
import ChoiceCard from './ChoiceCard.jsx';
import './GameChoices.css'; // Make sure to create a corresponding CSS file for styling
import paperImage from '../assets/paper.png'; 
import rockImage from '../assets/rock.png'; 
import scissorsImage from '../assets/scissors.png'; 
const GameChoices = ({ playerName, playerCity }) => {
  // Define gameRecords inside the component
  const gameRecords = {
    rock: { wins: 0, losses: 0, ties: 0 },
    paper: { wins: 0, losses: 0, ties: 0 },
    scissors: { wins: 0, losses: 0, ties: 0 }
  };

  return (
    <div className="game-choices-container">
      <ChoiceCard 
        choice={rockImage} 
        playerName={playerName} 
        playerCity={playerCity} 
        record={gameRecords.rock} 
      />
      <ChoiceCard 
        choice= {paperImage} 
        playerName={playerName} 
        playerCity={playerCity} 
        record={gameRecords.paper} 
      />
      <ChoiceCard 
        choice={scissorsImage} 
        playerName={playerName} 
        playerCity={playerCity} 
        record={gameRecords.scissors} 
      />
    </div>
  );
};

export default GameChoices;
