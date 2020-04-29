import React from 'react';
import { withRouter ,Link} from 'react-router-dom';
import { CreateBook } from '../../../services/book';
import BOOKFORM from '../../components/book-form/bookform';
class AddBook extends React.Component {
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
                author: '',
                cost: '',
                currencyIn: '',
                description: '',
                imageUrl: ''
            })
            this.props.history.push('/admin/list');
        })
    }
    render() {
        return (
            <BOOKFORM onChangeText={this.onChangeText} book={this.state}>
                <button type="button" className="btn btn-primary" onClick={this.addBook}>Add book</button>
                <Link className="btn btn-primary ml-2" to="/admin/list">Dashboard</Link>
            </BOOKFORM>

        );
    }
} export default withRouter(AddBook);