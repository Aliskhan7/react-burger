import React, { useState } from "react";
import AppHeader from "./components/AppHeader";
import BurgerIngredients from "./components/BurgerIngredients";
import data from "./utils/data";
import BurgerConstructor from "./components/BurgerConstructor";

function App() {
  return (
    <div className="container">
      <AppHeader />
      <h2 className="mt-10 text-4xl font-bold mb-5">Собери бургер</h2>
      <main className=" mt-10  flex items-start gap-x-10 justify-between">
        <BurgerIngredients data={data} />
        <BurgerConstructor data={data} />
      </main>
    </div>
  );
}

export default App;
