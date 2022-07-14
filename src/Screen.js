import React from "react";
import Menu from "./diffScreens/Menu";
import Games from "./diffScreens/Games";
import Settings from "./diffScreens/Settings";
import Music from "./diffScreens/Music";

import Coverflow from "./diffScreens/Coverflow";



class Screen extends React.Component{
    render()
    {

        // console.log(this.props.selected);
        return(
            <>
            <div className="screen-container">
           
            <Menu
             options={this.props.options}
             selected={this.props.selected}
             />

              {this.props.pageToBeShown === 0 && this.props.options.length === 4 ? <Coverflow/> : ''}
              {this.props.pageToBeShown === 1 && this.props.options.length === 4 ? <Games/> : ''}
              {this.props.pageToBeShown === 2 && this.props.options.length === 4 ? <Music/> : ''}
              {this.props.pageToBeShown === 3 && this.props.options.length === 4 ? <Settings/> : ''}

             

                
            </div>
             

            </>
        )
    }
}


export default Screen;