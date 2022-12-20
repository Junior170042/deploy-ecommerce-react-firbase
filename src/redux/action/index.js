//wE JUST DO WAT WE WANT
export const addItem = (product) => {

    return {
        type: 'ADDITEM',
        payload: product,
    }
}

export const deleteItem = (product) => {

    return {
        type: 'DELITEM',
        payload: product,
    }
}