import React from 'react';
import { GetBook } from '../../../services/book';
import { withRouter } from 'react-router-dom';
class AdminBookList extends React.Component {
    constructor() {
        super();
        this.state = {
            books: [],
        }
    }
    componentDidMount() {
        GetBook().then((success) => {
            this.setState({
                books: success.data
            })
        })
    }
    render() {
        const bookList = this.state.books.map((value, index) => {
            return (
                <li className="list-group-item" key={`book-item-${index}`} onClick={() => this.props.history.push(`/admin/edit/${value._id}`)} >{value.name}</li>
            );
        })
        return (
            <ul className="list-group  col-md-3 mt-5 ml-4">
                {bookList}
            </ul>
        );
    }
}
export default withRouter(AdminBookList);