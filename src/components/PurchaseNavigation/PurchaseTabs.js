import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "../../styles/PurchaseRequests.css";
import Pending from "./Pending";
import Executing from "./Executing";
import Executed from "./Executed";
import Completed from "./Completed";

const PurchaseNav = () => {
  return (
    <Tabs>
      <TabList className="purchase-tabs">
        <Tab
          defaultChecked={true}
          selectedClassName="tab-selected"
          className="purchase-tab"
        >
          Pending
        </Tab>
        <Tab selectedClassName="tab-selected" className="purchase-tab">
          Executing
        </Tab>
        <Tab selectedClassName="tab-selected" className="purchase-tab">
          Executed
        </Tab>
        <Tab selectedClassName="tab-selected" className="purchase-tab">
          Completed
        </Tab>
      </TabList>
      <TabPanel>
        <Pending />
      </TabPanel>
      <TabPanel>
        <Executing />
      </TabPanel>
      <TabPanel>
        <Executed />
      </TabPanel>
      <TabPanel>
        <Completed />
      </TabPanel>
    </Tabs>
  );
};

export default PurchaseNav;
