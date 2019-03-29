import React, { Component } from 'react';
import Layout from '../components/Layout';
import ToDo from '../components/ToDo';
import fetch from 'isomorphic-unfetch';

class Index extends Component{

  static getInitialProps = async function(){
      const res = await fetch("http://localhost:3000/api/items");
      const data = await res.json();
      return { items: data.items }
  };

  render(){
    return (
    <Layout>

      <div className = "row">
       <div className="width">
         <header className="card-body">
           <h1 className="card-title">To Do List</h1>
           <p className="card-text">A Quick to-do app with task completion color checker </p>
           <h6>Created by <a href="#">Adetola Bewaji</a></h6><span>Date: 22/03/2019</span>

         </header>

         <ToDo items={ this.props.items } />
        <style jsx>{`

          h6{
            left: 0px;
            float:left;
            font-size: 10px;
          }

          span{
            right: 5px;
            float:right;
            cursor:pointer;
            font-size: 10px;

          }

            #img{
              background-image: yellow;
              width: 100%;
              heigth: 20vh;
            }

            h1, p{
              color: purple;
              font-family: Arial black;
              text-align:center;
            }

            header{
              background-image: url("/static/img/task.jpg");
              background-repeat:  no-repeat;
              background-size: cover;

            }

            .width{
              margin: auto;
              width: 80%;
            }

            @media (min-width: 767px){
              .width{
                margin: auto;
                width: 50%;
              }
            }


        `}</style>
        </div>

      </div>


    </Layout>
    )
  }
}

export default Index;
