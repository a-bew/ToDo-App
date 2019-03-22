import React, { Component } from 'react';
import List from './List';
import uuid from 'uuid';
import PropTypes from 'prop-types';

let  count = 0
class ToDo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      term: '',
      count : count++,
//      dummyTerm: { id: this.state.count, term: term },
      items: []
    };
  }

  onDelete = (id) => {
    let items = this.state.items;
    let index = items.findIndex(x => x.id === id);
    items.splice(index, 1);
    this.setState({items:items});
  }

  onChange = (event) => {
    this.setState({id: this.state.items.length, term: event.target.value });
  }

  checkBox = (id, item, isChecked, done) => {
    let items = this.state.items;
    items.forEach(object => {

      if (object.id == id){

        console.log(id)
        object.getname = item;
        object.isChecked = isChecked;
        object.setColor = done
      }
    });
    console.log(items)
    this.setState({items:items})
 }
  onSubmit = (event) => {
    event.preventDefault();
    if (!this.state.term) return
    this.setState({
      term: '',
      items: [...this.state.items, { id: uuid.v4(), term: this.state.term, getname : "", isChecked: "", setColor: ""}]
    });
  }


  render() {
    return (
      <div>
        <div className="width marginbuttom">

          <form className="ToDO" onSubmit={this.onSubmit}>
            <input placeholder="Add a new to-do item" className="form-control" value={this.state.term} onChange={this.onChange} />
            <button className="btn btn-primary btn-block">Submit Task</button>
          </form>
       </div>

      <div className="tasks">
         <List  items={this.state.items} onDelete={this.onDelete} checkBox = {this.checkBox} />
       </div>


        <style jsx>{`
        .task{
            margin-top: 20px 0;
          }
          .marginbuttom{
            margin: 10px 0;
          }



          ul li {
              position: relative;
              padding: 5px;
              margin: 5px;
              background-color: #ededed;
              border: 2px inset #ededed;
          }
        `}</style>

      </div>
    );
  }
}

ToDo.propTypes = {
  checkBox: PropTypes.func.isRequired,
}

export default ToDo;
