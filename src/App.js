import React from "react";
import ZingTouch from "zingtouch";
import "./App.css";
import Buttons from "./Buttons";
import Screen from "./Screen";

class App extends React.Component {
  // defining all states
  constructor() {
    super();
    this.temp_change_in_angle = 0;
    this.temp_selected = 0;
    this.state = {
      menuOptions: ["Cover Flow", "Games", "Music", "Settings"],
      selected: 0,
      pageToBeShown: -1,
      musicOptions: ["All Songs", "Artist", "Albums", "Back"],
      onMusicPlayer: -1,
      backToMenu: ["Cover Flow", "Games", "Music", "Settings"],
    };
  }

  // this code makes the touch pad functional,when menu options are displaey on scree ,we have used zingtouch library

  componentDidMount() {
    var zt = new ZingTouch.Region(
      document.getElementsByClassName("btn-container")[0]
    );
    zt.bind(
      document.getElementsByClassName("btn-container")[0],
      "rotate",
      (event) => {
        if (
          document
            .getElementsByClassName("op-screen")[0]
            .classList.contains("width-50")
        ) {
          
          let dist = event.detail.distanceFromLast;
          console.log();
          
          
          this.temp_change_in_angle += dist;
          console.log(this.temp_change_in_angle);

          // while rotating if the value goes beyond 60 degrees then selected is updated by one and the page is rerended 
          if (this.temp_change_in_angle > 60) {
            this.temp_selected++;
            this.temp_selected =
              this.temp_selected % this.state.menuOptions.length;
             
            this.setState({
              selected: this.temp_selected,
            });

            this.temp_change_in_angle = 0;
          } else if (this.temp_change_in_angle < -60) {
            this.temp_selected--;
            if (this.temp_selected === -1)
              this.temp_selected = this.state.menuOptions.length - 1;
              console.log(this.temp_selected);

            this.temp_selected =
              this.temp_selected % this.state.menuOptions.length;
              console.log("final",this.temp_selected);
            this.setState({
              selected: this.temp_selected,
            });
            this.temp_change_in_angle = 0;
          }
        }
      }
    );
  }

  // this function executed everytime when menu button is clicked

  menuBtnClicked = () => {
    // console.log(this.state.menuOptions);

    let screenMenuClassList =
      document.getElementsByClassName("op-screen")[0].classList;

    if (screenMenuClassList.contains("width-50")) {
      //if menu is present on screen this code will hide menu
      document.querySelector(".op-screen").classList.remove("width-50");
    } //if menu on presen on screen, this code will display menu
    else {
      document.querySelector(".op-screen").classList.add("width-50");
    }
  };

  // this code is executed when select button is clicked

  selectButtonClicked = () => {
    //  if we are inside music player and when back is clicked, we will re-render screen with original menu options with this code
    if (this.state.onMusicPlayer === 1 && this.state.selected === 3) {
      console.log("Back clicked");

      this.setState({
        menuOptions: this.state.backToMenu,
        onMusicPlayer: -1,
        selected: 0,
      });
      return;
    }
    if (this.state.onMusicPlayer === 1) {
      return;
    }

    // when music is clicked, code re-renders with music options

    if (this.state.selected === 2 && this.state.menuOptions.length === 4) {
      console.log("Enter music");

      this.setState({
        menuOptions: this.state.musicOptions,
        onMusicPlayer: 1,
        pageToBeShown: this.state.selected,
      });

      return;
    }

    // if coverflow, games and setting is clicked then the code re-renders screen with respective page

    this.setState({
      pageToBeShown: this.state.selected,

      selected: 0,
    });

    // after page is rendered the to hide menu options this function call is called

    this.menuBtnClicked();
  };

  render() {
    // console.log(this.state.selected);
    return (
      <div className="App">
        <div className="wrapper">
          <Screen
            options={this.state.menuOptions}
            selected={this.state.selected}
            pageToBeShown={this.state.pageToBeShown}
          />

          <Buttons
            menuBtnClicked={this.menuBtnClicked}
            selectButtonClicked={this.selectButtonClicked}
          />
        </div>
      </div>
    );
  }
}

export default App;
