import React, { useEffect, useState } from "react";
import axios from "axios";

interface Top {
  id: number;
  name: string;
}

const Tops: React.FC = () => {
  const [tops, setTops] = useState<Top[]>([]);

  useEffect(() => {
    const fetchTops = async () => {
      try {
        const response = await axios.get<Top[]>("https://api.example.com/tops");
        setTops(response.data);
      } catch (error) {
        console.error("Error fetching tops:", error);
      }
    };

    fetchTops();
  }, []);

  return (
    <div>
      <h2 className="font-bold text-4xl">MEN'S T-SHIRTS & TOPS</h2>
      <p className="w-[60%] text-sm mt-4">
        Refresh your essentials. Find T-shirts and vests in every style you
        need. Style a graphic T-shirt with jeans. Lightweight running vests to
        elevate your workout. Oversized T-shirts for your most relaxed fit yet.
        Polo T-shirts for golf weekends with the boys. Long-sleeve tees for
        confident layering. Crafted from comfortable and durable materials, our
        men’s vests and T-shirts offer everything from everyday basics to bold
        statement pieces. Browse now.
      </p>
      <ul>
        {tops.map((top) => (
          <li key={top.id}>{top.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Tops;
