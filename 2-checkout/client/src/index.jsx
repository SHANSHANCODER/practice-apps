import React from "react";
import ReactDOM from "react-dom";
import F1 from "./F1.jsx";
import F2 from "./F2.jsx";
import F3 from "./F3.jsx";
import Checkout from "./checkout.jsx";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "home",
      data:{}
    };
    this.setPage=this.setPage.bind(this)
    this.sendRequest=this.sendRequest.bind(this)
    this.changePage=this.changePage.bind(this)
    this.renderData=this.renderData.bind(this)
    // console.log(document.cookie)
  }
  //----------------->
  //set the page to render
  setPage(val){
  this.setState({
    page:val
  })
  }

  //----------------->
  //send axios request
  sendRequest(val){
    console.log("sendrequest>>>",val)
   axios.post("/basic",val)
   .then((res)=>{
     console.log("axios res.data".res.data)
   })
   .catch(err=>{
     console.log(err)
   })
  }

//------------------>
//mainpage on click
changePage(){
  this.setState({page:"F1"
  })
}

//------------------>
//getting data from checkout page and update the dom
renderData(val){
  this.setState({data:val})
  console.log(this.state.data)
}
  render() {
    if (this.state.page === "home") {
      return (
        <div>
          <h1 className="maintitle">Checkout App</h1>
          <br />
          <br />
          <h2 className="subpage">Home Page </h2>
          <p>
            <code>
              Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}
            </code>
          </p>
          <button className="bottombutton" onClick={this.changePage}>Start checkout</button>
        </div>
      );
    } else if (this.state.page === "F1") {
      return <F1 setPage={this.setPage}
      sendRequest={this.sendRequest}/>;
    } else if (this.state.page === "F2") {
      return <F2 setPage={this.setPage}
      sendRequest={this.sendRequest}/>;
    } else if (this.state.page === "F3") {
      return <F3 setPage={this.setPage}
      renderData={this.renderData}
      sendRequest={this.sendRequest}/>;
    } else if (this.state.page === "checkout") {
      //need to refactor here. The homepage should be in else statement 
      return <Checkout setPage={this.setPage} 
     
      data={this.state.data}/>;
    }
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
