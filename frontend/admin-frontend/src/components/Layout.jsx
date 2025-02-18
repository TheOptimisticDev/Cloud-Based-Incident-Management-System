import { Outlet, Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Make sure you have a logo file in src/assets
import "../styles/global.css"; // Import global styles

const Layout = () => {
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
          <Link to="/profile" className="profile-link">Profile</Link>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
