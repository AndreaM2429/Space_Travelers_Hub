// import styles from './MyProfile.module.css';
import RocketReserve from './RocketsReserve';
import styles from './RocketsReserve.module.css';

function MyProfile() {
  return (
    <section className={styles.profile_container}>
      <div>
        <span>Space for missions</span>
      </div>
      <div className={styles.title_reserve}>
        <RocketReserve />
      </div>
    </section>
  );
}

export default MyProfile;
