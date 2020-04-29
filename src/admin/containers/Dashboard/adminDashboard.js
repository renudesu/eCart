import React from 'react';
import AdminBookList from '../list/bookList';
import EditBook from '../book/editBook';
import AddBook from '../book/addBook';
import Logout from '../../../commons/components/logout';
import AdminHeader from '../../../admin/components/header/adminHeader';
import { Route,withRouter } from 'react-router-dom';
class AdminDashboard extends React.Component {
   render(){
       return(
           <div>
               <AdminHeader>
                   <Logout history={this.props.history}></Logout>
               </AdminHeader>
               <div className="col-md-6">
                   <Route path={`${this.props.match.url}/list`} component={AdminBookList}/>
                   <Route path={`${this.props.match.url}/edit/:id`} component={EditBook}/>
                   <Route path={`${this.props.match.url}/addbook`} component={AddBook}/>
               </div>
           </div>
       )
   }
} export default withRouter(AdminDashboard);