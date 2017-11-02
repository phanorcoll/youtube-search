import React, { Component } from 'react';
import VideoList from './VideoList.jsx';
import VideoDetail from './VideoDetail.jsx';
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;


export default class App extends Component {
    render() {
        return (
            <Router>
                <div className='container'>
                    <Switch>
                        <Route exact path='/' component={VideoList} />
                        <Route exact path='/detail' component={VideoDetail} />
                        {/* <Route exact path='/battle' component={Battle} />
                        <Route path='/battle/results' component={Results} />
                        <Route path='/popular' component={Popular} /> */}
                        <Route render={function () {
                            return <p>Not Found!</p>
                        }} />
                    </Switch>
                    <footer>
                        <div className="footer-info">
                            dev by <a href="http://www.phanorcoll.com">Phanor Coll</a>
                        </div>
                    </footer>
                </div>
            </Router>
        );
    }
}