import React from 'react';
import { useOrder } from '../OrderContext';
import FlavorConstarctor from './flavorConstarctor';

type Flavor = {
  name: string;
  isKosher: boolean;
  isGlutenFree: boolean;
  isDairyFree: boolean;
  key: number;
  color?: string;
  price: number;
};

type HomePageProps = {
  flavors: Flavor[];
};

const HomePage: React.FC<HomePageProps> = ({ flavors }) => {
  const { setOrderList } = useOrder();

  return (
    <div className="home-page">
      <h1>Welcome to the Ice Cream Shop!</h1>
      <div className="flavors-grid">
        {flavors.map((flavor) => (
          <FlavorConstarctor
            key={flavor.key}
            setOrderList={setOrderList}
            name={flavor.name}
            color={flavor.color || 'white'}
            price={flavor.price}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
