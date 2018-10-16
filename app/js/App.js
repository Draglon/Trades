import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Router, Route, Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

// Components
var Header = require('./Header.js');
var Footer = require('./Footer.js');
// Pages
var Home = require('./pages/Home.js');
var News = require('./pages/News.js');
var Trade = require('./pages/Trade.js');
var Exchange = require('./pages/Exchange.js');
var Wallet = require('./pages/Wallet.js');
var NotFound = require('./pages/NotFound.js');

class App extends Component {
    render() {
        return(
            <Router history={history}>
                {window.location.pathname === '/admin' ? 
                    <div>
                        {/* <Switch>
                            <Route path='/admin' component={AdminPanel} />
                        </Switch> */}
                    </div>
                :
                    <div>
                        <Header />
                        <Switch>
                            <Route path='/' exact component={Home} />
                            <Route path='/news' component={News} />
                            <Route path='/trade' component={Trade} />
                            <Route path='/exchange' component={Exchange} />
                            <Route path='/wallet' component={Wallet} />
                            <Route component={NotFound} />
                        </Switch>
                        <Footer />
                    </div>
                }
            </Router>
        );
    }
}

export default connect(
    state => ({

    }),
    dispatch => ({
        onAddTrack: (trackName) => {
            dispatch({type: 'ADD_TRACK', payload: trackName })
        }
    })
)(App);