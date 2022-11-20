/*
 * Project Name: contact-book-app
 * Created Date: Fri Nov 18 2022
 * Author: Rajmani Prasad (bca.raj89@gmail.com)
 * -----
 * Last Modified: Sun Nov 20 2022
 * -----
 * Copyright (c) 2022 KeepSpace
 * -----
 * HISTORY:
 * Date 	By	Comments
 * View Component based on list view and grid view whichever passed from contact-list component
 * ----------	---	-----------------------------------------------------------------------------
 */
import React, { Component } from "react";
import { connect } from "react-redux";
import Buttons from "./buttons";
import {
  deleteContact
} from "../actions/contacts";
class View extends Component {


  shouldComponentUpdate(nextProps) {
    return (this.props.views !== nextProps.views);
    }
    /**
   *
   * @param {*} email
   * @description this function removes contact
   */

  removeContact(email) {
    let isConfirmed = window.confirm(
      "Are you sure you want to delete this contact?"
    );
    if (isConfirmed) {
      this.props
        .deleteContact(email)
        .then(() => {
          // this.props.history.push("/contacts");
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
    }
  }
  render(props) {
    return (
      <>
        {this.props.views === "list" && (
          <div className="list row">
            <div className="col-md-12">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">DOB</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.contacts &&
                    this.props.contacts.map((contact, index) => (
                      <tr>
                        <th scope="row">{index}</th>
                        <td
                          onClick={() => this.setActiveContact(contact, index)}
                          key={index}
                        >
                          {" "}
                          <img
                            src={contact?.picture?.large}
                            alt=""
                            className="thumb-img"
                          />{" "}
                          {contact?.name?.title} {contact?.name?.first}{" "}
                          {contact?.name?.last}
                        </td>
                        <td>{contact?.email}</td>
                        <td>{new Date(contact?.dob?.date).toDateString()}</td>
                        <td>
                          <Buttons buttonText={"Edit"} buttonClass="btn-primary" /> {"  "}

                          <Buttons buttonText={"Delete"}  buttonClass="btn-danger" onChildClick={this.removeContact.bind(this, contact.email)} />
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
        <div className="list row">
          {this.props.views === "grid" &&
            this.props.contacts &&
            this.props.contacts.map((contact, index) => (
              <div className="col-md-3 card">
                <div className="cover-photo"></div>
                <div className="photo">
                  <img src={contact?.picture?.large} alt="" />
                </div>
                <div className="content">
                  <h2 className="name">
                    {contact?.name?.title} {contact?.name?.first}{" "}
                    {contact?.name?.last}
                  </h2>
                  <h3 className="fullstack">
                    {contact?.location?.street?.number}{" "}
                    {contact?.location?.street?.name}
                    {contact?.location?.city} {contact?.location?.state} <br />
                    {contact?.location?.country} {contact?.location?.postcode}
                  </h3>
                  <h3 className="email">
                    <a href={contact?.email}>{contact?.email}</a>
                  </h3>
                </div>
                <div className="contact">
                  <h3>DOB: {new Date(contact?.dob?.date).toDateString()} </h3>
                </div>
              </div>
            ))}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
  };
};
// export default View;
export default connect(mapStateToProps, {
  deleteContact
})(View);

