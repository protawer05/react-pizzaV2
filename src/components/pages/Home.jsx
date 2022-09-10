import { useEffect, useState, useContext, useRef } from 'react';
import Categories from '../Categories';
import Sort from '../Sort';
import { sortList } from '../Sort';
import PizzaBlock from '../pizzaBlock';
import Skeleton from '../pizzaBlock/Skeleton.jsx';
import Pagination from '../pagination';
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../../App';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId, setCurrentPage, setFilters } from '../../redux/slices/filterSlice';
import qs from 'qs';
import axios from 'axios';
const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSearch = useRef(false);
  const isMounted = useRef(false);
  const { categoryId, sort, currentPage } = useSelector((state) => state.filter);
  const sortType = sort.sortProperty;
  const { searchValue } = useContext(SearchContext);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };
  const onChangePage = (num) => {
    dispatch(setCurrentPage(num));
  };
  const fetchPizzas = () => {
    setIsLoading(true);
    const order = sortType.includes('-') ? 'asc' : 'desc';
    const sortBy = sortType.replace('-', '');
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';
    axios
      .get(
        `https://62f97a21e0564480353702ab.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sort = sortList.find((obj) => obj.sortProperty === params.sortProperty);
      dispatch(
        setFilters({
          ...params,
          sort,
        }),
      );
      isSearch.current = true;
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);

    fetchPizzas();
    // eslint-disable-next-line
  }, [categoryId, sortType, searchValue, currentPage]);

  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sort.sortProperty,
        categoryId,
        currentPage,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
    // eslint-disable-next-line
  }, [categoryId, sortType, currentPage]);

  const pizzas = items.map((item) => <PizzaBlock {...item} key={item.id} />);
  const skeletons = [...new Array(8)].map((_, i) => <Skeleton key={i} />);
  const content = isLoading ? skeletons : pizzas;
  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{content}</div>
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
};

export default Home;
