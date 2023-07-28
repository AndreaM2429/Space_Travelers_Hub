import { useSelector } from 'react-redux';

function RocketReserve() {
  const { arrRock } = useSelector((state) => state.rockets);
  return (
    <>
      <h2>My Rockets</h2>
      <ul>
        {arrRock.filter((rockets) => rockets.reserve).map((rocket) => (
          <li title={rocket.name} key={rocket.id}><span>{rocket.name}</span></li>
        ))}
      </ul>
    </>
  );
}

export default RocketReserve;
