export const bugAdded = description => {
    return {
        type: actions.BUG_ADDED,
        payload: {
            description: "Bug1"
        }
    }
}