const ProductSize = (data) ={

  const [a,setA] = useState('');
  return (
  data.map((ele)=>{
    return(
      <li
                    onClick={onClickSize}
                    style={{
                      border: sizeFilterState
                        ? "1px solid black"
                        : "1px solid lightgray",
                    }}
                  >
                    {ele.size}
                  </li>
    )
  }))
}