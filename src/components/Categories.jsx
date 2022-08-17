import { useState } from 'react';
const Categories = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  const onClickCategory = (index) => {
    setActiveIndex(index);
  };
  return (
    <div className="categories">
      <ul>
        {categories.map((item, i) => {
          return (
            <li
              key={i}
              className={activeIndex === i ? 'active' : ''}
              onClick={() => onClickCategory(i)}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Categories;
