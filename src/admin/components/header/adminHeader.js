import React from 'react';
import { withRouter } from 'react-router-dom';

class AdminHeader extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       menu: false
//     }
//   }
//   toggleMenu = () => {
//     this.setState({
//       menu: !this.state.menu
//     })
//   }
  render() {
    // const show = this.state.menu;
    // console.log(show); 
    // console.log(this.state.menu)
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="#top">Logo</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" id="#navbarNav"></span>
        </button>
        <div className="collapse navbar-collapse "  id="#navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/admin/list" onClick={() => this.props.history.push('/admin/list')}>Home</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/admin/addbook" onClick={() => this.props.history.push('/admin/addbook')}>Add book</a>
            </li>
          
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item nactive" >
              {this.props.children}
            </li>
          </ul>
        </div>
      </nav>
    );
  }
} export default withRouter(AdminHeader);