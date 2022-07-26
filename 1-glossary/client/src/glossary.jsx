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
    this.handleChangeMeaning = this.handleChangeMeaning.bind(this);
    this.handleChangeWord = this.handleChangeWord.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeWord(val) {
    console.log("word changed>>>>", val.target.value);
    var updatedWord = val.target.value;
    this.setState({ word: updatedWord });
  }

  handleChangeMeaning(val) {
    console.log("meaningchanged>>>>>", val.target.value);
    var updatedwordMeaning = val.target.value;
    this.setState({ meaning: updatedwordMeaning });
  }

  handleSubmit(val) {

    var updatedword = {};
   // update[keywordV] = this.state.meaning;
   //{_id: id, update: {keyword:word,meaning:meaning}}
    updatedword._id = this.props.word._id 
    updatedword.update = {}
    updatedword.update.keyword = this.state.word;
    updatedword.update.meaning= this.state.meaning;
    console.log(updatedword);
 
    axios
      .put("/glossories", updatedword)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleDelete() {
    // console.log("delete got clicked on ",this.props.word.keyword)
    var deleteworddata = { data: { keyword: this.props.word.keyword } };
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
              value={this.state.word}
              onChange={this.handleChangeWord}
            />
            <lable>Meaning:</lable>
            <input
              type="text"
              value={this.state.meaning}
              onChange={this.handleChangeMeaning}
            />
            <input type="submit" value="edit" />
            <input
              type="submit"
              value="delete this word"
              onClick={this.handleDelete}
            />
          </div>
        </form>
      </>
    );
  }
}

export default Glossary;
