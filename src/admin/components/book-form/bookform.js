import React from 'react';
import { withRouter } from 'react-router-dom';
class BookForm extends React.Component {
    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <form>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="name">Book Name</label>
                                    <input type="text" className="form-control" id="name" name="name" placeholder="Book Name" onChange={this.props.onChangeText} value={this.props.book.name} />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="author">Author</label>
                                    <input type="text" className="form-control" id="author" placeholder="Author" name="author" onChange={this.props.onChangeText} value={this.props.book.author} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="username">Cost</label>
                                <input type="number" className="form-control" id="cost" name="cost" placeholder="Cost" onChange={this.props.onChangeText} value={this.props.book.cost} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="currencyIn">CurrencyIn</label>
                                <input type="text" className="form-control" id="currencyIn" name="currencyIn" placeholder="CurrencyIn" onChange={this.props.onChangeText} value={this.props.book.currencyIn} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <input type="text" className="form-control" id="description" name="description" placeholder="Description" onChange={this.props.onChangeText} value={this.props.book.description} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="imageUrl">ImageURL</label>
                                <input type="text" className="form-control" id="imageUrl" name="imageUrl" placeholder="Image URL" onChange={this.props.onChangeText} value={this.props.book.imageUrl} />
                            </div>
                            {this.props.children}
                        </form>
                    </div>
                </div>
            </div>
        );
    }
} export default withRouter(BookForm);