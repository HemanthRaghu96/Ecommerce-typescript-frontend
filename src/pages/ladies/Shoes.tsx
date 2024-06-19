// Shoes.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";

interface Shoe {
  id: number;
  name: string;
}

const Shoes: React.FC = () => {
  const [shoes, setShoes] = useState<Shoe[]>([]);

  useEffect(() => {
    const fetchShoes = async () => {
      try {
        const response = await axios.get<Shoe[]>(
          "https://api.example.com/shoes"
        ); // Replace with your API endpoint
        setShoes(response.data);
      } catch (error) {
        console.error("Error fetching shoes:", error);
      }
    };

    fetchShoes();
  }, []);

  return (
    <div>
      <h2 className="font-bold text-4xl">WOMEN'S SHOES</h2>
      <p className="w-[60%] text-sm mt-4">
        Step out in style this season with our collection of women's shoes for
        women. Shop for footwear for every occasion - find comfy heels in the
        latest shapes and styles, plus stylish sandals, heels and more. Look for
        cosy slippers for padding about at home or check out our comfy slides
        for the coffee run. From comfortable flats to heeled boots and standout
        party shoes, you’ll be prepared for any occasion with our stylish edit.
        Shopping for boots~? Browse knee-high, ankle boots and combat styles.
        Browse through elegant mules and showstopping platform trainers.
      </p>
      <ul>
        {shoes.map((shoe) => (
          <li key={shoe.id}>{shoe.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Shoes;
