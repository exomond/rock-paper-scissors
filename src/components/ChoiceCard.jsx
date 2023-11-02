
import './ChoiceCard.css';


const ChoiceCard = ({ choice, playerName, playerCity, record }) => {
  return (
    <div className="choice-card">
      <div className="choice-image">
        <img src={choice} alt="Rock" />
      </div>
      <div className="choice-name">{playerName}</div>
      <div className="choice-city">{playerCity}</div>
      <div className="game-record">
        <span className="win">Wins: {record.wins}</span> |
        <span className="lose">Losses: {record.losses}</span> |
        <span className="tie">Ties: {record.ties}</span>
      </div>
    </div>
  );
};

export default ChoiceCard;
