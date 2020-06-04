import React from 'react';
import { getOrder, DeleteOrderById } from '../../../services/order';
import { withRouter } from 'react-router-dom';
class UserOrder extends React.Component {
    constructor() {
        super();
        this.state = {
            orders: [],
            deletMyOrders: {}
        }
    }
    componentDidMount() {

        const userInfo = localStorage.getItem('user');
        const user = JSON.parse(userInfo);
        getOrder(user._id).then((success) => {
            console.log(success)
            this.setState({
                orders: success.data
            })
        })
    }

    delete = () => {
      
        DeleteOrderById(this.state.orders._id).then((success) => {
        });
    }
    render() {
        console.log(this.state.orders);
        const myOrders = this.state.orders && this.state.orders.map((value, index) => {
            const items = value.orders.map((item, itemIndex) => {
                return (
                    <li className="list-group-item box-style" key={`bookItem-${itemIndex}`} >{item.name}</li>
                )
            })
            return (
                <div className="container mt-5" key={'order-' + index}>
                    <div className="row">
                        <div className="col-md-8 mr-2 box-style ">
                            <p className=" ordercolor">OrderId:{value._id}</p>
                            <ul className="list-group ordercolor mb-2 ">
                                {items}
                            </ul>
                        </div>
                    </div>
                    <button className="btn btn-danger mt-2" onClick={this.delete} >Delete</button>
                </div>
            );
        });
        return (
            <div>
                {myOrders}
            </div>
        );
        // const myOrdersList = this.state.orders && this.state.orders.orders && this.state.orders.orders.map((value, index) => {
        //     return (
        //         <li className="list-group-item box-style" key={`bookItem-${index}`} >{value.name}</li>
        //     )
        // })

        // <div className="container mt-5">
        //     <div className="row">

        //         <div className="col-md-6 mr-2 box-style ">
        //             <p>OrderId:{this.state.orders && this.state.orders._id}</p>
        //             <ul className="list-group mb-2 ">
        //                 {myOrdersList}
        //             </ul>
        //         </div>

        //         <div className="col-md-4 box-style">
        //             <p>Date:</p>
        //         </div>

        //     </div>
        // </div>

    }
}
export default withRouter(UserOrder);