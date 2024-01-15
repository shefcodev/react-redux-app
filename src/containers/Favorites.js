import React from 'react';
import { useContext } from 'react';

import FavoriteItem from '../components/Favorites/FavoriteItem';
import { ProductsContext } from '../context/products-context';
import './Products.css';

const Favorites = () => {
  const productsContext = useContext(ProductsContext);

  const favoriteProducts = productsContext.products.filter(
    (product) => product.isFavorite
  );

  let content = <p className='placeholder'>Got no favorites yet!</p>;
  if (favoriteProducts.length > 0) {
    content = (
      <ul className='products-list'>
        {favoriteProducts.map(({ id, title, description }) => (
          <FavoriteItem
            key={id}
            id={id}
            title={title}
            description={description}
          />
        ))}
      </ul>
    );
  }
  return content;
};

export default Favorites;
