import React from "React";
import axios from "axios";

class Checkout extends React.Component {
  constructor(props) {
    super(props);
  //  this.submitCheckout=this.submitCheckout.bind(this)
    this.changeToHome=this.changeToHome.bind(this)
  }
  //might need to move to page3 

//-------------->
changeToHome(){
this.props.setPage("home")
}

  render() {
    return (
      <div>
        <h1 className="maintitle">Checkout App</h1>
        <br />

        <br />
        <h2 className="subpage">Complete information </h2>
        <h2>Fullname---------------{this.props.data.name}</h2>
        <h2>Email address----------  {this.props.data.emailaddress}</h2>
        <h2>Address----------------    {this.props.data.address1}</h2>
        <h2>Address continue------- {this.props.data.address2 || ""}</h2>
        <h2>City------------------- {this.props.data.city || ""}</h2>
        <h2>State------------------    {this.props.data.state || ""}</h2>
        <h2>Zip code---------------    {this.props.data.zip}</h2>
        <h2>Phone number-----------    {this.props.data.phone || ""}</h2>
        <h2>CreditCard number------   {this.props.data.card}</h2>
        <h2>CreditCard expiration date    {this.props.data.expiry}</h2>
        <h2>CreditCard CVV---------    {this.props.data.cvv}</h2>
        <h2>Billing zipcode--------    {this.props.data.billzip}</h2>
          <br />
          <br />
          <br />
          <input
            className="submitbutton"
            type="submit"
            name="submit my information"
          />
        <button className="bottombutton" onClick={this.changeToHome}>Checkout! </button>
      </div>
    );
  }
}

export default Checkout;
