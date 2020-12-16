import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./styles/App.css";

import Sidebar from "./components/Sidebar";
import PurchaseManagement from "./components/SidebarNavigation/PurchaseManagement";
import InputMaster from "./components/SidebarNavigation/InputMaster";
import SupplierMaster from "./components/SidebarNavigation/SupplierMaster";
import PurchaseRequests from "./components/SidebarNavigation/PurchaseRequests";
import TaxMaster from "./components/SidebarNavigation/TaxMaster";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <div className="content">
          {" "}
          <Switch>
            <Route exact path="/" component={PurchaseManagement} />
            <Route exact path="/input" component={InputMaster} />
            <Route exact path="/supplier" component={SupplierMaster} />
            <Route exact path="/purchase" component={PurchaseRequests} />
            <Route exact path="/tax" component={TaxMaster} />
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
