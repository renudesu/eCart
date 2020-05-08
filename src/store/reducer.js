export const ecartReducer = (state = {count:0}, action) => {
    console.log(action);
    switch (action.type) {
        case 'INCREMENT':
            return Object.assign({}, state, { count: action.payload });
        default:
            return state;
    }
}