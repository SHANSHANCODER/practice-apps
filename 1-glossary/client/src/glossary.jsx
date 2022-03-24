import React from "react";

class Glossary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: this.props.word.keyword,
      meaning: this.props.word.meaning,
    };

  }

  handleChangeWord(val) {
   console.log("word changed>>>>",val.target.value)
   var updatedWord= val.target.value;
   //set state
  }

  handleChangeMeaning(val) {
    console.log("meaningchanged>>>>>",val.target.value)
    var updatedwordMeaning= val.target.value;
    //set state
   }
  handleSubmit(val) {
  // axios request to change the word
  //response 
  }
  handleDelelte(){
  // axios request to delete word 
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div>
            <lable>Word:</lable>
            <input
              type="text"
              value={this.props.word.keyword}
              onChange={this.handleChangeWord}
            />
            <lable>Meaning:</lable>
            <input
              type="text"
              value={this.props.word.meaning}
              onChange={this.handleChangeMeaning}
            

            />
            <input type="submit" value="edit" />
            <input type="submit" value="delete this word" 
            onChange={this.handleDelelte}/>
          </div>
        </form>
      </>
    );
  }
}

export default Glossary;
