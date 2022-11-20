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
 * SearchBar component
 * ----------	---	---------------------------------------------------------
 */
import React, { Component} from "react";

class SearchBar extends Component  {
 /**
   *
   * @description
   */

  findByTitle() {
    this.refreshData();
    this.props.findContactsByTitle(this.state.searchTitle);
  }

  render(props) {

    return (
      <>
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by title"
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
      </>
    );
  }
}

export default SearchBar;
