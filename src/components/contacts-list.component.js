import React, { Component} from "react";
import { connect } from "react-redux";
import {
  retrieveContacts,
  findContactsByTitle,
  deleteAllContacts,
  fetchMoreContacts,
  deleteContact
} from "../actions/contacts";
// import { Link } from "react-router-dom";
import "../index.css";
class ContactsList extends Component {
 
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.refreshData = this.refreshData.bind(this);
    this.setActiveContact = this.setActiveContact.bind(this);
    this.findByTitle = this.findByTitle.bind(this);
    // this.removeAllContacts= this.removeAllContacts.bind(this);
    
    this.state = {
      page: 1,
      currentContact: null,
      currentIndex: -1,
      searchTitle: "",
      view: "grid"
    };

    let pagesCounter = 2
    // Binds our scroll event handler
    window.onscroll = () =>{
      if (window.innerHeight + document.documentElement.scrollTop ===      document.documentElement.offsetHeight) {
        this.props.fetchMoreContacts(pagesCounter)
        pagesCounter++
       }
    }
  }

  componentDidMount() {
    this.props.retrieveContacts(this.state.page);
  }

  /**
   * 
   * @param {*} e 
   */

  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle,
    });
  }
  /**
   * 
   */

  refreshData() {
    this.setState({
      currentContact: null,
      currentIndex: -1,
    });
  }

  /**
   * 
   * @param {*} contact 
   * @param {*} index 
   */

  setActiveContact(contact, index) {
    debugger;
    this.setState({
      currentContact: contact,
      currentIndex: index,
    });
  }

  /**
   * 
   * @param {*} email
   * @description this function removes contact
   */

  removeContact(email) {
    let isConfirmed = window.confirm('Are you sure you want to delete this contact?')
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

  /**
   * 
   * @param {*} view
   * @description this function sets view i.e. list and grid
   * 
   */

  setView(view){
    this.setState({
      view: view,
    });
  }

  /**
   * 
   * @description 
   */

  findByTitle() {
    this.refreshData();
    this.props.findContactsByTitle(this.state.searchTitle);
  }

  render() {
    const { searchTitle, view} = this.state;
    const { contacts } = this.props;
   return (
      <>
        <div className="list row">
          <div className="col-md-8">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search by title"
                value={searchTitle}
                onChange={this.onChangeSearchTitle}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={this.findByTitle}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>

      <div className="list row">
      <div className="col-md-12 _m_all_20">
               <div className="views-grid" onClick={() => this.setView('grid')}>
                <span>Grid</span>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="1rem"
                height="1rem"
                x="0"
                y="0"
                viewBox="0 0 24 24"
                style={{enableBackground: "new 0 0 512 512"}}
              >
                <g>
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="m5 0h-4c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h4c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1z"
                    fill="#b3b3b3"
                    data-original="#000000"
                    class=""
                  ></path>
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="m5 9h-4c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h4c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1z"
                    fill="#b3b3b3"
                    data-original="#000000"
                    class=""
                  ></path>
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="m5 18h-4c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h4c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1z"
                    fill="#b3b3b3"
                    data-original="#000000"
                    class=""
                  ></path>
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="m14 0h-4c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h4c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1z"
                    fill="#b3b3b3"
                    data-original="#000000"
                    class=""
                  ></path>
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="m14 9h-4c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h4c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1z"
                    fill="#b3b3b3"
                    data-original="#000000"
                    class=""
                  ></path>
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="m14 18h-4c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h4c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1z"
                    fill="#b3b3b3"
                    data-original="#000000"
                    class=""
                  ></path>
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="m23 0h-4c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h4c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1z"
                    fill="#b3b3b3"
                    data-original="#000000"
                    class=""
                  ></path>
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="m23 9h-4c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h4c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1z"
                    fill="#b3b3b3"
                    data-original="#000000"
                    class=""
                  ></path>
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="m23 18h-4c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h4c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1z"
                    fill="#b3b3b3"
                    data-original="#000000"
                    class=""
                  ></path>
                </g>
              </svg>
               </div>

               <div className="views-list" onClick={() => this.setView('list')}>
                <span>List</span>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="1rem"
                height="1rem"
                x="0"
                y="0"
                viewBox="0 0 24 24"
                style={{enableBackground: "new 0 0 512 512"}}
                class=""
              >
                <g>
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="m5 0h-4c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h4c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1z"
                    fill="#b3b3b3"
                    data-original="#000000"
                    class=""
                  ></path>
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="m23 0h-14c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h14c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1z"
                    fill="#b3b3b3"
                    data-original="#000000"
                    class=""
                  ></path>
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="m5 9h-4c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h4c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1z"
                    fill="#b3b3b3"
                    data-original="#000000"
                    class=""
                  ></path>
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="m23 9h-14c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h14c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1z"
                    fill="#b3b3b3"
                    data-original="#000000"
                    class=""
                  ></path>
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="m5 18h-4c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h4c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1z"
                    fill="#b3b3b3"
                    data-original="#000000"
                    class=""
                  ></path>
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="m23 18h-14c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h14c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1z"
                    fill="#b3b3b3"
                    data-original="#000000"
                    class=""
                  ></path>
                </g>
              </svg>
               </div>
            </div>
      </div>
               
      {
          view === 'list' && 
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
              {contacts &&
                  contacts.map((contact, index) => (
                <tr>
                  <th scope="row">{index} 
                
                </th>
                  <td onClick={() => this.setActiveContact(contact, index)}
                      key={index}>  <img src={contact?.picture?.large} alt=""  className="thumb-img"/> {contact?.name?.title} {contact?.name?.first}{" "}
                      {contact?.name?.last}</td>
                  <td>{contact?.email}</td>
                  <td>{new Date(contact?.dob?.date).toDateString()}</td>
                  <td><button className="btn btn-primary">Edit</button> <button className="btn btn-danger" onClick={()=>this.removeContact(contact.email)}>Delete</button></td>
                </tr>
                  ))}
              </tbody>
           </table>
         </div>
        </div>

        }
        <div className="list row">
        {
          view ==='grid' && contacts &&
          contacts.map((contact, index) => (
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
                    {contact?.location?.city},{" "}
                    {contact?.location?.state} <br />
                    {contact?.location?.country},{" "}
                    {contact?.location?.postcode}
                  </h3>
                  <h3 className="email">
                    <a href={contact?.email}>{contact?.email}</a>
                  </h3>
                </div>
                <div className="contact">
                  <h3>
                    DOB: {new Date(contact?.dob?.date).toDateString()}{" "}
                  </h3>
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

export default connect(mapStateToProps, {
  retrieveContacts,
  findContactsByTitle,
  deleteAllContacts,
  fetchMoreContacts,
  deleteContact
})(ContactsList);