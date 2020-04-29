import React from 'react';
import { getOrder } from '../../../services/order';
import { withRouter } from 'react-router-dom';
class UserOrder extends React.Component {
    constructor() {
        super();
        this.state = {
            orders: {}
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
    render() {
        const myOrdersList = this.state.orders && this.state.orders.orders && this.state.orders.orders.map((value, index) => {
            return (

                <li className="list-group-item box-style" key={`bookItem-${index}`} >{value.name}</li>

            )
        })
        return (
            <div className="container mt-5">
                <div className="row">

                    <div className="col-md-6 mr-2 box-style ">
                        <p>OrderId:{this.state.orders && this.state.orders._id}</p>
                        <ul className="list-group mb-2 ">
                            {myOrdersList}
                        </ul>
                    </div>
                    <div className="col-md-4 box-style">
                        <p>Date:</p>
                    </div>

                </div>
            </div>
        );
    }
}
export default withRouter(UserOrder);