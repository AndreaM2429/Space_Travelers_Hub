import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchMissions, joinMission } from '../Redux/missions/MissionsSlice';
import styles from './Missions.module.css';

function Missions() {
  const { missions } = useSelector((state) => state.missions);

  const dispatch = useDispatch();
  useEffect(() => {
    if (missions.length === 0) {
      dispatch(fetchMissions());
    }
  }, [dispatch]);

  const handleJoinMission = (id) => {
    console.log(id);
    dispatch(joinMission(id));
  };

  return (
    <>
      <tbody>
        {missions.map((mission) => (
          <tr key={mission.mission_id} className={styles.table_row}>
            <td className={styles.table_row_mission_name}>{mission.mission_name}</td>
            <td className={styles.table_row_mission_description}>{mission.description}</td>
            <td>
              <button type="button">NOT A MEMBER</button>
            </td>
            <td>
              <button onClick={() => handleJoinMission(mission.mission_id)} type="button">
                Join Mission
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </>
  );
}

export default Missions;
