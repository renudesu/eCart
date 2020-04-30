import React from 'react';
import { GetBook } from '../../../services/book';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';

class UserHeader extends React.Component {
  constructor() {
    super();
    this.state = {
      lists: {},
      searchKey: ''
    }
  }
  componentDidMount() {
    GetBook().then((success) => {
      this.setState({
        lists: success.data
      }, () => console.log(this.state.searchedItem))
    })
  }
  onChangeText = (event) => {
    this.setState({
      searchKey: event.target.value
    })
  }
  search = () => {
    const arra = [
      { name: 'Angular' },
      { name: 'node' },
      { name: 'mongo' }
    ]
}
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

          <form className="form-inline  ml-auto my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={this.onChangeText} />
            <button className="btn btn-outline-success my-2 my-sm-0" type="button" onChange={this.search}>Search</button>
          </form>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active" >
              <button type="button" className="btn btn-primary" onClick={() => this.props.history.push('/user/cart')}>
                {/* <i className="fas fa-shopping-cart"></i>{this.props.count} */}
                {/* <span className="badge badge-light">{this.props.count}</span> */}
                <div id="ex4">
                  <span className="p1 fa-stack fa-2x has-badge" data-count={this.props.count} >
                    {/* <!--<i className="p2 fa fa-circle fa-stack-2x"></i>--> */}
                    <i className="p3 fa fa-shopping-cart fa-stack-1x xfa-inverse" data-count="4b"></i>
                  </span>
                </div>
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