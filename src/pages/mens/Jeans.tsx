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
      <h2 className="font-bold text-4xl">MEN'S JEANS</h2>
      <p className="w-[60%] text-sm mt-4">
        Find all your most-worn styles and fits among our collection of men's
        jeans. Whether you're looking for smart black slim fit jeans to wear to
        work or skinny jeans for weekend-wear, we have it all. Toughen up your
        outfits with our ripped jeans in a variety of colours and fits or look
        for more clean cut styles. Choose from a range of classic denim shades
        of blue, black and grey or try bolder shades and patterns. Try a new
        style with our baggy worker and cargo jeans or look for flared and
        bootcut jeans. Find your favourite straight leg and tapered jeans made
        from quality materials. Update your denim with our diverse collection to
        find staple styles to wear everyday and dress up or down.
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
