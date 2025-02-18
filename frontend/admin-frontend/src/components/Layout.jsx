import { Outlet, Link } from "react-router-dom";
import PropTypes from 'prop-types'; // Import PropTypes
import logo from "../assets/logo.png"; // Make sure you have a logo file in src/assets
import "../styles/global.css"; // Import global styles

const Layout = ({ user, handleSignOut }) => {
  return (
    <div className="layout">
      {/* Sidebar Navigation */}
      <nav>
        <div className="logo-container">
          <img src={logo} alt="Company Logo" className="logo" />
        </div>
        <ul className="nav-links">
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/users">Officers</Link></li>
          <li><Link to="/incidents">Incidents</Link></li>
          <li><Link to="/reports">Reports</Link></li>
          <li><Link to="/analytics">Analytics</Link></li>
          <li><Link to="/settings">Settings</Link></li>
          <li><Link to="/support">Support</Link></li>
        </ul>
        <div className="profile-section">
          {/* Profile Section with User Login/SignOut Logic */}
          {user ? (
            <>
              <span className="profile-name">{user.name}</span>
              <button onClick={handleSignOut}>Sign Out</button>
            </>
          ) : (
            <Link to="/login" className="profile-link">Sign In</Link>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>
    </div>
  );
};

// PropTypes validation
Layout.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired, // user.name should be a string and required
  }),
  handleSignOut: PropTypes.func.isRequired, // handleSignOut should be a function and required
};

export default Layout;
