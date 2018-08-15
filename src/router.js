import React from 'react';
import { Router, Route, Switch,HashRouter } from 'dva/router';
import App from './components/Index';
import Products from './routes/Products';
import List from './routes/List'

function RouterConfig({ dispatch }) {
  return (
    <HashRouter basename="/" >
        <App>
            <Route path="/products" exact component={Products} />
            <Route path="/list" exact component={List} />
            <Route exact path="/test1" render={() => <h1>路由测试1</h1>}></Route>
            <Route exact path="/test2" render={() => <h1>路由测试2</h1>}></Route>
        </App>
    </HashRouter>
    // <Router history={history}>
    //   <Switch>
    //     <Route path="/" exact component={IndexPage} />
    //     <Route path="/products" exact component={Products} />
    //     <Route path="/list" exact component={List} />
    //     <Route exact path="/test1" render={() => <h1>路由测试1</h1>}></Route>
    //     <Route exact path="/test2" render={() => <h1>路由测试2</h1>}></Route>
    //   </Switch>
    // </Router>
  );
}

export default RouterConfig;

// import React, { Component } from 'react';
// import { HashRouter, Route } from 'react-router-dom';

// import App from './components';
// import UserList from './components/UserList';
// import PostList from './components/PostList';

// const AppRouter = ({dispatch}) => (
//     <HashRouter basename="/" >
//         <App>
//             <Route exact path="/page1" component={UserList}></Route>
//             <Route exact path="/page2" component={PostList}></Route>
//             <Route exact path="/page3" render={() => <h1>路由测试</h1>}></Route>
//             <Route exact path="/page4" render={() => <h1>路由测试</h1>}></Route>
//         </App>
//     </HashRouter>
// );

// export default AppRouter;
