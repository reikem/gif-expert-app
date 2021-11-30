import React from "react";
import PropTypes from "prop-types";
export const GiftGridItem = ({ id, title, url }) => {
  return (
    <div className="card animate__animated animate__backInLeft">
      <img src={url} alt={title} />
      <p key={id}>{title}</p>
    </div>
  );
};

GiftGridItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
