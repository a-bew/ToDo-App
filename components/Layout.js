import Head from 'next/head';

const Layout = (props) => (
  <div>
    <Head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width"/>
    <meta name="description" content=""/>
    <meta name="keywords" content=""/>
    <meta name="author" content="Adetola Bewaji"/>
    <title>To Do App</title>
    <link rel="stylesheet" type = "text/css" href="/static/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
    <link rel="stylesheet" type = "text/css" href="/static/css/style.css"/>
    </Head>

    { props.children}

  </div>
)

export default Layout;