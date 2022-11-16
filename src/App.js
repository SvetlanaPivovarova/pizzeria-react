import logo from "./logo.svg";
import "./scss/app.scss";
import pizzaItems from "./assets/items.json";

import Header from "./components/Header";
import Sort from "./components/Sort";
import Categories from "./components/Categories";
import PizzaItem from "./components/PizzaItem";

function App() {
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
