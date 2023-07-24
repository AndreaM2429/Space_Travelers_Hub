import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import navbarlogo from '../Assets/planet_logo_navbar.png';

function Navbar() {
  return (
    <>
      <div>
        <ul className={styles.navbar_links}>
          <img src={navbarlogo} alt="logo" />
          <li>
            <Link to="/">Space Travelers Hub</Link>
          </li>
          <li>
            <Link to="/Rokets">Rokets</Link>
          </li>
          <li>
            <Link to="/Missions">Mission</Link>
          </li>
          <li>
            <Link to="/Myprofile">My Profile</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
