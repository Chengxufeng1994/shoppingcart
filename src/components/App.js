import React from 'react';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom'

import Navbar from './Navbar';
import Landing from './Landing';
import Home from './Home';
import Cart from './Cart';

class App extends React.Component {
    landingPage = () => {
        return (
            <Route exact path="/" component={Landing}></Route>
        )
    }
    defaultPage = () => {
        return (
            <div>
                <Navbar />
                <Route exact path="/shoppingcart" component={Home} />
                <Route exact path="/shoppingcart/cart" component={Cart} />
            </div>
        )
    }

    render() {
        return (
            <div className="App">
                <Router>
                    <Switch>
                        <Route exact path="/" component={this.landingPage}></Route>
                        <Route component={this.defaultPage}></Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App;