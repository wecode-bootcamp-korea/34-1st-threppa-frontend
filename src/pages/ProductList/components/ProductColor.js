const ProductColor = ({productColor}) => {
  DataCue.map((ele)=>{
    return  <div className={"colorCircle blue" + {ele.color}} onMouseOver={hoverColor}></div>
  })
}
<div className="colorCircle black" onMouseOver={hoverColor}></div>
<div className="colorCircle white" onMouseOver={hoverColor}></div>
<div className="colorCircle blue" onMouseOver={hoverColor}></div>