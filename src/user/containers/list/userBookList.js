import React from 'react';
// import { GetBook } from '../../../services/book';
import { createCart, updateCart } from '../../../services/cart';

import { connect } from 'react-redux';
import { ecartAction, ecartActionRemove, bookAction } from '../../../store/action';
import {ecartReducer} from '../../../store/reducer';
class UserBookList extends React.Component {
    constructor() {
        super();
        this.state = {
            books: [],
            cartDetails: {}
        }
    }
    componentDidMount() {
        // GetBook().then((success) => {
        //     this.setState({
        //         books: success.data
        //     });
        // });
        this.props.getBooks();
        this.setState( (previousState) => ecartReducer(previousState, bookAction))
        this.props.addToCart();
        //this.getCallCart();
    }
    // getCallCart = () => {
    //     const userInfo = localStorage.getItem('user');
    //     const user = JSON.parse(userInfo);
    //     getCart(user._id).then((success) => {
    //         // console.log(success);
    //         /** Reducer: to update state in redux functionality */
    //         this.props.addToCart(success.data.totalItems);
    //         /**   */
    //         this.setState({
    //             cartDetails: success.data
    //         })
    //     })
    // }
    addToCart = (value) => {
        // debugger
        // console.log(this.state.cartDetails);
        if (this.state.cartDetails.userId) {
            // console.log('if');
            const orders = this.state.cartDetails.orders;
            /** by default taking -1 value to i */
            let index = -1;
            /**  */
            for (var i = 0; i < orders.length; i++) {
                /** if user(value._id) already had itemId(orders[i].itemId) ,for comparision itemid & value._id */
                if (orders[i].itemId === value._id) {
                    // console.log(orders[i]);
                    /** if user already had which we clicked item ,it increases quantity or 
                     * if not the item available goes to orders.push */
                    // orders[i].quantity++;
                    /** here "i" value we are placing into index to check already user had items or not(for next step). */
                    index = i;
                }
            }
            /** here if index vlaue greater than -1 means already user had items,so in this step quantity increases. */
            if (index > -1) {
                // console.log(orders[index]);
                // console.log("orders",orders);
                // console.log("i",i);
                orders[index].quantity++;
            }
            else {
                /** here adding new item weather if user doesn't  in cartlist */
                orders.push({
                    'name': value.name,
                    'itemId': value._id,
                    'quantity': 1,
                    'cost': value.cost,
                    'currencyIn': value.currencyIn
                })
            }
            /** here taking cart variable for further use to update the cart .
             * here in this cart copying previous cartDetails,along with updating orders */
            const cart = {
                ...this.state.cartDetails,
                orders: orders
            }
            updateCart(cart).then((success) => {
                /** here calling getCallCart() for updating the cart which we had already the cart.
                 * In this cart(i,e. cartDetails) the orders will be updated */
                setTimeout(this.getCallCart(), 1500);
            });
        }
        else {
            const userInfo = localStorage.getItem('user');
            const user = JSON.parse(userInfo);
            var obj = {
                'userId': user._id,
                orders: [
                    {
                        'name': value.name,
                        'itemId': value._id,
                        'quantity': 1,
                        'cost': value.cost,
                        'currencyIn': value.currencyIn
                    }
                ]
            }
            /** updating obj when we click add to cart button,to check which wanna add to  the paticular  item is added or not into cartDetails   
         * and here first creates 1st empty cart,2nd click orders shown which we clicked previously.*/
            this.setState({
                cartDetails: obj
            });
            /** creating cart first time adding */
            createCart(obj).then((success) => {
                setTimeout(this.getCallCart(), 1500)
            })
        }
    }
    removeCart = (value) => {
        if (this.state.cartDetails.userId) {
            const orders = this.state.cartDetails.orders;
            let index = -1;
            for (var i = 0; i < orders.length; i++) {
                if (orders[i].itemId === value._id) {
                    index = i;
                }
            }
            if (index > -1) {
                orders[index].quantity--;

            }
            const cart = {
                ...this.state.cartDetails,
                orders: orders
            }
            updateCart(cart).then((success) => {
                console.log(cart);
                setTimeout(this.getCallCart(), 1500);
            });
        }
    }
    // this.setState( (previousState) => reducer(previousState, someAction)).

    render() {
       /** this.props.UserBookList && this.props.UserBookList. this type of code is inline checking or we can write if condition */
        const list = this.props.userBookList && this.props.userBookList.map((value, index) => {
           console.log(value);
            return (
                <div className="card col-md-3 ml-5 mb-5" key={`card-${index}`}>
                    <img src={value.imageUrl} className="card-img-top" alt="bookimage" />
                    <div className="card-body">
                        <h5 className="card-title">{value.name.toUpperCase()}</h5>
                        <p className="card-text">{value.author.join(',')}</p>
                        <button className="btn btn-primary" onClick={() => this.addToCart(value)}>Add to Cart</button>
                        <button className="btn btn-danger mt-2" onClick={() => this.removeCart(value)}>Remove</button>
                    </div>
                </div>
            );
        })

        return (
            <div className="row ordercolor mt-5">
                {list}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        userBookList: state.books
   };
}
const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: () => dispatch(ecartAction()),
        removeCart: (count) => dispatch(ecartActionRemove(count)),
        getBooks: () => dispatch(bookAction())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserBookList);