import React from 'react'

const Buttons = (props) => {
  return (
   <>
   <div className="btn-container">
        <button className="inner-circle" onClick={props.selectButtonClicked}>Select</button>
        <button className="menu" onClick={props.menuBtnClicked}>MENU</button>
        <button className="previous"><i className="fa-solid fa-backward"></i></button>
        <button className="next"><i className="fa-solid fa-forward"></i></button>
        <button className="play"><i className="fa-solid fa-play"></i><i className="fa-solid fa-pause"></i></button>

   </div>

   </>
  )
}

export default Buttons