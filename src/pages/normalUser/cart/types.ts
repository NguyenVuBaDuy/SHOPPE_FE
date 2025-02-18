export type DataType = {
    id: string;
    name: string;
    price: number;
    quantity: number;
};

export type StateType = {
    selectAll: boolean;
    selectedItems: DataType[];
    products: DataType[];
};

export type ActionType = {
    type: string;
    payload?: any;
};
