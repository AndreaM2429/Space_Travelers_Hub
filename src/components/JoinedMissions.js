import { useSelector } from 'react-redux';

function JoinedMissionsList() {
  const { missions } = useSelector((state) => state.missions);

  return (
    <>
      <h2>My Missions</h2>
      <ul>
        {missions.filter((mission) => mission.reserve).map((mission) => (
          <li key={mission.mission_id}>
            <span>{mission.mission_name}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default JoinedMissionsList;
