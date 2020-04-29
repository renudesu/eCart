import React from 'react';
import { Login } from '../services/auth';
import { withRouter } from "react-router-dom";
class SiginIn extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
    }
    onChangeText = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    signin = (e) => {
        Login(this.state).then((success) => {
            localStorage.setItem('token', success.data.token);
            localStorage.setItem('user', JSON.stringify(success.data.details));
            localStorage.setItem('role', success.data.details.role);
            if (success.data.details.role === 'admin') {
                this.props.history.push('/admin/list');
            }
            else {
                this.props.history.push('/user/list');
            }
        })
    }
    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <form>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="email" className="form-control" id="username" name="username" placeholder="Username@gmail.com" onChange={this.onChangeText} />

                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" id="password" name="password" placeholder="Password" onChange={this.onChangeText} />
                            </div>

                            <button type="button" className="btn btn-primary" onClick={this.signin}>Sign In</button>
                        </form>
                    </div>
                </div>
            </div>);
    }
}
export default withRouter(SiginIn)