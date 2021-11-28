import React, { useState } from "react";

const AddCategory = ({ setCategory }) => {
  const [inputValue, setInputValue] = useState();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log("Submit echo");
    if (inputValue.trim().length > 2) {
      setCategory((cats) => [...cats, inputValue]);
      setCategory("");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3>{inputValue} </h3>
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </form>
    </>
  );
};

export default AddCategory;
