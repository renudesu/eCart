import React from 'react';
import { withRouter } from 'react-router-dom';


class Logout extends React.Component {
    logout = () => {
        localStorage.clear();
        this.props.history.push('/signin')
    }
    render() {
        return (
            <button type="button" className="btn btn header-button " onClick={this.logout}>Logout</button>
        );
    }
} export default withRouter(Logout);