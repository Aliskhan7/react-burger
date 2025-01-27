import React, { useState } from "react";
import AppHeader from "./components/AppHeader";
import BurgerIngredients from "./components/BurgerIngredients";
import data from "./utils/data";
import BurgerConstructor from "./components/BurgerConstructor";

function App() {
  return (
    <div className="container">
      <AppHeader />
      <main className="flex items-center gap-x-10 justify-between">
        <BurgerIngredients data={data} />
        <BurgerConstructor data={data} />
      </main>
    </div>
  );
}

export default App;
