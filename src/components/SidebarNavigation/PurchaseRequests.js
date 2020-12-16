import PurchaseTabs from "../PurchaseNavigation/PurchaseTabs";
import "../../styles/PurchaseRequests.css";

const PurchaseRequests = () => {
  return (
    <div className="purchase-content">
      <div className="content-heading"> Agri-Input Purchase Requests</div>
      <PurchaseTabs />
    </div>
  );
};

export default PurchaseRequests;
