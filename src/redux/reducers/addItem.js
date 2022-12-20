//WE JUST TELL HOW TO DO THIS, HOW IT WORKS!

const items = [];

const addItems = (theArray = items, theAction) => {
    switch (theAction.type) {
        case "ADDITEM":
            //add product into the collection
            return [
                ...theArray,
                theAction.payload
            ]

        case "DELITEM":
            //get rid of the selected product
            return theArray = theArray.filter(item => item.id !== theAction.payload.id)

        default:
            return theArray;
    }
}

export default addItems;