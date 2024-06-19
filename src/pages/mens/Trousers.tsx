// Trousers.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";

interface Trouser {
  id: number;
  name: string;
}

const Trousers: React.FC = () => {
  const [trousers, setTrousers] = useState<Trouser[]>([]);

  useEffect(() => {
    const fetchTrousers = async () => {
      try {
        const response = await axios.get<Trouser[]>(
          "https://api.example.com/trousers"
        ); // Replace with your API endpoint
        setTrousers(response.data);
      } catch (error) {
        console.error("Error fetching trousers:", error);
      }
    };

    fetchTrousers();
  }, []);

  return (
    <div>
      <h2 className="font-bold text-4xl">MEN'S TROUSERS</h2>
      <p className="w-[60%] text-sm mt-4">
        Find all varieties of men’s trousers here, from crisp tailored work
        trousers to casual joggers with elasticated waistbands. Browse smart
        cotton and linen styles, in regular and slim fit cuts, perfect for both
        the office and special occasions. For weekend gigs and outings, choose
        from our array of on-trend chinos and cargos in all shapes and colours.
        Dare to stand out in leather trousers or pare down your look with unique
        checked prints in corduroy and twill fabrics.
      </p>
      <ul>
        {trousers.map((trouser) => (
          <li key={trouser.id}>{trouser.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Trousers;
