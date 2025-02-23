import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type DataType = {
    id: string;
    name: string;
    price: number;
    quantity: number;
    store?: string;
    variant?: string[];
    variantChoice?: string;
};

export type StateType = {
    selectAll: boolean;
    selectedItems: DataType[];
    selectedStore?: string[];
    products: DataType[];
    shippingMethod: ShippingMethodType;
    paymentMethod: PaymentMethodType;
    dataToPrint?: Map<string, DataType[]>;
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
