// Trousers.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";

interface Trouser {
  id: number;
  name: string;
}

const Hoodies: React.FC = () => {
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
      <h2 className="font-bold text-4xl">HOODIES & SWEATSHIRTS FOR MEN</h2>
      <p className="w-[60%] text-sm mt-4">
        Refresh your weekend wardrobe with our sweatshirts and hoodies for men
        in all cuts and colours. Discover classic oversized hoodies to stay warm
        whatever the weather, and graphic printed styles perfect for the skate
        park. Choose casual zip-up hoodies and pull-on crew-neck sweatshirts for
        lounging around the house or grabbing a coffee. Layer relaxed fit
        sweatshirts over collared shirts for an effortlessly cool grandad look.
        Alternatively, choose from preppy and grunge styles in our collection of
        men’s cardigans.
      </p>
      <ul>
        {trousers.map((trouser) => (
          <li key={trouser.id}>{trouser.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Hoodies;
