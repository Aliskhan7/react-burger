import React from 'react';
import {BurgerIcon, Button, Logo} from "@ya.praktikum/react-developer-burger-ui-components";

const AppHeader = () => {
    return (
        <div className='flex justify-between'>
            <Button htmlType='submit' type='secondary' >
                <div className='flex items-center gap-x-2'>
                    <BurgerIcon type='primary'/>
                    <span>Конструктор</span>
                </div>

            </Button>
            <button></button>
            <Logo/>
            <button></button>
        </div>
    );
};

export default AppHeader;