import React from "react";
import ReactDOM from "react-dom";
import Glossary from "./glossary.jsx"

class Glossaries extends React.Component{
    constructor(props){
        super(props)
// this.handleChange.bind(this);
// this.handleChange.bind(this);
// this.state={
    console.log(props)
// };
    }
  
// handleChange(){

// }
// handleSubmit(){

// }

    render(){
        console.log(this.props)
        return (
        <div>
             {this.props.words.map((word)=>(
                <Glossary key={word.keyword} 
                word={word} />))}  
        </div>
        )
    }
}

export default Glossaries;