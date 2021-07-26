import * as actions from './actionTypes';

export const bugAdded = description => {
    return {
        type: actions.BUG_ADDED,
        payload: {
            description: "Bug1"
        }
    }
}

export const bugRemoved = id => {
    return {
        type: actions.BUG_REMOVED,
        payload: {
            id
        }
    }
}