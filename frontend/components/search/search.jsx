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
  <label className="search">
      <input type="text"
        placeholder="Search"
        value={this.state.query}
        onChange={this.setQuery}
        className="search-bar" />
    </label>
    <div className="searchPic">
      <img src="http://res.cloudinary.com/dps0ohgkp/image/upload/v1478849027/1478870589_icon-111-search_f0b14j.png"/>
    </div>
  </div>);
  }

}

export default Search;
