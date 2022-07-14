import React from "react";

class MenuList extends React.Component {
  render() {
    // console.log(this.props.selected);
    const { options } = this.props;
    return options.map((listItem, index) => {
        // console.log(listItem,index);
      return (
        
        <div className={this.props.selected === index ? 'selected' : ''} key={index}>
          <p>{listItem}</p>
        </div>
      );
    });
  }
}

export default MenuList;
