import React from 'react';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';

class UserHeader extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     menu: false
  //   }
  // }
  // toggleMenu = () => {
  //   this.setState({
  //     menu: !this.state.menu
  //   })
  // }
  render() {
    // const show = this.state.menu;
    // console.log(show); 
    // console.log(this.state.menu)
    console.log(this.props.count);
    return (

      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="#">Logo</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" id="#navbarNav"></span>
        </button>
        <div className="collapse navbar-collapse " id="#navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <button type="button" className="btn btn header-button" onClick={() => this.props.history.push('/user/list')}>Home</button>
            </li>
            <li className="nav-item active">
              <button type="button" className="btn btn header-button" onClick={() => this.props.history.push('/user/my-orders')}>My orders</button>
            </li>
            <li className="nav-item active">
              <button type="button" className="btn btn header-button" onClick={() => this.props.history.push('/user/cart')}>Cart</button>
            </li>
          </ul>

          <ul className="navbar-nav ml-auto">
            <li className="nav-item active" >
              <button type="button" className="btn btn-primary">
                <span className="badge badge-light">{this.props.count}</span>
              </button>
              {/* <button type="button" className="btn btn header-button" >Count:{this.props.count}</button> */}
              {this.props.children}
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(withRouter(UserHeader));