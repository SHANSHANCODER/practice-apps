import React from "react";
import axios from "axios";

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newword: { keyword: "", meaning: "" },
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeMeaning = this.handleChangeMeaning.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(val) {
    let newkeyword = val.target.value;
    this.setState({
      newword: { keyword: newkeyword, meaning: this.state.newword.meaning },
    });
   // console.log("under handleChangename>>>", this.state.newword);
  }

  handleChangeMeaning(val) {
    let newwordmeaning = val.target.value;
    this.setState({
      newword: { keyword: this.state.newword.keyword, meaning: newwordmeaning },
    });
    console.log("under handleChange meaning>>>", this.state.newword);
  }

  handleSubmit(val) {
    val.preventDefault();
    //console.log("add handle submit");
    axios
      .post("/glossories", this.state.newword)
      .then((res) => {
        console.log(res.data);
      })
      .catch(function (err) {
        console.log(err);
      });

    this.setState({
      newword: { keyword: "", meaning: "" }
    });
  
  }

  render() {
    return (
      <>
        <form className="addform" onSubmit={this.handleSubmit}>
          <lable>
            <input
              type="text"
              name="Add Newword"
              placeholder="Add Newword"
              onChange={this.handleChangeName}
            />
          </lable>
          <input className="meaninginput"
            type="text"
            name="Newword Meaning"
            placeholder="Newword Meaning"
            onChange={this.handleChangeMeaning}
          />
          <input type="submit" value="Add!" />
        </form>
      </>
    );
  }
}

export default Add;
