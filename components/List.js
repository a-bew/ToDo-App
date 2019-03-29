import React, { Component } from 'react';
import Layout from './Layout';
import PropTypes from 'prop-types';

class List extends Component{

  handleChange =(event)=>{
      const id = event.target.parentNode.id;

      const item = event.target.name;
      const isChecked = event.target.checked;
      let done = "undone"
      if (isChecked){
        done = "done"
      }
      this.props.checkBox(id, item, isChecked, done);
    }

  deleteItem = (item, index) => {
    this.props.onDelete(item);
  }

  render() {
      return (

        <Layout>
           <div>
           <li className="mark-label" key="mark-label">Mark as Done<a className="delete" href='#' >remove item</a></li>
              <ul className=" list-group list-group-flush">
                {
                     Array.from(this.props.items).map((item, index)   => 
                     <li id={item.id} className={item.setColor+" list-group-item"} key={index}>
                        <input type="checkbox" name = { item.id+`checkbox` } value={item} className="check" onChange = {this.handleChange} key={index} checked= {item.isChecked}/><span>{item.term}</span>
                        <a className="delete" role="button"  href='#' onClick= {this.deleteItem.bind(this, item.id) }>Delete</a>
                      </li>)
                }
              </ul>

            <style jsx>{`
              ul li {
                  position: relative;
                  padding: 1px;
                  margin: 5px;
                  background-color: #ededed;
                  border: 2px inset #ededed;
              }

              li a{
                
                right: 5px;
                cursor:pointer;
                top: 10px;
              }

              input.check{
                float: left;
                width: 10%;
                box-sizing: border-box;
                margin: 5px;
              }

              span{
                float: left;
                box-sizing: border-box;
                width: 70%;
              }

              li.mark-label{
                display:inline;
                font-size: 12px;
              }

              input[type="checkbox"]{
                zoom: 1.5;
              }

              li a.delete {
                  display: inline;
                  float:right;
                  box-sizing: border-box;
                  margin: 5px 5px 0 0;
  }

              ul li.done{
                background-color: #e3ff00;
              }

              ul li.undone{
                background-color: #f5f5f5;
              }
            `}</style>
        </div>
        </Layout>

    );
  }

}

export default List;
