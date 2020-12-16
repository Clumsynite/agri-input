import { NavLink } from "react-router-dom";
import "../styles/Sidebar.css";

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <div className="sidebar-content">
        <NavLink
          to="/"
          exact
          className="route-link"
          activeClassName="router-link-active"
          style={{
            fontWeight: 700,
            paddingBottom: 20,
            paddingTop: 5,
            fontSize: 18,
          }}
        >
          Agri-Purchase Management
        </NavLink>
        <NavLink
          to="/input"
          activeClassName="router-link-active"
          className="route-link"
        >
          Agri-Input Master Management
        </NavLink>
        <NavLink
          to="/supplier"
          activeClassName="router-link-active"
          className="route-link"
        >
          Supplier Master Management
        </NavLink>
        <NavLink
          to="/purchase"
          activeClassName="router-link-active"
          className="route-link"
        >
          Agri-Input Purchase Requests
        </NavLink>
        <NavLink
          to="/tax"
          activeClassName="router-link-active"
          className="route-link router-link-bottom"
        >
          Tax Master Maintenance
        </NavLink>
      </div>
    </nav>
  );
};
export default Sidebar;
