/*
더보기 버튼에 pageOnclick

const pageOnclick =(buttonIndex: 페이지 버튼 있을때) => {
  const limit = 20
  const offset = buttonIndex * limit

  const queryString = `?offset=${offset}&limit=${limit}`;
  navigate(`/pagenation${queryString}`)
}
*/
