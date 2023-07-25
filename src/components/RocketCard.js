import PropTypes from 'prop-types';

function RocketCard({ ArrRocket }) {
  return (
    <li>
      <img src={ArrRocket.image} alt={ArrRocket.id} />
      <div>
        <h2>{ArrRocket.name}</h2>
        <span>{ArrRocket.description}</span>
        <button type="button">Reserve Rocket</button>
      </div>
    </li>
  );
}

RocketCard.propTypes = {
  ArrRocket: PropTypes.shape({
    image: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default RocketCard;
