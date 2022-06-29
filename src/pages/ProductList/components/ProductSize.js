import { useState } from "react";

const ProductSize = ({ productSize }) => {
  const [sizeFilterState, setSizeFilterState] = useState(false);

  const onClickSize = () => {
    {
      sizeFilterState ? setSizeFilterState(false) : setSizeFilterState(true);
    }
  };

  return (
    <li
      onClick={onClickSize}
      style={{
        border: sizeFilterState ? "1px solid black" : "1px solid lightgray",
      }}
    >
      {productSize}
    </li>
  );
};

export default ProductSize;
