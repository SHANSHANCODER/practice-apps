import React from "react";
import ReactDOM from "react-dom";
import Glossary from "./glossary.jsx"

class Glossaries extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        console.log(this.props)
        return (
        <div>
             {this.props.words.map((word)=>(
                <Glossary key={word._id} 
                word={word} />))}  
        </div>
        )
    }
}

export default Glossaries;