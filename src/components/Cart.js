import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem, addQuantity, subtractQuantity } from '../actions'
import Recipe from './Recipe'

class Cart extends Component {
    //to remove the item completely
    handleRemove = (id) => {
        this.props.removeItem(id);
    }
    handleAddQuantity = (id) => {
        this.props.addQuantity(id)
    }
    handleSubtractQuantity = (id) => {
        this.props.subtractQuantity(id)
    }

    addedItemsList() {
        if (this.props.items.length !== 0) {
            return (
                this.props.items.map(item => {
                    return (
                        <li className="collection-item avatar" key={item.id}>
                            <img src={item.image} alt="" />
                            <div className="item-desc">
                                <span className="title">{item.title}</span>
                                <p>{item.description}</p>
                                <p><b>Price: {item.price}$</b></p>
                                <p>
                                    <b>Quantity: {item.quantity}</b>
                                </p>
                                <div className="add-remove">
                                    <Link to="/cart"
                                        onClick={() => this.handleAddQuantity(item.id)}>
                                        <i className="material-icons">arrow_drop_up</i>
                                    </Link>
                                    <Link to="/cart"
                                        onClick={() => this.handleSubtractQuantity(item.id)}
                                    >
                                        <i className="material-icons">arrow_drop_down</i>
                                    </Link>
                                </div>
                                <button
                                    className="waves-effect waves-light btn pink remove"
                                    onClick={() => this.handleRemove(item.id)}
                                >Remove</button>
                            </div>
                        </li>
                    )
                })
            )
        } else {
            return (
                <p>Nothing.</p>
            )
        }
    }

    render() {
        return (
            <div className="container">
                <div className="cart">
                    <h5>You have ordered:</h5>
                    <ul className="collection">
                        {this.addedItemsList()}
                    </ul>
                    <Recipe />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.addedItems
    }
}

export default connect(mapStateToProps, { removeItem, addQuantity, subtractQuantity })(Cart)