// Ladies.tsx
import React, { useState } from 'react';
import Tops from './Tops'; // Import the Tops component
import Dresses from './Dresses';
import Jeans from './Jeans';
import Shoes from './Shoes';

const Ladies: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const renderContent = () => {
    switch (selectedCategory) {
      case 'Tops':
        return <Tops />;
      case 'Dresses':
        return <Dresses />;
      case 'Jeans':
        return <Jeans />;
      case 'Shoes':
        return <Shoes />;
      // Add cases for other categories as needed
      default:
        return  <Tops />;
    }
  };

  return (
    <div className="flex mt-10">
      {/* List of options */}
      <div className="w-[15%] ">
        <div>
          <h1 className="font-bold mx-4">Shop by Product</h1>
          <ul className="mx-4 mt-5">
            <li onClick={() => setSelectedCategory('Tops')} className='cursor-pointer'>Tops</li>
            <li onClick={() => setSelectedCategory('Dresses')} className='cursor-pointer'>Dresses</li>
            <li onClick={() => setSelectedCategory('Jeans')} className='cursor-pointer'>Jeans</li>
            <li onClick={() => setSelectedCategory('Shoes')} className='cursor-pointer'>Shoes</li>
          </ul>
        </div>
      </div>
      {/* Items */}
      <div className="w-[85%]">
        {renderContent()}
      </div>
    </div>
  );
};

export default Ladies;
