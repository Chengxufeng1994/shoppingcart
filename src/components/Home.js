import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions';

class Home extends Component {

    handleClick(id) {
        this.props.addToCart(id)
    }

    renderList() {
        return (
            this.props.items.map(item => {
                return (
                    <div className="col s4" key={item.id}>
                        <div className="card">
                            <div className="card-image">
                                <img src={item.image} alt="" width="250" />
                                <span className="card-title pink-text text-lighten-2">
                                    {item.title}
                                </span>
                                <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={() => { this.handleClick(item.id) }}>
                                    <i className="material-icons">add</i>
                                </span>
                            </div>
                            <div className="card-content">
                                <p>{item.description}</p>
                                <p><b>Price: {item.price}$</b></p>
                            </div>
                        </div>
                    </div >
                )
            })
        )
    }
    render() {
        return (
            <div className="container">
                <h3 className="center">Our items</h3>
                <div className="row">
                    {this.renderList()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => { dispatch(addToCart(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)