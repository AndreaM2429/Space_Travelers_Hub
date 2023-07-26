import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchMissions, joinMission, cancelMission } from '../Redux/missions/MissionsSlice';
import styles from './Missions.module.css';

function Missions() {
  const { missions } = useSelector((state) => state.missions);

  const dispatch = useDispatch();
  useEffect(() => {
    if (missions.length === 0) {
      dispatch(fetchMissions());
    }
  }, [dispatch, missions.length]);

  const handleJoinMission = (id) => {
    dispatch(joinMission(id));
  };

  const handleCancelMission = (id) => {
    dispatch(cancelMission(id));
  };

  return (
    <>
      <tbody>
        {missions.map((mission) => (
          <tr key={mission.mission_id} className={styles.table_row}>
            <td className={styles.table_row_mission_name}>{mission.mission_name}</td>
            <td className={styles.table_row_mission_description}>{mission.description}</td>
            <td>
              <button className={mission.reserve ? styles.button_not_member_true : styles.button_not_member_false} type="button">NOT A MEMBER</button>
              <button className={mission.reserve ? styles.button_active_member_true : styles.button_active_member_false} type="button">Active Member</button>
            </td>
            <td>
              <button className={mission.reserve ? styles.button_join_mission_true : styles.button_join_mission} onClick={() => handleJoinMission(mission.mission_id)} type="button">
                Join Mission
              </button>
              <button className={mission.reserve ? styles.button_leave_mission : styles.button_leave_mission_false} onClick={() => handleCancelMission(mission.mission_id)} type="button">
                Leave Mission
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </>
  );
}

export default Missions;
