import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { bookRocket, cancelRocket } from '../Redux/rockets/RocketsSlice';
import styles from './Rockets.module.css';

function RocketCard({ ArrRocket }) {
  const dispatch = useDispatch();
  return (
    <li>
      <img src={ArrRocket.image} alt={ArrRocket.id} />
      <div>
        <h2>{ArrRocket.name}</h2>
        <span>
          {
            (ArrRocket.reserve) ? <span className={styles.reserve_span}>Reserved</span> : null
          }
          {ArrRocket.description}
        </span>
        {
          (ArrRocket.reserve) ? <button className={styles.btn_cancel} type="button" onClick={() => dispatch(cancelRocket(ArrRocket.id))}>Cancel Reservation</button> : <button className={styles.btn_book} type="button" onClick={() => dispatch(bookRocket(ArrRocket.id))}>Reserve Rocket</button>
        }
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
    reserve: PropTypes.bool,
  }).isRequired,
};

export default RocketCard;
