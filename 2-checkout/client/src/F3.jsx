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
    this.addBzip = this.addBzip.bind(this);
    this.changetoCheckout = this.changetoCheckout.bind(this);
  }
  //------------>
  //update card number
  addCard(val) {
    let value = val.target.value;
    // console.log(this.state.name);
    this.setState({ card: value });
  }
  //------------>
  //update expiration data
  addExpiry(val) {
    let value = val.target.value;
    // console.log(this.state.email);
    this.setState({ expiry: value });
  }
  //------------>
  //update cvv
  addCvv(val) {
    let value = val.target.value;
    // console.log(this.state.password);
    this.setState({ cvv: value });
  }
  //------------>
  //update billing zip
  addBzip(val) {
    let value = val.target.value;
    // console.log(this.state.password);
    this.setState({ bzip: value });
  }

  //-------------->
  //handle submit form info and send the post request to server
  submitF3(e) {
    e.preventDefault();
    var f3info = {};
    f3info.card = this.state.card;
    f3info.expiry = this.state.expiry;
    f3info.cvv = this.state.cvv;
    f3info.bzip = this.state.bzip;
    //console.log("f1info>>>",f1info)
    //this.props.sendRequest(f1info);
    // let session_id = JSON.stringify(document.cookie, undefined, "\t");
    // console.log("sessionid>>>>>", session_id);
    axios
      .post("/f3", f3info)
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
  //send axios request to get data for rendering checkout page
  changetoCheckout() {
        axios.get("/checkout")
        .then((res)=>{
        console.log(res.data)
        this.props.renderData(res.data[0])
        })
        .catch((err)=>{
          console.log(err)
        })
        this.props.setPage("checkout");
      }
  

  render() {
    return (
      <div>
        <h1 className="maintitle">Checkout App</h1>
        <br />
        <br />
        <h2 className="subpage">Credit Card Information </h2>

        <form className="subpageinputform" onSubmit={this.submitF3}>
          <input
            type="number"
            name="creditcardnumber"
            placeholder="160000000000"
            onChange={this.addCard}
          />
          <lable className="formlable">Credit Card Number</lable>
          <br />
          <br />
          <br />
          <input
            type="text"
            name="expiration"
            placeholder="3022"
            onChange={this.addExpiry}
          />
          <lable className="formlable">Card Expiriation Data</lable>
          <br />
          <br />
          <br />
          <input
            type="number"
            name="Cvv"
            placeholder="000"
            onChange={this.addCvv}
          />
          <lable className="formlable"> Card CVV(on the back)</lable>
          <br />
          <br />
          <br />
          <input
            type="number"
            name="Zip"
            placeholder="94132"
            onChange={this.addBzip}
          />
          <lable className="formlable"> Billing Zipcode </lable>
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
        <button className="bottombutton" onClick={this.changetoCheckout}>
          Next page
        </button>
      </div>
    );
  }
}

export default F3;
