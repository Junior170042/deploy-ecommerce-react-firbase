export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating?: {
        rate: number;
        count: number;
    };
    quantity?: number;
}

interface AddItemAction {
    type: "ADDITEM";
    payload: Product;
}

interface DelItemAction {
    type: "DELITEM";
    payload: { id: number };
}

type CartAction = AddItemAction | DelItemAction;

const initialState: Product[] = [];

const addItems = (state = initialState, action: CartAction): Product[] => {
    switch (action.type) {
        case "ADDITEM":
            return [...state, action.payload];

        case "DELITEM":
            return state.filter(item => item.id !== action.payload.id);

        default:
            return state;
    }
}

export default addItems;