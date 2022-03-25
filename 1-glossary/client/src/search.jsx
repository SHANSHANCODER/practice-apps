import React from "react";
import axios from "axios";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchword: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(val) {
    let keyword = val.target.value;
    console.log("searchkeyword>>>>>", keyword);
    this.setState({ searchword: keyword });
  }
  handleSubmit(e) {
    e.preventDefault();
    alert("handlesubmit got invoked");
    let searchobj = {};
    searchobj.searchword = this.state.searchword;
    console.log("searchobj>>>>>>>>>", searchobj);
    console.log("searchparams>>>>>", { params: searchobj });
    // console.log("searchobj for axios>>>>", searchobj);
    axios
      .get("/glossories/search", { params: searchobj })
      .then((res) => {
        //console.log("frontend res>>>>", res.data);
        this.props.updatesearch(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <>
        <form className="search" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="Search Keyword"
            placeholder="Search Keyword"
            onChange={this.handleChange}
          />
          <input type="submit" value="Go!" />
        </form>
      </>
    );
  }
}

export default Search;
