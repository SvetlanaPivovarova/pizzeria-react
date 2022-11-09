import logo from "./logo.svg";
import "./scss/app.scss";

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
            <PizzaItem title="Peppironi" price={550} />
            <PizzaItem title="Cheese" price={400} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
