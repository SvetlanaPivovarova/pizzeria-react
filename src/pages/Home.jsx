import React, { useEffect, useState } from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Sceleton from "../components/PizzaItem/Sceleton";
import PizzaItem from "../components/PizzaItem";

const Home = () => {
  const [pizzaItems, setPizzaItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://6375e612b5f0e1eb85fc74a8.mockapi.io/api/items")
      .then((res) => res.json())
      .then((json) => {
        setPizzaItems(json);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Sceleton key={index} />)
          : pizzaItems.map((obj) => (
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
  );
};

export default Home;
