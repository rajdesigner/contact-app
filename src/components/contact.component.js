import React, { Component } from "react";
import { connect } from "react-redux";
import { updateContact, deleteContact } from "../actions/contacts";
import ContactDataService from "../services/contact.service";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.getContact = this.getContact.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
    this.updateContent = this.updateContact.bind(this);
    this.removeContact = this.removeContact.bind(this);

    this.state = {
      currentContact: {
        id: null,
        title: "",
        description: "",
        published: false,
      },
      message: "",
    };
  }

  componentDidMount() {
    this.getContact(this.props.match.params.id);
  }

  onChangeTitle(e) {
    const title = e.target.value;

    this.setState(function (prevState) {
      return {
        currentContact: {
          ...prevState.currentContact,
          title: title,
        },
      };
    });
  }

  onChangeDescription(e) {
    const description = e.target.value;

    this.setState((prevState) => ({
      currentContact: {
        ...prevState.currentContact,
        description: description,
      },
    }));
  }

  getContact(id) {
    ContactDataService.get(id)
      .then((response) => {
        this.setState({
          currentContact: response.data['results'],
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  updateStatus(status) {
    var data = {
      id: this.state.currentContact.id,
      title: this.state.currentContact.title,
      description: this.state.currentContact.description,
      published: status,
    };

    this.props
      .updateContact(this.state.currentContact.id, data)
      .then((reponse) => {
        console.log(reponse);

        this.setState((prevState) => ({
          currentContact: {
            ...prevState.currentContact,
            published: status,
          },
        }));

        this.setState({ message: "The status was updated successfully!" });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  updateContent() {
    this.props
      .updateContact(this.state.currentContact.id, this.state.currentContact)
      .then((reponse) => {
        console.log(reponse);
        
        this.setState({ message: "The Contact was updated successfully!" });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  removeContact() {
    this.props
      .deleteContact(this.state.currentContact.id)
      .then(() => {
        // this.props.history.push("/contacts");
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { currentContact } = this.state;

    return (
      <div>
        {currentContact ? (
          <div className="edit-form">
            <h4>Contact</h4>
            <form>
              <div className="form-group">
                <label htmlFor="title">Email</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={currentContact.email}
                  onChange={this.onChangeTitle}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={currentContact.description}
                  onChange={this.onChangeDescription}
                />
              </div>

              <div className="form-group">
                <label>
                  <strong>Status:</strong>
                </label>
                {currentContact.published ? "Published" : "Pending"}
              </div>
            </form>

            {currentContact.published ? (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updateStatus(false)}
              >
                UnPublish
              </button>
            ) : (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updateStatus(true)}
              >
                Publish
              </button>
            )}

            <button
              className="badge badge-danger mr-2"
              onClick={this.removeContact}
            >
              Delete
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateContent}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Contact...</p>
          </div>
        )}
      </div>
    );
  }
}

export default connect(null, { updateContact, deleteContact })(Contact);
