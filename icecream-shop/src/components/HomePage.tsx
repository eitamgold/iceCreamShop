import React from 'react'
import FlavorConstarctor from './flavorConstarctor'
import { useState } from 'react';

type Flavor = {
  name: string;
  price: number;
  isKosher: boolean;
  isGlutenFree: boolean;
  isDairyFree: boolean;
  key: number;
  color?: string;
}

type HomePageProps = {
  setOrderList: React.Dispatch<React.SetStateAction<string[]>>;
  flavors: Flavor[]
};

const HomePage: React.FC<HomePageProps> = ({setOrderList, flavors}) => {
  const [filter, setFilter] = useState<string>('all');

  const filteredFlavors = flavors.filter((flavor) => {
    if (filter === 'all') return true;
    if (filter === 'kosher') return flavor.isKosher;
    if (filter === 'dairyFree') return flavor.isDairyFree;
    if (filter === 'glutenFree') return flavor.isGlutenFree;
    return true;
  });

  return (
    <div className='home-page'>
      <h1>hi there! this is our online ice cream shop</h1>
      <button className="filter-button" onClick={() => setFilter('kosher')}>
          Kosher
        </button>
        <button className="filter-button" onClick={() => setFilter('dairyFree')}>
          Dairy Free
        </button>
        <button className="filter-button" onClick={() => setFilter('glutenFree')}>
          Gluten Free
        </button>
        <button className="filter-button" onClick={() => setFilter('all')}>
          Reset
        </button>
      <div className='flavors-grid'>
        {filteredFlavors.map((flavor) => { return(<FlavorConstarctor setOrderList={setOrderList} price={flavor.price} key={flavor.key} name={flavor.name} color={flavor.color || 'white'}/>)})}
      </div>
    </div>
    
  )
}

export default HomePage