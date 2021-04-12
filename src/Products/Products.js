
import Product from '../Product/Product.js';
import './Products.css';

const product = {
	title: "Winter Jacket",
	image: "https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369",
	price: 99.99
};

let id = 1;


const Products = ({products}) =>
	<section className="products">
		{products.map(p => <Product key={id++} title={p.title} image={p.image} price={p.price}></Product>)}			
	</section>;


export default Products;