import React from 'react';
import { withRouter, Route } from 'react-router-dom';
import UserHeader from '../Header/userHeader';
import UserBookList from '../../containers/list/userBookList';
import UserOrder from '../../containers/order/userOrder';
import UserCart from '../../containers/cart/userCart';
import Logout from '../../../commons/components/logout';
class UserDashboard extends React.Component {
    render() {
        return (
            <div>
                <UserHeader>
                <Logout history={this.props.history}></Logout>
                </UserHeader>
                <div className="col-md-6">
                    <Route path={`${this.props.match.url}/list`} component={UserBookList} />
                    <Route path={`${this.props.match.url}/my-orders`} component={UserOrder} />
                    <Route path={`${this.props.match.url}/cart`} component={UserCart} />
                </div>
            </div>
        );
    }
}
export default withRouter(UserDashboard);