import Layout from '../components/Layout';
import ToDo from '../components/ToDo';
const Index = () => (
  <Layout>

    <div class = "row">
     <div className="width card">
     <header className="card-body">
       <h1 className="card-title">To Do List</h1>
       <p className="card-text">A Quick to-do app with task completion color checker </p>
       <h6>Created by <a href="#">Adetola Bewaji</a></h6><span>Date: 22/03/2019</span>
     </header>
     <ToDo />
      </div>
      <style jsx>{`
        h6{
          left: 5px;
          float:left;
        }

        span{
          right: 5px;
          float:right;
          cursor:pointer;
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

          h1{
            font-size: 5em;
          }
          p{
            font-size: 1.5em;
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


  </Layout>
)
export default Index;
