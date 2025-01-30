import React from "react";
import {
  Button,
  ConstructorElement,
  CurrencyIcon,
  DeleteIcon,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

const BurgerConstructor = ({ data }) => {
  const price = data.reduce((sum, item) => sum + item.price, 0);
  return (
    <section>
      <div className="h-[700px] overflow-y-scroll flex flex-col gap-y-2.5">
        {data.map((item, index) => {
          return (
            <ConstructorElement
              type={data.length >= 0 ? "top" : "bottom"}
              isLocked={true}
              text={item.name}
              price={item.price}
              thumbnail={item.image}
            />
            // <div className="flex items-center gap-x-2">
            //   <DragIcon type="primary" />
            //   <div className="flex items-center w-[100%] gap-x-5 py-4 pl-6 pr-8 bg-[#1C1C21] rounded-t-[88px] rounded-b-[40px] mb-4">
            //     <img className="w-20 h-10" src={item.image} alt="img" />
            //     <p className="max-w-[254px]">{item.name}</p>
            //     <div className="flex items-center gap-x-5 ml-auto">
            //       <p className="flex items-center gap-x-2">
            //         {item.price} <CurrencyIcon type="primary" />
            //       </p>
            //       <DeleteIcon type="primary" />
            //     </div>
            //   </div>
            // </div>
          );
        })}
      </div>
      <div className="flex items-center mt-10 gap-x-10 justify-end">
        <div className="flex items-center gap-x-2">
          <span className="text-5xl constructor-element__price"> {price}</span>{" "}
          <CurrencyIcon className="w-9 h-9" type="primary" />
        </div>
        <Button htmlType="button" type="primary" size="medium">
          Оформить заказ
        </Button>
      </div>
    </section>
  );
};

export default BurgerConstructor;
