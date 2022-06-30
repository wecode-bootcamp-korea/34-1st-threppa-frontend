import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ProductColor from "./ProductColor";

const ProductCard = ({ clickLike, hoverColor }) => {
  const [productDataList, setProductDataList] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  const goToDetail = id => {
    navigate(`/monsters/detail/${id}`);
  };

  useEffect(() => {
    fetch(`http://10.58.4.136:8000/products${location.search}`)
      .then(res => res.json())
      .then(res => {
        setProductDataList(res.products);
      });
  }, [location.search]);

  return productDataList.map(product => (
    <li key={product.product_id} onClick={() => goToDetail(product.product_id)}>
      <div className="productInfo">
        <div className="productInfoTopNav">
          <i className="far fa-heart" onClick={clickLike}></i>
          <span>세일정보</span>
        </div>
        <div className="productInfoDetail">
          <div>
            <img alt="shoes" src={product.img_url} className="productImg"></img>
          </div>
          <p className="productName">{product.product_name}</p>
          <div className="productPrice">₩ {product.price}</div>
          <ul className="productColorNav">
            {product.colors.map(color => {
              return (
                <ProductColor
                  key={color.id}
                  productColor={color.name}
                  hoverColor={hoverColor}
                />
              );
            })}
          </ul>
          <button className="lookClose">둘러보기</button>
        </div>
      </div>
    </li>
  ));
};

export default ProductCard;
