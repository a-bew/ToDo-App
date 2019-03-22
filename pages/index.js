import Layout from '../components/Layout';
import ToDo from '../components/ToDo';
const Index = () => (
  <Layout>

    <div>
     <div className="width card">
     <header class="card-body">
         <h1 class="card-title">To Do List</h1>
         <p class="card-text">A Quick to-do app with task completion color checker </p>
         <h6>Created by <a href="#">Adetola Bewaji</a></h6><span>Date: 22/03/2019</span>
     </header>
     <ToDo />
      </div>
      <style jsx>{`
        h6{
          left: 5px;
          float:left;
          top: 10px;
        }

        span{
          right: 5px;
          float:right;
          cursor:pointer;
          top: 10px;
        }

        .width{
          margin: auto;
          width: 50%;
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
          }

      `}</style>
    </div>


  </Layout>
)
export default Index;
