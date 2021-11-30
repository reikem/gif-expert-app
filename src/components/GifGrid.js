import React from "react";
import { useFetchGigs } from "../hooks/useFetchGifs";
import { GiftGridItem } from "./GiftGridItem";

export const GifGrid = ({ category }) => {
  const { data, loading } = useFetchGigs(category);

  return (
    <>
      <h3 className="animate__animated animate__bounceInDown">{category}</h3>
      {loading && <p className="animate__animated animate__flash">Loading</p>}
      {
        <div>
          <ol className="card-grid">
            {data.map((img) => (
              <GiftGridItem key={img.id} {...img} />
            ))}
          </ol>
        </div>
      }
    </>
  );
};
