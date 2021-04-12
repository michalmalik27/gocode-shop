
import Product from '../Product/Product.js';
import './Products.css';

const Products = ({products}) =>
	<section className="products">
		{products.map(p => <Product key={id++} title={p.title} image={p.image} price={p.price}></Product>)}			
	</section>;


export default Products;