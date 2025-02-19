import ProductsCartList from "./components/productsCartList";
import Bill from "./components/bill";
import { faCreditCard, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { useReducer } from "react";
import {
    DataType,
    StateType,
    ActionType,
    ShippingMethodType,
    PaymentMethodType,
} from "./types";

const data: DataType[] = [
    {
        id: "1",
        name: "Iphone 15 Pro Max",
        price: 500000,
        quantity: 3,
    },
    {
        id: "2",
        name: "Iphone 12 Pro Max",
        price: 500000,
        quantity: 3,
    },
    {
        id: "3",
        name: "Iphone 11 Pro Max",
        price: 500000,
        quantity: 3,
    },
    {
        id: "4",
        name: "Iphone 10 Pro Max",
        price: 500000,
        quantity: 3,
    },
    {
        id: "5",
        name: "Iphone 9 Pro Max",
        price: 500000,
        quantity: 3,
    },
    {
        id: "6",
        name: "Iphone 8 Pro Max",
        price: 500000,
        quantity: 3,
    },
    {
        id: "7",
        name: "Iphone 7 Pro Max",
        price: 500000,
        quantity: 3,
    },
    {
        id: "8",
        name: "Iphone 6 Pro Max",
        price: 500000,
        quantity: 3,
    },
    {
        id: "9",
        name: "Iphone 5 Pro Max",
        price: 500000,
        quantity: 3,
    },
];

const shipMethod: ShippingMethodType[] = [
    {
        id: "1",
        name: "Tiết kiệm",
    },
    {
        id: "2",
        name: "Nhanh",
    },
    {
        id: "3",
        name: "Hỏa tốc",
    }
];

const payMethod: PaymentMethodType[] = [
    {
        id: "1",
        type: faMoneyBill,
        name: "Thanh toán khi nhận hàng",
    },
    {
        id: "2",
        type: faCreditCard,
        name: "Chuyển khoản",
    },
];

const initialState: StateType = {
    selectAll: false,
    selectedItems: [],
    products: data,
    shippingMethod: shipMethod[1],
    paymentMethod: payMethod[1],
};

const reducer = (state: typeof initialState, action: ActionType) => {
    switch (action.type) {
        case "SELECT_ITEM":
            return {
                ...state,
                selectedItems: [...state.selectedItems, action.payload],
            };
        case "REMOVE_ITEM":
            if (state.selectAll) {
                return {
                    ...state,
                    selectAll: false,
                    selectedItems: state.selectedItems.filter(
                        (item) => item !== action.payload
                    ),
                };
            } else {
                return {
                    ...state,
                    selectedItems: state.selectedItems.filter(
                        (item) => item !== action.payload
                    ),
                };
            }
        case "SELECT_ALL":
            return {
                ...state,
                selectAll: !state.selectAll,
                selectedItems: state.selectAll
                    ? []
                    : state.products.map((item) => item),
            };
        case "DELETE_ITEM":
            return {
                ...state,
                selectedItems: state.selectedItems.filter(
                    (item) => item !== action.payload
                ),
                products: state.products.filter(
                    (item) => item !== action.payload
                ),
            };
        case "UPDATE_QUANTITY":
            return {
                ...state,
                products: state.products.map((item) => {
                    if (item.id === action.payload.id) {
                        return {
                            ...item,
                            quantity: action.payload.quantity,
                        };
                    }
                    return item;
                }),
            };
        case "UPDATE_PAYMENT_METHOD":
            return {
                ...state,
                paymentMethod: action.payload,
            };
        case "UPDATE_SHIPPING_METHOD":
            return {
                ...state,
                shippingMethod: action.payload,
            };
        default: {
            return state;
        }
    }
};

const Cart = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="flex flex-col items-center xl:flex-row xl:items-start h-full justify-center gap-[20px] bg-[#F2F5FF] pt-[30px] pb-[30px] ">
            <ProductsCartList state={state} dispatch={dispatch} />
            <Bill state={state} dispatch={dispatch} payMethod={payMethod} shipMethod={shipMethod}/>
        </div>
    );
};

export default Cart;
