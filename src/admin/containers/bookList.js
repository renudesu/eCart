import React from 'react';
import { GetBook } from '../../services/book';
export default class BookList extends React.Component {
    constructor() {
        super();
        this.state = {
            books: []
        }
    }
    componentDidMount() {
        GetBook().then((success) => {
            console.log(success)
            this.setState({
                books: success.data
            })
        })
    }
    render() {
        const bookList = this.state.books.map((value, index) => {
            return (
                <li className="list-group-item" key={index} >{value.name}</li>
            );
        })
        return (
            <ul className="list-group">
                {bookList}
            </ul>
        );
    }
}