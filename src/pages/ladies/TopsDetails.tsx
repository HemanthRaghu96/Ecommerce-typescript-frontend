// TopsDetails.tsx
import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { MyContext } from "../../Context";
import { API } from "../../api";

interface Top {
  _id: number;
  name: string;
  poster: string[];
  price: number;
  description: string;
  size: string[];
}

const TopsDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [top, setTop] = useState<Top | null>(null);

  const context = useContext(MyContext);

  if (!context) {
    throw new Error("TopsDetails must be used within a MyContext.Provider");
  }

  const { addToCart } = context;

  useEffect(() => {
    const fetchTop = async () => {
      try {
        const response = await axios.get<Top>(
          `${API}/ladies/tops/${id}`
        );
        setTop(response.data);
      } catch (error) {
        console.error("Error fetching top:", error);
      }
    };

    fetchTop();
  }, [id]);

  if (!top) {
    return <div className="mt-10 flex justify-center items-center">Loading...</div>;
  }

  const handleAdd = () => {
    if (top) {
      addToCart(top);
    }
  };

  return (
    <div className="flex">
      <div className="w-[60%] grid grid-cols-2 gap-3">
        {top.poster.map((poster) => (
          <img
            key={top._id}
            src={poster}
            alt={top.name}
            className="w-full h-auto object-fill m-3"
          />
        ))}
      </div>
      <div className="w-[30%] mx-10 mt-5">
        <h2 className="font-bold text-4xl">{top.name}</h2>
        <p className="text-sm mt-2">MRP inclusive of all taxes</p>
        <p className="text-xl font-semibold">Rs.{top.price}.00</p>
        <h1 className="font-bold text-xl mt-2">Sizes</h1>
        <div className="grid grid-cols-5">
          {top.size.map((size, index) => (
            <button
              key={index}
              className="border-[1px] mr-2 px-4 py-2 mt-2"
            >
              {size}
            </button>
          ))}
        </div>
        <button
          className="bg-black text-white w-[300px] my-7 py-3 text-xl font-bold rounded-md"
          onClick={handleAdd}
        >
          Add
        </button>
        <h1 className="font-bold text-xl mt-2">Description</h1>
        <p>{top.description}</p>
      </div>
    </div>
  );
};

export default TopsDetails;
