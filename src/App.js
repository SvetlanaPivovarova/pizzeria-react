// import logo from "./logo.svg";
import "./scss/app.scss";

import Header from "./components/Header";
import Sort from "./components/Sort";
import Categories from "./components/Categories";
import PizzaItem from "./components/PizzaItem";
import { useEffect, useState } from "react";

function App() {
  const [pizzaItems, setPizzaItems] = useState([]);

  useEffect(() => {
    fetch("https://6375e612b5f0e1eb85fc74a8.mockapi.io/api/items")
      .then((res) => res.json())
      .then((json) => {
        setPizzaItems(json);
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {pizzaItems.map((obj) => (
              <PizzaItem
                key={obj.id}
                {...obj}
                //title={obj.name}
                //price={obj.price}
                //image={obj.imageUrl}
                //sizes={obj.sizes}
                //types={obj.types}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
