import { useContext } from 'react';

import Card from '../UI/Card';
import { ProductsContext } from '../../context/products-context';
import './ProductItem.css';

const ProductItem = ({ id, title, description, isFav }) => {
  const productsContext = useContext(ProductsContext);
  const { toggleFav } = productsContext;

  const toggleFavHandler = () => {
    toggleFav(id);
  };

  return (
    <Card style={{ marginBottom: '1rem' }}>
      <div className='product-item'>
        <h2 className={isFav ? 'is-fav' : ''}>{title}</h2>
        <p>{description}</p>
        <button
          className={!isFav ? 'button-outline' : ''}
          onClick={toggleFavHandler}
        >
          {isFav ? 'Un-Favorite' : 'Favorite'}
        </button>
      </div>
    </Card>
  );
};

export default ProductItem;
