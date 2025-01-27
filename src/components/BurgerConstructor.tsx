import React from "react";
import {
  CurrencyIcon,
  DeleteIcon,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

const BurgerConstructor = ({ data }) => {
  return (
    <div className="max-w-[600px]">
      <div className="h-[656px] overflow-scroll">
        {data.map((item, index) => {
          return (
            <div className="flex items-center gap-x-2">
              <DragIcon type="primary" />
              <div className="flex items-center w-[100%] gap-x-5 py-4 pl-6 pr-8 bg-[#1C1C21] rounded-t-[88px] rounded-b-[40px] mb-4">
                <img className="w-20 h-10" src={item.image} alt="img" />
                <p className="max-w-[254px]">{item.name}</p>
                <div className="flex items-center gap-x-5 ml-auto">
                  <p className="flex items-center gap-x-2">
                    {item.price} <CurrencyIcon type="primary" />
                  </p>
                  <DeleteIcon type="primary" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BurgerConstructor;
