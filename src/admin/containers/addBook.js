import React from 'react';
import { CreateBook } from '../../services/book';
export default class AddBook extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            author: '',
            cost: '',
            currencyIn: '',
            description: '',
            imageUrl: ''
        }
    }
    onChangeText = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    addBook = () => {
        const book = {
            name: this.state.name,
            author: [this.state.author],
            cost: this.state.cost,
            currencyIn: this.state.currencyIn,
            description: this.state.description,
            imageUrl: this.state.imageUrl
        }
        CreateBook(book).then((success) => {
            console.log(success)
            this.setState({
                name: '',
                author:'',
                cost: '',
                currencyIn: '',
                description: '',
                imageUrl:''
            })
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
                                    <label htmlFor="name">Book Name</label>
                                    <input type="text" className="form-control" id="name" name="name" placeholder="Book Name" onChange={this.onChangeText} value={this.state.name}/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="author">Author</label>
                                    <input type="text" className="form-control" id="author" placeholder="Author" name="author" onChange={this.onChangeText} value={this.state.author}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="username">Cost</label>
                                <input type="number" className="form-control" id="cost" name="cost" placeholder="Cost" onChange={this.onChangeText} value={this.state.cost}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="currencyIn">CurrencyIn</label>
                                <input type="text" className="form-control" id="currencyIn" name="currencyIn" placeholder="CurrencyIn" onChange={this.onChangeText} value={this.state.currencyIn}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <input type="text" className="form-control" id="description" name="description" placeholder="Description" onChange={this.onChangeText} value={this.state.description}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="imageUrl">ImageURL</label>
                                <input type="text" className="form-control" id="imageUrl" name="imageUrl" placeholder="Image URL" onChange={this.onChangeText} value={this.state.imageUrl}/>
                            </div>
                            <button type="button" className="btn btn-primary" onClick={this.addBook}>Add book</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}