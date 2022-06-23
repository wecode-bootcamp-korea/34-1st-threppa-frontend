const ProductCategory = data => {
  data.map(ele => {
    return (
      <li>
        <div>
          <i className="fas fa-shoe-prints" />
          {ele.category}
        </div>
        <input type="checkbox" />
      </li>
    );
  });
};
