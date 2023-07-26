import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import navbarlogo from '../Assets/planet_logo_navbar.png';

function Navbar() {
  const currentLink = ({ isActive }) => {
    if (isActive) return styles.active;
    return null;
  };
  return (
    <>
      <div className={styles.nav_container}>
        <div className={styles.tittle_page}>
          <img src={navbarlogo} alt="logo" />
          <NavLink to="/"><h1>Space Travelers&apos; Hub</h1></NavLink>
        </div>
        <ul className={styles.navbar_links}>
          <li>
            <NavLink className={currentLink} to="/">Rokets</NavLink>
          </li>
          <li>
            <NavLink className={currentLink} to="/Missions">Mission</NavLink>
          </li>
          <li className={styles.separator}>&#124;</li>
          <li>
            <NavLink className={currentLink} to="/Myprofile">My Profile</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
