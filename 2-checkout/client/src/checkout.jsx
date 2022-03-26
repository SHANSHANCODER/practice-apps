import React from "React";
import axios from "axios"

class Checkout extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1 className="maintitle">Check out App</h1>
        <br />
        <br />
        <h2 className="subpage">Complete information </h2>

        <button className="bottombutton">Checkout! </button>
      </div>
    );
  }
}

export default Checkout;
