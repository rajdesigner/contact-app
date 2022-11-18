import React, { Component } from "react";

class View extends Component {
  constructor(props) {
    debugger;
    super(props);
  }

  shouldComponentUpdate(nextProps) {
    return (this.props.views !== nextProps.views);
    }
  render() {
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
                          <button className="btn btn-primary">Edit</button>{" "}
                          <button
                            className="btn btn-danger"
                            onClick={() => this.removeContact(contact.email)}
                          >
                            Delete
                          </button>
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
                    {contact?.location?.street?.number},{" "}
                    {contact?.location?.street?.name}
                    <br />
                    {contact?.location?.city}, {contact?.location?.state} <br />
                    {contact?.location?.country}, {contact?.location?.postcode}
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

export default View;
