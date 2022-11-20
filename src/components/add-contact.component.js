import React, { Component } from "react";
import { connect } from "react-redux";
import { createContact } from "../actions/contacts";
import { withRouter } from "react-router";
import Buttons from "../utils/buttons";
class AddContact extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeDob = this.onChangeDob.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.saveContact = this.saveContact.bind(this);
    this.newContact = this.newContact.bind(this);

    this.state = {
      name: "",
      email: "",
      dob: "",
      address: ""
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangeDob(e) {
    this.setState({
      dob: e.target.value,
    });
  }

  onChangeAddress(e) {
    this.setState({
      address: e.target.value,
    });
  }

  saveContact() {
    const { name, email, dob, address } = this.state;
    const { history } = this.props;
    this.props
      .createContact(name, email, dob, address)
      .then((data) => {
        this.setState({
          name: this.state.name,
          email: this.state.email,
          dob: this.state.dob,
          address: this.state.address
        });
        console.log(data);
        history.push("/contacts", {contacts: this.props.contacts});
      })
      .catch((e) => {
        console.log(e);
      });
  }

  newContact() {
    this.setState({
      name: "",
      email: "",
      dob: "",
      address: ""
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newContact}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                value={this.state.name}
                onChange={this.onChangeName}
                name="name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                required
                value={this.state.email}
                onChange={this.onChangeEmail}
                name="email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="dob">DOB</label>
              <input
                type="date"
                className="form-control"
                id="dob"
                required
                value={this.state.dob}
                onChange={this.onChangeDob}
                name="dob"
              />
            </div>


            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                className="form-control"
                id="address"
                required
                value={this.state.address}
                onChange={this.onChangeAddress}
                name="address"
              />
            </div>
            <Buttons buttonText={"Submit"}  buttonClass="btn-success" onChildClick={this.saveContact} />
            
          </div>
        )}
      </div>

    );
  }
}

export default connect(null, { createContact })(withRouter(AddContact));
