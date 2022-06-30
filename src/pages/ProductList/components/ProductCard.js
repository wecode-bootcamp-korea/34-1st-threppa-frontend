import { useNavigate } from "react-router-dom";
import ProductColor from "./ProductColor";

const ProductCard = ({
  clickLike,
  product_id,
  product_name,
  product_price,
  colors,
}) => {
  const navigate = useNavigate();

  const goToDetail = id => {
    navigate(`/product/${id}`);
  };

  const hoverColor = e => {
    if (e.target.className.includes("Black")) {
      e.target.parentNode.parentNode.parentNode.firstChild.firstChild.src =
        colors[0].image_url;
    } else if (e.target.className.includes("White")) {
      e.target.parentNode.parentNode.parentNode.firstChild.firstChild.src =
        colors[1].image_url;
    } else if (e.target.className.includes("Blue")) {
      e.target.parentNode.parentNode.parentNode.firstChild.firstChild.src =
        colors[2].image_url;
    }
  };

  return (
    <li key={product_id}>
      <div className="productInfo">
        <div className="productInfoTopNav">
          <i className="far fa-heart" onClick={clickLike} />
          <span>세일정보</span>
        </div>
        <div className="productInfoDetail">
          <div>
            <img alt="shoes" src={colors[0].image_url} className="productImg" />
          </div>
          <p className="productName">{product_name}</p>
          <div className="productPrice">₩ {product_price}</div>
          <ul className="productColorNav">
            {colors.map(color => {
              return (
                <ProductColor
                  key={color.id}
                  productColor={color.name}
                  hoverColor={hoverColor}
                />
              );
            })}
          </ul>
          <button className="lookClose" onClick={() => goToDetail(product_id)}>
            둘러보기
          </button>
        </div>
      </div>
    </li>
  );
};

export default ProductCard;
