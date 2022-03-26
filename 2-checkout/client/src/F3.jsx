import React from "React";
import axios from "axios";

class F3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      card: "",
      expiry: "",
      cvv: "",
      bzip: "",
    };
    this.submitF3 = this.submitF3.bind(this);
    this.addCard = this.addCard.bind(this);
    this.addExpiry = this.addExpiry.bind(this);
    this.addCvv = this.addCvv.bind(this);
    this.add = this.addState.bind(this);
    this.addZip = this.addZip.bind(this);
    this.changetoF3 = this.changetoF3.bind(this);
  }
  //------------>
  //update address line1
  addAdd1(val) {
    let value = val.target.value;
    // console.log(this.state.name);
    this.setState({ ad1: value });
  }
  //------------>
  //update address line2
  addAdd2(val) {
    let value = val.target.value;
    // console.log(this.state.email);
    this.setState({ ad2: value });
  }
  //------------>
  //update city
  addCity(val) {
    let value = val.target.value;
    // console.log(this.state.password);
    this.setState({ city: value });
  }
  //------------>
  //update State
  addState(val) {
    let value = val.target.value;
    // console.log(this.state.password);
    this.setState({ state: value });
  }

  //------------>
  //update State
  addZip(val) {
    let value = val.target.value;
    // console.log(this.state.password);
    this.setState({ zip: value });
  }

  //-------------->
  //handle submit form info and send the post request to server
  submitF2(e) {
    e.preventDefault();
    var f2info = {};
    f2info.ad1 = this.state.ad1;
    f2info.ad2 = this.state.ad2;
    f2info.city = this.state.city;
    f2info.state = this.state.state;
    f2info.zip = this.state.zip;
    //console.log("f1info>>>",f1info)
    //this.props.sendRequest(f1info);
    // let session_id = JSON.stringify(document.cookie, undefined, "\t");
    // console.log("sessionid>>>>>", session_id);
    axios
      .post("/f2", f2info)
      .then((res) => {
        console.log("axios f2 post request sent");
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //------------>
  //change to page F2
  changetoF3() {
    this.props.setPage("F3");
  }

  render() {
    return (
      <div>
        <h1 className="maintitle">Check out App</h1>
        <br />
        <br />
        <h2 className="subpage">Fill out My Address </h2>

        <form className="subpageinputform" onSubmit={this.submitF2}>
          <input
            type="text"
            name="add1"
            placeholder="1 Broadway "
            onChange={this.addAdd1}
          />
          <lable className="formlable">Address Line1</lable>
          <br />
          <br />
          <br />
          <input
            type="text"
            name="add2"
            placeholder="Unit 1 "
            onChange={this.addAdd2}
          />
          <lable className="formlable">Address Line2</lable>
          <br />
          <br />
          <br />
          <input
            type="text"
            name="City"
            placeholder="San Francisco"
            onChange={this.addCity}
          />
          <lable className="formlable"> City</lable>
          <br />
          <br />
          <br />

          <input
            type="text"
            name="State"
            placeholder="California"
            onChange={this.addState}
          />
          <lable className="formlable"> State </lable>
          <br />
          <br />
          <br />
          <input
            type="number"
            name="Zip"
            placeholder="94132"
            onChange={this.addZip}
          />
          <lable className="formlable"> Zipcode </lable>
          <br />
          <br />
          <br />
          <input
            className="submitbutton"
            type="submit"
            name="submit my address"
          />
        </form>
        <br />
        <br />
        <br />
        <button className="bottombutton" onClick={this.changetoF3}>
          Next page
        </button>
      </div>
    );
  }
}

export default F3;
