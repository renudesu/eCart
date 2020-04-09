import React from 'react';
import { Register } from '../../services/user';
export default class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            username: '',
            password: '',
            phoneNumber: '',
            address: ''
        }
    }
    onChangeText = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    signup = () => {
        Register(this.state).then((success) => {
        })
    }
    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <form>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="firstName">FirstName</label>
                                    <input type="text" className="form-control" id="firstName" name="firstName" placeholder="FirstName" onChange={this.onChangeText} />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="lastName">LastName</label>
                                    <input type="text" className="form-control" id="lastName" placeholder="LastName" name="lastName" onChange={this.onChangeText} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="email" className="form-control" id="username" name="username" placeholder="Username" onChange={this.onChangeText} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" id="password" name="password" placeholder="Password" onChange={this.onChangeText} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phoneNumber">PhoneNumber</label>
                                <input type="number" className="form-control" id="phoneNumber" name="phoneNumber" placeholder="PhoneNumber" onChange={this.onChangeText} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="address">Address</label>
                                <textarea type="text" className="form-control" id="address" name="address" placeholder="Address" onChange={this.onChangeText} />
                            </div>
                            <button type="button" className="btn btn-primary" onClick={this.signup}>Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}