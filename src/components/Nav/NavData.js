const SUBMENU_DATA = {
  여성: {
    sort: [
      { id: 1, menu: "클로그1" },
      { id: 2, menu: "샌들 / 웨지" },
      { id: 3, menu: "플립 / 슬라이드" },
      { id: 4, menu: "플랫 / 로퍼" },
      { id: 5, menu: "부츠" },
      { id: 6, menu: "털 안감 겨울 클로그" },
      { id: 7, menu: "지비츠 참" },
      { id: 8, menu: "양말" },
    ],
    collection: {
      colTitle: "여성 컬렉션",
      colList: [
        { id: 1, collectList: "클래식1" },
        { id: 2, collectList: "타이다이" },
        { id: 3, collectList: "라이트라이드" },
        { id: 4, collectList: "바야밴드" },
        { id: 5, collectList: "크록밴드" },
      ],
      colBottom: ["여성용 슈즈 모두 보기", "세일"],
    },

    imgCard: [
      [
        { imgId: 1, imgSrc: "./images/NavImgs/shoes1.jpg", imgName: "신상품" },
        {
          imgId: 2,
          imgSrc: "./images/NavImgs/shoes2.jpeg",
          imgName: "베스트셀러",
        },
      ],
      [
        {
          imgId: 3,
          imgSrc: "./images/NavImgs/shoes3.jpeg",
          imgName: "스테디상품",
        },
        {
          imgId: 4,
          imgSrc: "./images/NavImgs/shoes4.jpeg",
          imgName: "컬렉션",
        },
      ],
    ],
  },

  남성: {
    sort: [
      { id: 1, menu: "클로그2" },
      { id: 2, menu: "샌들" },
      { id: 3, menu: "플립 / 슬라이드" },
      { id: 4, menu: "로퍼/슬라이드" },
      { id: 5, menu: "로퍼/슬립온" },
      { id: 6, menu: "털 안감 겨울 클로그" },
      { id: 7, menu: "지비츠 참" },
      { id: 8, menu: "양말" },
    ],
    collection: {
      colTitle: "남성 컬렉션",
      colList: [
        { id: 1, collectList: "클래식2" },
        { id: 2, collectList: "카모" },
        { id: 3, collectList: "아웃도어" },
        { id: 4, collectList: "라이트라이드" },
        { id: 5, collectList: "크록밴드" },
      ],
      colBottom: ["남성용 슈즈 모두 보기", "세일"],
    },
    imgCard: [
      [
        { imgId: 1, imgSrc: "./images/NavImgs/shoes1.jpg", imgName: "신상품" },
        {
          imgId: 2,
          imgSrc: "./images/NavImgs/shoes2.jpeg",
          imgName: "베스트셀러",
        },
      ],
      [
        {
          imgId: 3,
          imgSrc: "./images/NavImgs/shoes3.jpeg",
          imgName: "스테디상품",
        },
        {
          imgId: 4,
          imgSrc: "./images/NavImgs/shoes4.jpeg",
          imgName: "컬렉션",
        },
      ],
    ],
  },

  키즈: {
    sort: [
      { id: 1, menu: "클로그3" },
      { id: 2, menu: "샌들" },
      { id: 4, menu: "부츠 / 레인부츠" },
      { id: 8, menu: "양말" },
    ],
    collection: {
      colTitle: "키즈 컬렉션",
      colList: [
        { id: 1, collectList: "클래식3" },
        { id: 2, collectList: "디즈니" },
        { id: 3, collectList: "캐릭터" },
        { id: 4, collectList: "LED셀렉션" },
        { id: 5, collectList: "털 안감 겨울 슈즈" },
        { id: 6, collectList: "지브스 참" },
      ],
      colBottom: ["키즈 슈즈 모두 보기", "여름 세일 최대 50%"],
    },
    imgCard: [
      [
        { imgId: 1, imgSrc: "./images/NavImgs/shoes1.jpg", imgName: "신상품" },
        {
          imgId: 2,
          imgSrc: "./images/NavImgs/shoes2.jpeg",
          imgName: "베스트셀러",
        },
      ],
      [
        {
          imgId: 3,
          imgSrc: "./images/NavImgs/shoes3.jpeg",
          imgName: "스테디상품",
        },
        {
          imgId: 4,
          imgSrc: "./images/NavImgs/shoes4.jpeg",
          imgName: "컬렉션",
        },
      ],
    ],
  },
};

export default SUBMENU_DATA;
