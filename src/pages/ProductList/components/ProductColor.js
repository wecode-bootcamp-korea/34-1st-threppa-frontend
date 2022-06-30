const ProductColor = ({ productColor, hoverColor }) => {
  return (
    <li>
      <div
        className={"colorCircle" + " " + productColor}
        onMouseOver={hoverColor}
        style={{ backgroundColor: productColor }}
      />
    </li>
  );
};

export default ProductColor;
