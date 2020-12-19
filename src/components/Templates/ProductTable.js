import React, { useState } from "react";
import { InlineIcon } from "@iconify/react";
import popOutLine from "@iconify-icons/clarity/pop-out-line";
import ProductModal from "./ProductModal";
import "../../styles/Executing.css";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const ProductTable = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalData, setModalData] = useState({});
  const { products } = props;

  const modalClose = () => {
    setIsModalVisible(false);
    setModalData({});
  };

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
          <span
            className="modal-popup"
            onClick={() => {
              setIsModalVisible(true);
              setModalData(product);
            }}
          >
            <InlineIcon icon={popOutLine} width={30} height={30} />
          </span>
        </td>
      </tr>
    );
  });
  return (
    <div>
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
      <Modal
        open={isModalVisible}
        onClose={modalClose}
        onEscKeyDown={modalClose}
        centered={true}
      >
        <ProductModal product={modalData} />
      </Modal>
    </div>
  );
};

export default ProductTable;
