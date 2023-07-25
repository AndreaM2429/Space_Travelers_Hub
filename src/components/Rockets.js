import { useSelector } from 'react-redux';
import RocketCard from './RocketCard';
import styles from './Rockets.module.css';

function Rockets() {
  const { arrRock } = useSelector((state) => state.rockets);
  return (
    <section className={styles.rocket_container}>
      <ul>
        {arrRock.map((rocket) => (
          <RocketCard key={rocket.id} ArrRocket={rocket} />
        ))}
      </ul>
    </section>
  );
}

export default Rockets;
