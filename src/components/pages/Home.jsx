import { useEffect, useState } from 'react';
import Categories from '../Categories';
import Sort from '../Sort';
import PizzaBlock from '../pizzaBlock';
import Skeleton from '../pizzaBlock/Skeleton.jsx';
const Home = ({ searchValue }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch('https://62f97a21e0564480353702ab.mockapi.io/items')
      .then((res) => res.json())
      .then((json) => setItems(json))
      .then((res) => setIsLoading(false));

    window.scrollTo(0, 0);
  }, []);

  const pizzas = items
    .filter((item) => {
      if (item.name.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((item) => <PizzaBlock {...item} key={item.id} />);
  const skeletons = [...new Array(8)].map((_, i) => <Skeleton key={i} />);
  const content = isLoading ? skeletons : pizzas;
  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{content}</div>
    </div>
  );
};

export default Home;
