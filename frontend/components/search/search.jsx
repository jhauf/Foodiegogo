import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
    this.setQuery = this.setQuery.bind(this);
  }

setQuery (e) {
  e.preventDefault();
  const that = this;
  this.setState({query: e.target.value}, () => {
    that.props.queryDatabase(that.state.query);
  });
}

  render() {
    return (<div>
    <label>
      <input type="text"
        placeholder="Search"
        value={this.state.query}
        onChange={this.setQuery}
        className="search-bar" />
    </label>
  </div>);
  }

}

export default Search;
