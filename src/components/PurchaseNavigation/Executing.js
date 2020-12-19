import OrderList from "../Templates/OrderList";
import "../../styles/Executing.css";
import orders from "../../orders";

const Executing = () => {
  return (
    <div className="executing">
      <DummyButtonGroup />
      <div style={{ borderBottom: "1px solid grey", marginTop: "25px" }}>
        <div className="orders-heading">
          <div>Executing Agri-Input Orders</div>
          <div>Batched By</div>
        </div>
      </div>
      <OrderList orders={orders} />
    </div>
  );
};

const DummyButtonGroup = () => {
  return (
    <div className="dummy-button-group">
      <button className="dummy-button">Undo Batch</button>
      <button className="dummy-button">Assign Suppliers</button>
      <button className="dummy-button dummy-button-disabled">
        Generate PO
      </button>
    </div>
  );
};

export default Executing;
