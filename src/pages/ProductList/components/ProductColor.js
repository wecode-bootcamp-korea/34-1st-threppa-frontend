const ProductColor = ({ productColor, hoverColor }) => {
  return (
    <li>
      <div
        className={"colorCircle" + " " + productColor}
        onMouseOver={hoverColor}
        style={{ backgroundColor: productColor }}
      />
      <span>{productColor}</span>
    </li>
  );
};

export default ProductColor;
