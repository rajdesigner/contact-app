import React, { Component} from "react";

class SearchBar extends Component  {
    constructor(props){
        super(props);
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
        ;
      </>
    );
  }
}

export default SearchBar;
