import React from "react";
import {
  BurgerIcon,
  Button,
  InfoIcon,
  ListIcon,
  Logo,
  LogoutIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

const AppHeader = () => {
  return (
    <div className="flex justify-between pt-6">
      <div className="flex items-center gap-x-14">
        <Button htmlType="submit" type="secondary" className="p-0">
          <div className="flex items-center gap-x-2">
            <BurgerIcon type="primary" />
            <span>Конструктор</span>
          </div>
        </Button>
        <Button htmlType="submit" type="secondary" className="p-0">
          <div className="flex items-center gap-x-2">
            <ListIcon type="primary" />
            <span>Лента заказов</span>
          </div>
        </Button>
      </div>
      <div className="m-auto">
        <Logo />
      </div>
      <Button htmlType="submit" type="secondary" className="me-auto">
        <div className="flex items-center gap-x-2">
          <ProfileIcon type="primary" />
          <span>Личный кабинет</span>
        </div>
      </Button>
    </div>
  );
};

export default AppHeader;
