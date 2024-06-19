import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API } from "../../api";

export interface Top {
  _id: number;
  name: string;
  poster: string[];
  price: number;
  description: string;
  size: string[];
}

const Tops: React.FC = () => {
  const [tops, setTops] = useState<Top[]>([]);

  const [hoveredItem, setHoveredItem] = useState<{
    id: number;
    index: number;
  } | null>(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchTops = async () => {
      try {
        const response = await axios.get<Top[]>(`${API}/ladies/tops`);
        setTops(response.data);
      } catch (error) {
        console.error("Error fetching tops:", error);
      }
    };

    fetchTops();
  }, []);

  return (
    <div>
      <h2 className="font-bold text-4xl">WOMEN'S TOPS</h2>
      <p className="w-[60%] text-sm mt-4">
        Browse our complete collection of women's tops, from basic vests and
        T-shirts for everyday to glitzy night-out styles and smart options to
        wear to work. Discover stunning corset tops for parties and events or
        check out our summery crop tops and bralettes - ideal for festival
        season. Stock up on staple long-sleeve tops and bodysuits for tucking
        into trousers, jeans or skirts for work. Explore a variety of materials,
        from simple cotton styles to standout sequin tops and elegant satin
        styles. Choose from a range of necklines including simple crew-neck
        tops, '90s-style halterneck tops and flattering V-neck cuts.
      </p>
      <div className="mt-10 grid grid-cols-4 gap-4">
        {tops.map((top) => (
          <div
            key={top._id}
            className="mt-7 mx-2 flex flex-col cursor-pointer"
            onMouseEnter={() => setHoveredItem({ id: top._id, index: 1 })}
            onMouseLeave={() => setHoveredItem(null)}
            onClick={() => navigate(`/topdetails/${top._id}`)}
          >
            <img
              src={hoveredItem?.id === top._id ? top.poster[1] : top.poster[0]}
              className="w-full h-auto object-fill"
            />
            <h1 className="font-bold mt-2">{top.name}</h1>
            <p className="text-sm">Rs.{top.price}.00</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tops;
