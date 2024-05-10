import React from 'react'
import { data } from '../components/Data';
import ProductCard from '../components/ProductCard';

const Home = () => {
  return (
    <div className='home'>
        <div className="home-content">
        {
            data.map((items) =>(
                <ProductCard key={items.id} items={items} />
            ))
        }
        </div>
    </div>
  )
}

export default Home;