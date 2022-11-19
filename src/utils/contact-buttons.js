import React, { Component} from "react";
class ContactButtons extends Component  {
  
  render(props) {

    return (
      <>
       <button className ={`btn ${ this.props.buttonClass }`} onClick={this.props.onChildClick}>{this.props.buttonText}</button>
      </>
    );
  }
}

export default ContactButtons;


