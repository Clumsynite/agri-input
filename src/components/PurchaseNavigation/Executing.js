import "../../styles/Executing.css";

const Executing = () => {
  return (
    <div className="executing">
      <DummyButtonGroup />

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
