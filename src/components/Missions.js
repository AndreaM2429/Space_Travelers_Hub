import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchMissions } from '../Redux/missions/MissionsSlice';

function Missions({ missions }) {
  const dispatch = useDispatch();
  // const missions = useSelector(missions);

  useEffect(() => {
    if (missions === 'idle') {
      dispatch(fetchMissions());
    }
  }, [dispatch]);

  return (
    <>
      <div>
        <table>
          <tr>
            <td>Mission</td>
            <td>Description</td>
            <td>Status</td>
            <td> </td>
          </tr>
          <tr>
            <td>Mission</td>
            <td>Description</td>
            <td>
              <button type="button">NOT A MEMBER</button>
              <button type="button">Active Member</button>
            </td>
            <td>
              <button type="button">Join Mission</button>
              <button type="button">Leave Missionr</button>
            </td>
          </tr>
        </table>
      </div>
    </>
  );
}

Missions.propTypes = {
  missions: PropTypes.shape({
    mission_id: PropTypes.string.isRequired,
    mission_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Missions;
