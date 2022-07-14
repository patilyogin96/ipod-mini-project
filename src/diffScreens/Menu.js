import React from "react";
import MenuList from "./MenuList";



class Menu extends React.Component {
  render() {
    //    console.log(this.props.options);
    return (
    
        <div className="op-screen">
            <MenuList

            options={this.props.options}
            selected ={this.props.selected}
            
            />

        </div>
      
    );
  }
}

export default Menu;
