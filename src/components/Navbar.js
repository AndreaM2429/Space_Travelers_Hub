import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import navbarlogo from '../Assets/planet_logo_navbar.png';

function Navbar() {
  return (
    <>
      <div className={styles.nav_container}>
        <div className={styles.tittle_page}>
          <img src={navbarlogo} alt="logo" />
          <Link to="/"><h1>Space Travelers&apos; Hub</h1></Link>
        </div>
        <ul className={styles.navbar_links}>
          <li>
            <Link to="/">Rokets</Link>
          </li>
          <li>
            <Link to="/Missions">Mission</Link>
          </li>
          <li className={styles.separator}>&#124;</li>
          <li>
            <Link to="/Myprofile">My Profile</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
