// Dresses.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";

interface Dress {
  id: number;
  name: string;
}

const Dresses: React.FC = () => {
  const [dresses, setDresses] = useState<Dress[]>([]);

  useEffect(() => {
    const fetchDresses = async () => {
      try {
        const response = await axios.get<Dress[]>(
          "https://api.example.com/dresses"
        ); // Replace with your API endpoint
        setDresses(response.data);
      } catch (error) {
        console.error("Error fetching dresses:", error);
      }
    };

    fetchDresses();
  }, []);

  return (
    <div>
      <h2 className="font-bold text-4xl">DRESSES</h2>
      <p className="w-[60%] text-sm mt-4">
        Romantic, trendy or casual – shop our full selection of ladies’ dresses
        here. Whether you’re on the lookout for cocktail or fitted styles, our
        evening dresses have got you covered. Or, if you’ve got a big night out
        planned, look no further than our party dresses, including everything
        from shimmery sequin dresses to flattering bodycon styles. We’ve also
        got a number of pluz-size dresses to show off your silhouette.
      </p>
      <ul>
        {dresses.map((dress) => (
          <li key={dress.id}>{dress.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dresses;
