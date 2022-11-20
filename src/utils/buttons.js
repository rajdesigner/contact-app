/*
 * Project Name: contact-book-app
 * Created Date: Fri Nov 18 2022
 * Author: Rajmani Prasad (bca.raj89@gmail.com)
 * -----
 * Last Modified: Sat Nov 19 2022
 * -----
 * Copyright (c) 2022 KeepSpace
 * -----
 * HISTORY:
 * Date 	By	Comments
 * Button component
 * ----------	---	---------------------------------------------------------
 */
import React, { Component} from "react";
class Buttons extends Component  {
  
  render(props) {

    return (
      <>
       <button className ={`btn ${ this.props.buttonClass }`} onClick={this.props.onChildClick}>{this.props.buttonText}</button>
      </>
    );
  }
}

export default Buttons;


