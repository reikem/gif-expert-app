import React from "react";

export const GiftGridItem = ({ id, title, url }) => {
  return (
    <div className="card animate__animated animate__backInLeft">
      <img src={url} alt={title} />
      <li key={id}>{title}</li>
    </div>
  );
};
