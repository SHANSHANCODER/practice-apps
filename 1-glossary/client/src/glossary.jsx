import axios from "axios";
import React from "react";

class Glossary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: this.props.word.keyword,
      meaning: this.props.word.meaning,
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChangeWord(val) {
    //console.log("word changed>>>>",val.target.value)
    var updatedWord = val.target.value;
    //set state
  }

  handleChangeMeaning(val) {
    //console.log("meaningchanged>>>>>",val.target.value)
    var updatedwordMeaning = val.target.value;
    //set state
  }
  handleSubmit(val) {
    // axios request to change the word
    //response
  }
  handleDelete() {
    // console.log("delete got clicked on ",this.props.word.keyword)
    var deleteworddata ={data: { keyword: this.props.word.keyword }};
   // console.log("deletewordata>>>>",deleteworddata);
    axios
      .delete("/glossories", deleteworddata)
      .then((res) => {
        console.log(res.data);
      })
      .catch(function (err) {
        console.log(err);
      });
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
            <button onClick={this.handleDelete}>delete</button>
            <lable>Meaning:</lable>
            <input
              type="text"
              value={this.props.word.meaning}
              onChange={this.handleChangeMeaning}
            />
            <input type="submit" value="edit" />
            <input type="submit" value="delete this word" />
          </div>
        </form>
      </>
    );
  }
}

export default Glossary;
