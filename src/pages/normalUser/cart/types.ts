import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

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
    shippingMethod: ShippingMethodType;
    paymentMethod: PaymentMethodType;
};

export type ActionType = {
    type: string;
    payload?: any;
};

export type ShippingMethodType = {
    id: string;
    name: string;
}

export type PaymentMethodType = {
    id: string;
    type: IconDefinition;
    name: string;
}
