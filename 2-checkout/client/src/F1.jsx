import React from "React";
import axios from "axios";

class F1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
    };
    this.submitF1 = this.submitF1.bind(this);
    this.addName = this.addName.bind(this);
    this.addPassword = this.addPassword.bind(this);
    this.addEmail = this.addEmail.bind(this);
    this.changetoF2 = this.changetoF2.bind(this);
  }
  //------------>
  //update name info
  addName(val) {
    let value = val.target.value;
    // console.log(this.state.name);
    this.setState({ name: value });
  }
  //------------>
  //update email
  addEmail(val) {
    let value = val.target.value;
    // console.log(this.state.email);
    this.setState({ email: value });
  }
  //------------>
  //update name info
  addPassword(val) {
    let value = val.target.value;
    // console.log(this.state.password);
    this.setState({ password: value });
  }
  //-------------->
  //handle submit form info and send the post request to server
  submitF1(val) {
    val.preventDefault()
    var f1info = {};
    f1info.name = this.state.name;
    f1info.email = this.state.email;
    f1info.password = this.state.password;
    //console.log("f1info>>>",f1info)
    //this.props.sendRequest(f1info);
    let session_id = JSON.stringify(document.cookie, undefined, "\t");
    console.log("sessionid>>>>>", session_id);
    axios
      .post("/f1", f1info)
      .then((res) => {
        console.log("axios f1 post request sent");
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

  }

  //------------>
  //change to page F2
  changetoF2() {
    this.props.setPage("F2");
  }

  render() {
    return (
      <div>
        <h1 className="maintitle">Checkout App</h1>
        <br />
        <br />
        <h2 className="subpage">Basica Personal Inforamtion </h2>

        <form className="subpageinputform" onSubmit={this.submitF1}>
          <input
            type="text"
            name="Full Name"
            placeholder="John Doe"
            onChange={this.addName}
          />
          <lable className="formlable">Full Name</lable>
          <br />
          <br />
          <br />

          <input
            type="email"
            name="Email Address"
            placeholder="johndoe@gmail.com"
            onChange={this.addEmail}
          />
          <lable className="formlable"> Email Address</lable>
          <br />
          <br />
          <br />

          <input
            type="password"
            name="Password"
            placeholder="abc123"
            onChange={this.addPassword}
          />
          <lable className="formlable"> Password</lable>
          <br />
          <br />
          <br />
          <input
            className="submitbutton"
            type="submit"
            name="submit my information"
          />
        </form>
        <br />
        <br />
        <br />
        <button className="bottombutton" onClick={this.changetoF2}>
          Next page{" "}
        </button>
      </div>
    );
  }
}

export default F1;
