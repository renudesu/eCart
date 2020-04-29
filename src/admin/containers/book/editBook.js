import React from 'react';
import { withRouter } from 'react-router-dom';
import BookForm from '../../components/book-form/bookform';
import { GetBookById, UpdateBook, DeleteBook } from '../../../services/book';
class EditBook extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedBook: {},
        }
    }
    componentDidMount() {
        this.getBook();
    }
    getBook = () => {
        const id = this.props.match.params.id;
        GetBookById(id).then((success) => {
            const book = {
                _id: success.data._id,
                name: success.data.name,
                author: success.data.author.join(','),
                cost: success.data.cost,
                currencyIn: success.data.currencyIn,
                description: success.data.description,
                imageUrl: success.data.imageUrl
            }
            this.setState({
                selectedBook: book
            });
        })
    }
    editBook = () => {
        const book = {
            _id: this.state.selectedBook._id,
            name: this.state.selectedBook.name,
            author: this.state.selectedBook.author.split(','),
            cost: this.state.selectedBook.cost,
            currencyIn: this.state.selectedBook.currencyIn,
            description: this.state.selectedBook.description,
            imageUrl: this.state.selectedBook.imageUrl
        }
        UpdateBook(book).then(() => {
            this.back();
        })
    }
    onChangeText = (event) => {
        this.setState({
            selectedBook: {
                ...this.state.selectedBook,
                [event.target.name]: event.target.value
            }
        });
    }
    back = () => {
        this.props.history.push('/admin/list');
    }
    deleteBook = () => {
        DeleteBook(this.state.selectedBook._id).then((success) => {
            this.back();
        });
    }

    render() {
        return (
            <BookForm onChangeText={this.onChangeText} book={this.state.selectedBook} >
                <button type="button" className="btn btn-primary mr-2" onClick={this.editBook}>Edit</button>
                <button type="button" className="btn btn-danger mr-2" onClick={this.deleteBook}> Delete Book</button>
                <button type="button" className="btn btn-primary" onClick={this.back}>Back</button>
            </BookForm>
        );
    }
}
export default withRouter(EditBook);