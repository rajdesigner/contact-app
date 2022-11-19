import React, { Component } from "react";
import { connect } from "react-redux";
import {
  retrieveContacts,
  findContactsByTitle,
  deleteAllContacts,
  fetchMoreContacts
} from "../actions/contacts";
// import { Link } from "react-router-dom";
import "../index.css";
import SearchBar from "../utils/searchbar";
import View from "../utils/view";
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
      view: "grid",
    };

    let pagesCounter = 2;
    // Binds our scroll event handler
    window.onscroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        this.props.fetchMoreContacts(pagesCounter);
        pagesCounter++;
      }
    };
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
   * @param {*} view
   * @description this function sets view i.e. list and grid
   *
   */

  setView(view) {
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
    const { searchTitle, view } = this.state;
    const { contacts } = this.props;
    const SearchBarMemo = React.memo(SearchBar);
    const ContactsMemo = React.memo(View);
    return (
      <>
        <div className="list row">
          {<SearchBarMemo contactsList={contacts} whattosearch = {searchTitle} />}
        </div>

        <div className="list row">
          <div className="col-md-12 _m_all_20">
            <div className="views-grid" onClick={() => this.setView("grid")}>
              <span>Grid</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="1rem"
                height="1rem"
                x="0"
                y="0"
                viewBox="0 0 24 24"
                style={{ enableBackground: "new 0 0 512 512" }}
              >
                <g>
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="m5 0h-4c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h4c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1z"
                    fill="#b3b3b3"
                    data-original="#000000"
                    className=""
                  ></path>
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="m5 9h-4c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h4c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1z"
                    fill="#b3b3b3"
                    data-original="#000000"
                    className=""
                  ></path>
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="m5 18h-4c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h4c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1z"
                    fill="#b3b3b3"
                    data-original="#000000"
                    className=""
                  ></path>
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="m14 0h-4c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h4c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1z"
                    fill="#b3b3b3"
                    data-original="#000000"
                    className=""
                  ></path>
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="m14 9h-4c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h4c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1z"
                    fill="#b3b3b3"
                    data-original="#000000"
                    className=""
                  ></path>
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="m14 18h-4c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h4c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1z"
                    fill="#b3b3b3"
                    data-original="#000000"
                    className=""
                  ></path>
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="m23 0h-4c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h4c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1z"
                    fill="#b3b3b3"
                    data-original="#000000"
                    className=""
                  ></path>
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="m23 9h-4c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h4c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1z"
                    fill="#b3b3b3"
                    data-original="#000000"
                    className=""
                  ></path>
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="m23 18h-4c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h4c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1z"
                    fill="#b3b3b3"
                    data-original="#000000"
                    className=""
                  ></path>
                </g>
              </svg>
            </div>

            <div className="views-list" onClick={() => this.setView("list")}>
              <span>List</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="1rem"
                height="1rem"
                x="0"
                y="0"
                viewBox="0 0 24 24"
                style={{ enableBackground: "new 0 0 512 512" }}
                className=""
              >
                <g>
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="m5 0h-4c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h4c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1z"
                    fill="#b3b3b3"
                    data-original="#000000"
                    className=""
                  ></path>
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="m23 0h-14c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h14c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1z"
                    fill="#b3b3b3"
                    data-original="#000000"
                    className=""
                  ></path>
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="m5 9h-4c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h4c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1z"
                    fill="#b3b3b3"
                    data-original="#000000"
                    className=""
                  ></path>
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="m23 9h-14c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h14c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1z"
                    fill="#b3b3b3"
                    data-original="#000000"
                    className=""
                  ></path>
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="m5 18h-4c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h4c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1z"
                    fill="#b3b3b3"
                    data-original="#000000"
                    className=""
                  ></path>
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="m23 18h-14c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h14c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1z"
                    fill="#b3b3b3"
                    data-original="#000000"
                    className=""
                  ></path>
                </g>
              </svg>
            </div>
          </div>
        </div>

        {<ContactsMemo contacts={contacts} views={view} />}
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
  fetchMoreContacts
})(ContactsList);
