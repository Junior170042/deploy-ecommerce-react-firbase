import { Product } from '../reducers/addItem';

export const addItem = (product: Product) => {
    return {
        type: 'ADDITEM' as const,
        payload: product,
    };
};

export const deleteItem = (product: Product) => {
    return {
        type: 'DELITEM' as const,
        payload: product,
    };
};

export type CartAction = ReturnType<typeof addItem> | ReturnType<typeof deleteItem>;