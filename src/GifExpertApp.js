import React, { useState } from "react";
import AddCategory from "../src/components/AddCategory";

const GifExpertApp = () => {
  // const categorias = ;
  const [category, setCategory] = useState([
    "One punch",
    "Samurai x",
    "Dragon ball",
  ]);
  //  const handleAdd = () => {
  //    setCategory([...category, "hunterxhunter"]);
  //  };
  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategory={setCategory} />
      <hr />

      <ol>
        {category.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};

export default GifExpertApp;
