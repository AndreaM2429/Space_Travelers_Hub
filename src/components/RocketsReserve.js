import { useSelector } from 'react-redux';

function RocketReserve() {
  const { arrRock } = useSelector((state) => state.rockets);
  return (
    <>
      <h2>My Rockets</h2>
      <ul>
        {arrRock.map((rocket) => (
          (rocket.reserve)
            ? (
              <li key={rocket.id}><span>{rocket.name}</span></li>
            ) : null
        ))}
      </ul>
    </>
  );
}

export default RocketReserve;
