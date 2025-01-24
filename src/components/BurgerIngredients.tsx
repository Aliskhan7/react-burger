import React from "react";

const BurgerIngredients = (data) => {
  return (
    <div>
      {data.map((item) => {
        return <p>{item.name}</p>;
      })}
    </div>
  );
};

export default BurgerIngredients;
