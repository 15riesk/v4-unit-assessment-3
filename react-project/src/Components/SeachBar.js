import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super();
    this.state = {
      userInput: "",
    };
    this.handleClear = this.handleClear.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(value) {
    this.setState({ userInput: value });
  }

  handleClick() {
    this.props.filterBooks(this.state.userInput);
  }

  handleClear() {
    this.props.reset();
    this.setState({
      userInput: "",
    });
  }

  render() {
    return (
      <div className="search-bar">
        <div className="search">
          <input
            onChange={(e) => this.handleChange(e.target.value.toLowerCase())}
          ></input>
          <button onClick={this.handleClick}>search</button>
          <button onClick={this.handleClear}>clear search</button>
        </div>
      </div>
    );
  }
}

export default SearchBar;
