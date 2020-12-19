import { InlineIcon } from "@iconify/react";
import popOutLine from "@iconify-icons/clarity/pop-out-line";

import "../../styles/Executing.css";

const ProductTable = (props) => {
  const { products } = props;

  const productRows = products.map((product) => {
    const { key, category, image, description, quantity } = product;
    return (
      <tr key={key}>
        <td style={{ padding: "0 15px" }}>{`${key}.`}</td>
        <td>{category}</td>
        <td>
          <img src={image} width={20} height={20} alt="Product" />
        </td>
        <td>{description}</td>
        <td>{quantity}</td>
        <td style={{ border: "none", backgroundColor: "white" }}>
          <span className="modal-popup">
            <InlineIcon icon={popOutLine} width={30} height={30} />
          </span>
        </td>
      </tr>
    );
  });
  return (
    <table className="products-table">
      <thead className="products-table-head">
        <tr>
          <th></th>
          <th>Agri-Input Category</th>
          <th>Product Image</th>
          <th>Product Description</th>
          <th>Order Quantity</th>
          <th style={{ border: "none", backgroundColor: "white" }}></th>
        </tr>
      </thead>
      <tbody className="products-table-body">{productRows}</tbody>
    </table>
  );
};

export default ProductTable;
