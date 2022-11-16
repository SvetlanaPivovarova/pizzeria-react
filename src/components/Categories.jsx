import { useState } from "react";

function Categories() {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  const [activeCategory, setActiveCategory] = useState(3);

  const onClickCategory = (i) => {
    setActiveCategory(i);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((item, i) => (
          <li
            key={i}
            onClick={() => onClickCategory(i)} // создается анонимная функция, которая вызывает функцию onClickCategory() при клике
            className={activeCategory === i ? "active" : ""}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
