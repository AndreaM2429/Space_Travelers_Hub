// import styles from './MyProfile.module.css';
import JoinedMissionsList from './JoinedMissions';
import RocketReserve from './RocketsReserve';
import styles from './RocketsReserve.module.css';

function MyProfile() {
  return (
    <section className={styles.profile_container}>
      <div className={styles.title_reserve}>
        <JoinedMissionsList />
      </div>
      <div className={styles.title_reserve}>
        <RocketReserve />
      </div>
    </section>
  );
}

export default MyProfile;
