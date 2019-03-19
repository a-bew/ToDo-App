import Head from 'next/head';
import ToDo from './toDo';

const Layout = (props) => (
  <div>
    <Head>
    <title>To Do App</title>
    <link rel=""/>
    </Head>
    { props.children}

    <ToDo />
  </div>
)

export default Layout;
