import { useEffect, useState } from "react";
import api from "../api/api";

const Dashboard = () => {
  const [incidents, setIncidents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchIncidents = async () => {
      try {
        const response = await api.get("/incidents"); // Calls backend route `/api/incidents`
        setIncidents(response.data);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch incidents. Please try again later.");
        setLoading(false);
        console.error("Error fetching incidents:", error);
      }
    };

    fetchIncidents();
  }, []);

  return (
    <div className="dashboard-container">
      {/* Welcoming Note */}
      <header className="dashboard-header">
        <h1>Welcome to the Wealth Protection Services Admin Dashboard</h1>
        <p className="welcome-message">
          Hello, Admin! Stay on top of all security incidents and manage your responses swiftly and efficiently.
          Here you will find critical updates and actions to ensure the safety of your properties and assets.
        </p>
      </header>

      {/* Dashboard Overview */}
      <section className="dashboard-overview">
        <h3>Incident Overview</h3>
        <p>Below are the latest incidents detected by our security systems:</p>

        {/* Loading, Error, and Incident List */}
        {loading ? (
          <p>Loading incidents...</p>
        ) : error ? (
          <p style={{ color: "red" }}>{error}</p>
        ) : (
          <ul className="incident-list">
            {incidents.map((incident) => (
              <li key={incident.id} className="incident-item">
                <strong>Incident {incident.id}:</strong> {incident.description}
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Additional Sections */}
      <section className="notifications">
        <h3>Notifications</h3>
        <p>No new notifications at this time. Please stay alert for any updates.</p>
      </section>

      <section className="pending-actions">
        <h3>Pending Actions</h3>
        <p>Ensure all open incidents are reviewed and dispatched accordingly.</p>
      </section>
    </div>
  );
};

export default Dashboard;
