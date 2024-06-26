import React, { Component } from "react";
import BgCont from "./BgContainer";
import Article from "../elements/Article";
import bg from "../../assets/bg.jpg";
import bg2 from "../../assets/bg2.jpg";
import bg3 from "../../assets/bg3.jpg";
import bg4 from "../../assets/bg4.jpg";
import dish from "../../assets/dish.jpg";
import "../styles/section.css";
import { Image, Header, Menu, Segment } from "semantic-ui-react";
import NavMenu from "../elements/NavMenu";

var styling = {
  container: {
    backgroundImage: `url(${bg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    width: "100%",
    height: "110vh"
  }
};
class sectionONE extends Component {
  constructor(props) {
    super(props);
    this.state = {
      welcomeMsg: "taste how deep is those coffee beans",
    };
  }

  styling = {
    wraper: {
      backgroundColor: "#535657",
      width: "100%",
      diplay: "flex",
      flexDirection: "column"
    },
    part1: {
      backgroundImage: `url(${this.props.imgsrc[2]})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      width: "100%",
      height: "100vh",
      display: "flex",
      justifyContent: "center"
    },
    part2: {
      backgroundColor: "white",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      width: "100%",
      height: "100%",
      padding: 0,
      margin: 0,
      display: "flex",
      flexWrap: "nowrap",
      justifyContent: "center"
    },
    part3: {
      backgroundImage: `url(${this.props.imgsrc[1]})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column"
    },
    wclTxt: {
      color: "#000",
      textAlign: "center",
      fontSize: "4.7vw",
      textShadow: " 3px 3px 3px #F9CC41",
      alignSelf: "center",
      fontFamily: "'Shojumaru', cursive"
    },
    subWclTxt: {
      color: "#000",
      textAlign: "center",
      fontSize: "3.5vmin",
      textShadow: " 6px 6px 3px #F9CC41",
      alignSelf: "center",
      fontFamily: "'Shojumaru', cursive"
    }
  };
  render() {
    return (
      <React.Fragment>
        <div className="helping" style={this.styling.wraper}>
          <div id="part1" className="part1" style={this.styling.part1}>
            <Header style={this.styling.wclTxt} as="h1">
              CoffeShop
              <Header.Subheader style={this.styling.subWclTxt}>
                {this.state.welcomeMsg}
              </Header.Subheader>
            </Header>
          </div>

          <div id="part2" className="part2" style={this.styling.part2}>
            <div className="innerSectionWrp LeftSide ">
              <div className="picsWrp">
                <Image src={dish} className="imgwrp" />
                <Image src={bg2} className="imgwrp" />
              </div>
              <div className="textWrp">
                <Article
                  paraWrp="paraWrpStyle"
                  artWrp="artWrpStyle"
                  headContent={"Coffe beans from brazil"}
                />
              </div>
            </div>
            {/* ...... */}
            {/* ...... */}
            <div className="innerSectionWrp RightSide ">
              <div className="textWrp">
                <Header as="h1" className="AboutTxt">
                  <Header.Subheader className="AbTxt1">
                    ............................
                  </Header.Subheader>

                  <Header.Subheader className="AbTxt">
                    About CoffeeShop
                  </Header.Subheader>

                  <Header.Subheader className="AbTxt2">
                    ............................
                  </Header.Subheader>
                </Header>
              </div>
              <div className="picsWrp">
                <Image src={bg2} className="imgwrp" />
                <Image src={bg3} className="imgwrp" />
                <Image src={bg4} className="imgwrp" />
              </div>
            </div>
          </div>

          <div id="part3" className="part3" style={this.styling.part3}>
            <Header className="navMenuHeader">Menu Of Coffee</Header>
            <NavMenu />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

// export default sectionONE;
export default React.memo(sectionONE);

