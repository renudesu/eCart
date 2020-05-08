import React from 'react';
import { withRouter } from 'react-router-dom';
import { cartOrder } from '../../../services/order';
import { getCart } from '../../../services/cart';

import { connect } from 'react-redux';
import { ecartAction } from '../../../store/action';
class UserCart extends React.Component {
    constructor() {
        super();
        this.state = {
            cartDeatails: {},
            shippingAddress: '',
            phoneNumber: ''
        }
    }
    componentDidMount() {
        this.getCallCart();
    }
    getCallCart = () => {
        const userInfo = localStorage.getItem('user');
        const user = JSON.parse(userInfo);
        getCart(user._id).then((success) => {
            console.log(success)
           
            this.setState({
                cartDeatails: success.data
            })
        })
    }
    onChangeText = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    buyBooks = () => {
        var userInfo = localStorage.getItem('user');
        var user = JSON.parse(userInfo);
        var cartOrders = {
            userId: user._id,
            shippingAddress: this.state.shippingAddress,
            phoneNumber: this.state.phoneNumber,
            cartId: this.state.cartDeatails._id,
            totalPrice: this.state.cartDeatails.totalPrice,
            orders: this.state.cartDeatails.orders
        }
        if (cartOrders && cartOrders.orders && cartOrders.orders.length) {
            cartOrder(cartOrders).then((success) => {
                 this.props.addToCart(0);
                 this.props.history.push('/user/list')
            })
        }

       
    }
    render() {
       
        const cartList = this.state.cartDeatails && this.state.cartDeatails.orders && this.state.cartDeatails.orders.map((value, index) => {
            return (
                <div className="container box-style mb-5" key={`cart-${index}`}>
                    <div className="row">
                        <div className="col-md-8"><p>Book Name:{value.name}</p>
                        </div>
                        <div className="col-md-4"><p>Quantity:{value.quantity}</p></div>
                    </div>
                    <div className="row">
                        <div className="col-md-8"><p>Price:{value.cost}</p></div>
                    </div>

                </div>
            );
        })
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">{cartList}</div>
                    <div className="col-md-4">
                        <div className="row ">
                            <div className="col-md-8 box-style">
                                <div className="col-md-8 ordercolor"><p>Total Books:{this.state.cartDeatails.totalItems}</p></div>
                                <div className="col-md-8 ordercolor"><p>Total price:{this.state.cartDeatails.totalPrice}</p></div>
                            </div>
                        </div>
                        <div className="container box-style mt-5">
                            <div className="row">
                                <div className="col-md-4 mt-2 ordercolor">
                                    <label htmlFor="shippingAddress">ShippingAddress</label>
                                    <textarea type="text" className=" box-style " name="shippingAddress" onChange={this.onChangeText} ></textarea>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 mt-2 ordercolor">
                                    <label htmlFor="shippingAddress">PhoneNumber</label>
                                    <input type="text" className="mb-3 box-style" name="phoneNumber" onChange={this.onChangeText} />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="text-center">
                    <div className="btn btn-primary mb-3" onClick={this.buyBooks}>Buy Now</div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return state;
}
const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (count) => dispatch(ecartAction(count))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(UserCart));