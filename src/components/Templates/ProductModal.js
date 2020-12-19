import "../../styles/ProductModal.css";

const ProductModal = (props) => {
  const { category, image, description, quantity } = props.product;
  return (
    <div className="product-modal">
      <img src={image} alt="Product" className="product-image" />
      <div className="product-content">
        <div className="product-category">Product Category: {category}</div>
        <div className="product-description">
          Product Description: {description}
        </div>
        <div className="product-quantity">Order quantity: {quantity}</div>
      </div>
    </div>
  );
};

export default ProductModal;
