
import './Product.css';

const Product = (details) => 
	  <div className="product-card">
        <div className="product-image">
          <img src={details.image} />
        </div>
        <div className="product-info">
          <h5>{details.title}</h5>
          <h6>${details.price.toString()}</h6>
          <h6>{details.category}</h6>
        </div>
    </div>;

export default Product;