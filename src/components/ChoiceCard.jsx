
import './ChoiceCard.css'; // Make sure to create a corresponding CSS file for styling

const ChoiceCard = ({ choice, playerName, playerCity, record }) => {
  return (
    <div className="choice-card">
      <h2>{choice}</h2>
      <div className="player-info">
        <p>{playerName || 'Player Name'}</p>
        <p>{playerCity || 'City'}</p>
      </div>
      <div className="record">
        <p>Wins: {record.wins}</p>
        <p>Losses: {record.losses}</p>
        <p>Ties: {record.ties}</p>
      </div>
    </div>
  );
};

export default ChoiceCard;
