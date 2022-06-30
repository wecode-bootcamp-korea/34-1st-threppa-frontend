import { useState } from "react";

const ProductSize = ({ productSize }) => {
  const [isSizeFilter, setIsSizeFilter] = useState(false);

  const onClickSize = () => {
    setIsSizeFilter(!isSizeFilter);
  };

  return (
    <li
      onClick={onClickSize}
      style={{
        border: isSizeFilter ? "1px solid black" : "1px solid lightgray",
      }}
    >
      {productSize}
    </li>
  );
};

export default ProductSize;
