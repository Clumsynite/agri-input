import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import "./styles/App.css";

import PurchaseManagement from "./components/Navigation/PurchaseManagement";
import InputMaster from "./components/Navigation/InputMaster";
import SupplierMaster from "./components/Navigation/SupplierMaster";
import PurchaseRequests from "./components/Navigation/PurchaseRequests";
import TaxMaster from "./components/Navigation/TaxMaster";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <div className="content">
          <Switch>
            <Route exact path="/" component={PurchaseManagement} />
            <Route exact path="/input" component={InputMaster} />
            <Route exact path="/supplier" component={SupplierMaster} />
            <Route exact path="/purchase-req" component={PurchaseRequests} />
            <Route exact path="/tax" component={TaxMaster} />
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
