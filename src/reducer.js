let lastId = 0;

const reducer = (state, action) => {
    if (action.type === 'bugAdded') {
        return [
            ...state,
            {
                id: lastId++,
                description: action.payload.description,
                resolved: false
            }
        ];
    } 
}