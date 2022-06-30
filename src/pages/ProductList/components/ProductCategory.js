const ProductCategory = ({ category, categoryId, onClick, checkOnlyOne }) => {
  return (
    <label htmlFor={"cateInput" + categoryId}>
      <li onClick={onClick}>
        <div>
          <i className="fas fa-shoe-prints categoryLi" />
          {category}
        </div>

        <input
          type="radio"
          id={"cateInput" + categoryId}
          className="categoryInput"
          name="test"
        />
      </li>
    </label>
  );
};

export default ProductCategory;
