import React from "react";
import { useState, useEffect } from "react";
import "./ProductList.scss";
import ProductCard from "./components/ProductCard";
import ProductCategory from "./components/ProductCategory";
import ProductColor from "./components/ProductColor";
import ProductSize from "./components/ProductSize";

const ProductList = () => {
  const [styleState, setStyleState] = useState(false);
  const [sizeState, setSizeState] = useState(false);
  const [colorState, setColorState] = useState(false);

  // 백엔드에 좋아요 데이터 전송 시
  // const [likeState,setLikeState] = useState(false);

  const [modalState, setModalState] = useState(false);

  const [colorHoverState, setColorHoverState] = useState(false);

  const [productDataList, setProductDataList] = useState([]);
  const [productFilteringData, setProductFilteringData] = useState([]);

  const [category, setCategory] = useState("");

  const styleMenuOpen = () => {
    setSizeState(false);
    setColorState(false);

    styleState ? setStyleState(false) : setStyleState(true);
  };
  const sizeMenuOpen = () => {
    setStyleState(false);
    setColorState(false);

    sizeState ? setSizeState(false) : setSizeState(true);
  };
  const colorMenuOpen = () => {
    setStyleState(false);
    setSizeState(false);

    colorState ? setColorState(false) : setColorState(true);
  };

  const onClickSortModal = () => {
    modalState ? setModalState(false) : setModalState(true);
  };

  //가격 정렬
  // const onClickSortPrice = () => {};

  const SortModal = () => {
    return (
      <div className="modal" style={{ display: modalState ? "block" : "none" }}>
        <ul>
          <li>최저가 - 최고가</li>
          <li>최고가 - 최저가</li>
        </ul>
      </div>
    );
  };

  const clickLike = e => {
    {
      e.target.className =
        e.target.className === "fas fa-heart" ? "far fa-heart" : "fas fa-heart";
    }
  };

  useEffect(() => {
    fetch("http://10.58.6.64:8000/products/lists")
      .then(res => res.json())
      .then(res => {
        setProductDataList(res);
      });
  }, []);

  useEffect(() => {
    fetch("http://10.58.6.64:8000/products/catesizes")
      .then(res => res.json())
      .then(res => {
        setProductFilteringData(res);
      });
  }, []);

  const hoverColor = e => {
    if (e.target.className.includes("black")) {
      e.target.parentNode.parentNode.firstChild.firstChild.src =
        "https://cdn.pixabay.com/photo/2016/06/03/17/35/shoes-1433925_960_720.jpg";
    } else if (e.target.className.includes("white")) {
      e.target.parentNode.parentNode.firstChild.firstChild.src =
        "https://cdn.pixabay.com/photo/2016/09/02/11/10/boots-1638873_960_720.jpg";
    } else if (e.target.className.includes("blue")) {
      e.target.parentNode.parentNode.firstChild.firstChild.src =
        "https://cdn.pixabay.com/photo/2014/01/22/19/38/boot-250012_960_720.jpg";
    }
  };

  const clickSort = e => {
    if (e.target.textContent.length === 0 && e.target.checked === true) {
      setCategory(e.target.parentNode.textContent);
    }
  };

  const checkOnlyOne = checkThis => {
    const checkboxes = document.getElementsByName("test");
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i] !== checkThis) {
        checkboxes[i].checked = false;
      }
    }
  };

  return (
    <div className="wrap">
      <p className="listTitle">크록스 여성 슈즈</p>
      <div className="listNav">
        <div className="listNavSmallLeft">
          <i className="fas fa-home leftSmallBtn" />
          <div className="leftSmallCategory">
            <a href="/">여성 X</a>
          </div>
        </div>
        <div className="listNavSmallRight">
          <a className="showAll" href="/">
            모두보기
          </a>
          <span>127개의 상품</span>
        </div>
      </div>

      <div className="sectionWrap">
        <section className="leftSection">
          <div className="reccomendProduct">
            <p className="recommendProductTitle">추천상품</p>
            <ul>
              <li>신상품</li>
              <li>베스트셀러</li>
              <li>5만원 이하 여성 슈즈</li>
              <li>Classic Crocs</li>
              <li>모두 보기</li>
            </ul>
          </div>
          <div className="filteringProduct">
            <p className="filteringProductTitle">제품 필터링</p>
            <ul>
              <li className="style">
                스타일
                <i className="fas fa-plus stylePlus" onClick={styleMenuOpen} />
                <ul
                  className="styleUl"
                  style={{
                    display: styleState ? "block" : "none",
                  }}
                >
                  {productFilteringData.categories_sizes?.categories.map(
                    ele => {
                      return (
                        <ProductCategory
                          onClick={clickSort}
                          category={ele.name}
                          categoryId={ele.id}
                          key={ele.id}
                          checkOnlyOne={checkOnlyOne}
                        />
                      );
                    }
                  )}
                </ul>
              </li>
              <li className="size">
                사이즈
                <i className="fas fa-plus sizePlus" onClick={sizeMenuOpen} />
                <ul
                  className="sizeUl"
                  style={{
                    display: sizeState ? "grid" : "none",
                  }}
                >
                  {productFilteringData.categories_sizes?.sizes?.map(ele => {
                    return <ProductSize productSize={ele.sizes} key={ele.id} />;
                  })}
                </ul>
              </li>
              <li className="color">
                색상
                <i className="fas fa-plus colorPlus" onClick={colorMenuOpen} />
                <ul
                  className="colorUl"
                  style={{
                    display: colorState ? "grid" : "none",
                  }}
                >
                  {productFilteringData.categories_sizes?.colors.map(ele => {
                    return (
                      <ProductColor
                        productColor={ele.name}
                        key={ele.id}
                        hoverColor={hoverColor}
                      />
                    );
                  })}
                </ul>
              </li>
            </ul>
          </div>
          <div>
            <img
              className="adImg"
              alt="광고이미지"
              src="https://www.street.co.kr/wp-content/uploads/2020/07/street.co_.kr_2020_07_casestudy-crocs-classic-clog_1-1.jpg"
            ></img>
          </div>
        </section>

        <section className="rightSection">
          <div className="dropdownMenu">
            <button className="sortBtn" onClick={onClickSortModal}>
              정렬 방법
              <i className="fas fa-angle-down arrowBtn" />
              <SortModal></SortModal>
            </button>
          </div>
          <div>
            <ul className="productInfoList">
              {productDataList.result?.map(ele => (
                <ProductCard
                  key={ele.product_id}
                  clickLike={clickLike}
                  hoverColor={hoverColor}
                  productImg={ele.img_url}
                  productTitle={ele.product_name}
                  productPrice={ele.price}
                />
              ))}
            </ul>
          </div>
          <div className="moreProduct">
            <div className="showMoreBtn">
              <a href="/">더보기</a>
            </div>
            <div className="showAllBtn">
              <a href="/">모두보기(127)</a>
            </div>
          </div>
          <p className="categoryComment">
            스타일리시하면서도 편안한 크록스 여성 슈즈.(각각 카테고리에 맞는
            서술)
          </p>
        </section>
      </div>
    </div>
  );
};
export default ProductList;
