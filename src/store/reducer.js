export const ecartReducer = (state = { count: 0, isLoading: false, books: [], userBookList: {}, cart_details: {} }, action) => {
    console.log(action);
    switch (action.type) {
        case 'INCREMENT':
        case 'DECREMENT':
            return Object.assign({}, state, { count: action.payload });
        case 'CART_LOAD':
            return Object.assign({}, state, { isLoading: action.payload });
        case 'CART_LOAD_SUCCESS':
            return Object.assign({}, state, { cart_details: action.payload });
        case 'BOOKS_LOAD_SUCCESS':
            return Object.assign({}, state, { books: action.payload });
        case 'BOOKS_RENDER':
            return Object.assign({}, state, { userBooklist: action.payload });
        case 'SIGNIN_SUCCESS':
            return Object.assign({}, state, { signin: action.payload });
        default:
            return state;
    }
}