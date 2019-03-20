import React, { Component } from 'react';
import List from './List';
import uuid from 'uuid';

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

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items, { id: uuid.v4(), term: this.state.term }]


    });
  }

  render() {
    return (
      <div>
        <form className="ToDO" onSubmit={this.onSubmit}>
          <input value={this.state.term} onChange={this.onChange} />
          <button>Submit</button>
        </form>
        <List items={this.state.items} onDelete={this.onDelete} />
        </div>
    );
  }
}

export default ToDo;
