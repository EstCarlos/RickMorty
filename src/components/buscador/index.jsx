import React from "react";

const Buscador = (props) => {
  const handleChange = (e) => {
    props.searchData(e.target.value);
  };

  return (
    <form className="formSearch">
      <input
        type="text"
        placeholder="No lo se Rick"
        name="search"
        id="search"
        onChange={handleChange}
      />
    </form>
  );
};

export default Buscador;
