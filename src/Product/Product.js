import "./Product.css";

const Product = ({title, image, price, category}) => (
  <div className="product-card">
    <div className="product-image">
      <img src={image} />
    </div>
    <div className="product-info">
      <h5>{title}</h5>
      <h6>${price}</h6>
      <h6>{category}</h6>
    </div>
  </div>
);

export default Product;
