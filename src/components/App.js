import React from 'react';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom'

import Navbar from './Navbar';
import Home from './Home';
import Cart from './Cart'

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/cart" component={Cart} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App;