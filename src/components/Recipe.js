import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addShipping, subtractShipping } from '../actions'

class Recipe extends Component {
    handleChecked = (event) => {
        console.log(event.target.checked)
        if (event.target.checked) {
            this.props.addShipping();
        }
        else {
            this.props.subtractShipping();
        }
    }

    renderList() {
        return (
            <div className="container">
                <div className="collection">
                    <li className="collection-item">
                        <label>
                            <input type="checkbox" ref="shipping" onChange={this.handleChecked} />
                            <span>Shipping(+6$)</span>
                        </label>
                    </li>
                    <li className="collection-item"><b>Total: {this.props.total} $</b></li>
                </div>
                <div className="checkout">
                    <button className="waves-effect waves-light btn">Checkout</button>
                </div>
            </div>
        )
    }
    render() {
        return (
            <div>
                {this.renderList()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        addedItems: state.addedItems,
        total: state.total
    }
}

export default connect(mapStateToProps,
    { addShipping, subtractShipping }
)(Recipe);