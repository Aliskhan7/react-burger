import React from "react";
import {
  Counter,
  CurrencyIcon,
  Tab,
} from "@ya.praktikum/react-developer-burger-ui-components";

const BurgerIngredients = ({ data }) => {
  const [current, setCurrent] = React.useState("Булки");
  return (
    <div className="max-w-[600px]">
      <div style={{ display: "flex" }}>
        <Tab value="Булки" active={current === "Булки"} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="Соусы" active={current === "Соусы"} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab
          value="Начинки"
          active={current === "Начинки"}
          onClick={setCurrent}
        >
          Начинки
        </Tab>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 mt-6 h-[700px] overflow-y-scroll">
        {data.map((item) => {
          return (
            <div className="flex flex-col items-center text-center relative">
              <Counter count={1} size="small" extraClass="m-1" />
              <img src={item.image} alt="" />
              <p className="flex items-center gap-x-2">
                {item.price} <CurrencyIcon type="primary" />
              </p>
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BurgerIngredients;
