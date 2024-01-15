import { useContext } from 'react';

import ProductItem from '../components/Products/ProductItem';
import { ProductsContext } from '../context/products-context';
import './Products.css';

const Products = (props) => {
  const productsContext = useContext(ProductsContext);
  const productList = productsContext.products;

  return (
    <ul className='products-list'>
      {productList.map(({ id, title, description, isFavorite }) => (
        <ProductItem
          key={id}
          id={id}
          title={title}
          description={description}
          isFav={isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
