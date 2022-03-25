import React from "react";
import ReactDOM from "react-dom";
import Glossaries from "./glossaries.jsx";
import Add from "./add.jsx";
import axios from "axios";
import Glossary from "./glossary.jsx";

var sampledata = [
  {
    word_ID: 1,
    keyword: "Accuracy",
    meaning:
      "A term used in survey research to refer to the match between the target population and the sample.",
  },
  {
    word_ID: 2,
    keyword: "Bell curve",
    meaning:
      "A frequency distribution statistics. Normal distribution is shaped like a bell.",
  },
  {
    word_ID: 3,
    keyword: "Causality",
    meaning: "The relation between cause and effect.",
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    this.updatewords=this.updatewords.bind(this)
  }

  updatewords() {
    console.log("updatewords is envoked")
    axios
    .get("/glossories")
    .then((res) => {
      console.log(res.data);
       this.setState({ data: res.data });
     // this.updatewords(data)
    })
    .catch((err) => {
      console.log(err);
    });
  }

  componentDidMount() {
    this.updatewords()
    console.log("mounted");
  }

  render() {
    console.log("rendering");
    return (
      <div>
        <h1>Glossary List </h1>
        <Glossaries words={this.state.data} />
        <br></br>
        <Add updatewords={this.updatewords} />
      </div>
    );
  }
}

//   render(){
//     return (
//       <div>
//      <p>Hello, World!</p>
//   </div>
//     )
//   }
// }

// render(
//   <div>
//     <p>Hello, World!</p>
//   </div>,
//   document.getElementById("root")
// );

ReactDOM.render(<App />, document.getElementById("root"));
