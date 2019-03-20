import React, { Component } from 'react';

class List extends Component{
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  deleteItem = (item) => {
    console.log(item)

    this.props.onDelete(item);
  }

  render() {
      return (
    <ul>
      {
        this.props.items.map((item, index) => <li key={index}>{item.term}<a href='#' onClick= {this.deleteItem.bind(this, item.id) }> X </a></li>)
      }
    </ul>
    );
  }
}
export default List;
