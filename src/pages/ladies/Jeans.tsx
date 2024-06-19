// Jeans.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";

interface Jean {
  id: number;
  name: string;
}

const Jeans: React.FC = () => {
  const [jeans, setJeans] = useState<Jean[]>([]);

  useEffect(() => {
    const fetchJeans = async () => {
      try {
        const response = await axios.get<Jean[]>(
          "https://api.example.com/jeans"
        ); // Replace with your API endpoint
        setJeans(response.data);
      } catch (error) {
        console.error("Error fetching jeans:", error);
      }
    };

    fetchJeans();
  }, []);

  return (
    <div>
      <h2 className="font-bold text-4xl">WOMEN'S JEANS</h2>
      <p className="w-[60%] text-sm mt-4">
        Find your perfect fit and style of jeans to wear with anything and
        everything. Whether you’re looking for comfy Mom jeans or need a fresh
        new pair of skinny jeans, our collection of women’s jeans offers plenty
        of colours, shapes and fits to choose from. Style wide leg jeans with
        heels and blazers or stay casual in a pair of boyfriend jeans and
        trainers. Look for vintage-style cuts in our high-waisted and straight
        leg jeans in classic shades of denim blue. Search for staple black jeans
        or experiment with beige, white and brown for more of a neutral look.
        Discover trending low-rise and ripped jeans or go back to basics with
        clean-cut bootcut styles.
      </p>
      <ul>
        {jeans.map((jean) => (
          <li key={jean.id}>{jean.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Jeans;
