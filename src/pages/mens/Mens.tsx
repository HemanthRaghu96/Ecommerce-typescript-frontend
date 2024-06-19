// Ladies.tsx
import React, { useState } from 'react';
import Tops from './Tops';
import Jeans from './Jeans';
import Hoodies from './Hoodies';
import Trousers from './Trousers';


const Mens: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const renderContent = () => {
    switch (selectedCategory) {
      case 'Tops':
        return <Tops />;
      case 'Trousers':
        return <Trousers />;
      case 'Jeans':
        return <Jeans />;
      case 'Hoodies':
        return <Hoodies />;
      // Add cases for other categories as needed
      default:
        return  <Tops />;
    }
  };

  return (
    <div className="flex mt-10">
      {/* List of options */}
      <div className="w-[30%] ">
        <div>
          <h1 className="font-bold mx-4">Shop by Product</h1>
          <ul className="mx-4 mt-5">
            <li onClick={() => setSelectedCategory('Tops')} className='cursor-pointer'>T-shirts & Tops</li>
            <li onClick={() => setSelectedCategory('Trousers')} className='cursor-pointer'>Trousers</li>
            <li onClick={() => setSelectedCategory('Jeans')} className='cursor-pointer'>Jeans</li>
            <li onClick={() => setSelectedCategory('Hoodies')} className='cursor-pointer'>Hoodies & Sweatshirts</li>
          </ul>
        </div>
      </div>
      {/* Items */}
      <div className="w-[70%]">
        {renderContent()}
      </div>
    </div>
  );
};

export default Mens;
