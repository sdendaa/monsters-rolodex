import { Component } from "react";

class SearchBox extends Component {
  render() {
    return (
      <input
        type="search"
        className="search-box"
        placeholder="search monsters"
        onChange={this.props.onSearchChange}
      />
    );
  }
}
export default SearchBox;
