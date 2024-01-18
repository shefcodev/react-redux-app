import ProductItem from '../components/Products/ProductItem';
import { useStore } from '../hooks-store/store';
import './Products.css';

const Products = (props) => {
  const [state] = useStore();

  console.log('RENDERING PRODUCTS');

  return (
    <ul className='products-list'>
      {state.products.map(({ id, title, description, isFavorite }) => (
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
