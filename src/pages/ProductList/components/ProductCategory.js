const ProductCategory = ({ category, categoryId, onClick, checkOnlyOne }) => {
  return (
    <label htmlFor={"cateInput" + categoryId}>
      <li onClick={onClick}>
        <div>
          <i className="fas fa-shoe-prints categoryLi" />
          {category}
        </div>

        <input
          type="checkbox"
          id={"cateInput" + categoryId}
          className="categoryInput"
          name="test"
          onChange={e => checkOnlyOne(e.target)}
        />
      </li>
    </label>
  );
};

export default ProductCategory;
