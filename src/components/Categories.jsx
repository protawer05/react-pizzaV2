const Categories = ({ value, onChangeCategory }) => {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className="categories">
      <ul>
        {categories.map((item, i) => {
          return (
            <li key={i} className={value === i ? 'active' : ''} onClick={() => onChangeCategory(i)}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Categories;
