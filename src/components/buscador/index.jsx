import React from "react";

const Buscador = (props) => {
  const handleChange = (e) => {
    props.searchData(e.target.value);
  };

  return (
    <form className="formSearch">
      <input
        type="text"
        placeholder="This is the funniest sh*t I've ever seen"
        name="search"
        id="search"
        onChange={handleChange}
      />
    </form>
  );
};

export default Buscador;
