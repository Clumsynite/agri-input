import OrderList from "../Templates/OrderList";
import "../../styles/Executing.css";
import orders from "../../orders";

const Executing = () => {
  return (
    <div className="executing">
      <DummyButtonGroup />
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
