import ProductsCartList from "./components/productsCartList";
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
        price: 500000000,
        quantity: 3,
        store: "Apple",
        variant: ["Black", "White", "Red"],
        variantChoice: "Red",
    },
    {
        id: "2",
        name: "Iphone 11 Pro Max",
        price: 23000000,
        quantity: 3,
        store: "Apple",
        variant: ["Black", "White", "Red"],
        variantChoice: "White",
    },
    {
        id: "3",
        name: "Iphone 9 Pro Max",
        price: 500000,
        quantity: 3,
        store: "Apple",
        variant: ["Black", "White", "Green"],
        variantChoice: "Black",
    },
    {
        id: "4",
        name: "Oppo Reno 6 Pro",
        price: 10000000,
        quantity: 3,
        store: "Oppo",
        variant: ["Pink", "White", "Red"],
        variantChoice: "Pink",
    },
    {
        id: "5",
        name: "Samsung Galaxy S20 Ultra",
        price: 40000000,
        quantity: 1,
        store: "Samsung",
        variant: ["Black", "White", "Red"],
        variantChoice: "Black",
    },
    {
        id: "6",
        name: "Samsung Galaxy S21 Ultra",
        price: 120000000,
        quantity: 3,
        store: "Samsung",
        variant: ["Black", "Purple", "Red"],
        variantChoice: "Purple",
    },
    {
        id: "7",
        name: "Samsung Galaxy S10",
        price: 14000000,
        quantity: 3,
        store: "Samsung",
        variant: ["Black", "White", "Red"],
        variantChoice: "White",
    },
    {
        id: "8",
        name: "Vivo X60 Pro",
        price: 13000000,
        quantity: 3,
        store: "Vivo",
        variant: ["Black", "White", "Red"],
        variantChoice: "Red",
    },
    {
        id: "9",
        name: "xiaomi Redmi Note 10",
        price: 50000000,
        quantity: 3,
        store: "Xiaomi",
        variant: ["Black", "White", "Red"],
        variantChoice: "Red",
    },
];

const dataToPrint: Map<string, DataType[]> = new Map();

data.forEach((item) => {
    if (!dataToPrint.has(item.store)) {
        dataToPrint.set(item.store, []);
    }
    dataToPrint.get(item.store)?.push(item);
});

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
    },
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
    selectedStore: [],
    products: data,
    shippingMethod: shipMethod[1],
    paymentMethod: payMethod[1],
    dataToPrint: dataToPrint,
};

const reducer = (state: typeof initialState, action: ActionType) => {
    switch (action.type) {
        case "SELECT_ITEM":
            const temp = {
                ...state,
                selectedItems: [...state.selectedItems, action.payload.item],
            };
            if (temp.selectedItems.length === state.products.length) {
                temp.selectAll = true;
            }
            if (
                temp.dataToPrint.get(action.payload.store)?.length ===
                temp.selectedItems.filter(
                    (item) => item.store === action.payload.item.store
                ).length
            ) {
                temp.selectedStore = [
                    ...state.selectedStore,
                    action.payload.item.store,
                ];
            }
            return temp;
        case "REMOVE_ITEM":
            if (state.selectedStore.includes(action.payload.store)) {
                state.selectedStore = state.selectedStore.filter(
                    (store) => store !== action.payload.store
                );
            }
            if (state.selectAll) {
                return {
                    ...state,
                    selectAll: false,
                    selectedItems: state.selectedItems.filter(
                        (item) => item !== action.payload.item
                    ),
                };
            } else {
                return {
                    ...state,
                    selectedItems: state.selectedItems.filter(
                        (item) => item !== action.payload.item
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
                selectedStore: state.selectAll
                    ? []
                    : [...state.dataToPrint.keys()],
            };
        case "SELECT_STORE":
            const updatedSelctedStore = {
                ...state,
                selectedItems: [
                    ...state.selectedItems,
                    ...action.payload.products,
                ],
                selectedStore: [...state.selectedStore, action.payload.store],
            };

            if (updatedSelctedStore.selectedItems.length === state.products.length) {
                updatedSelctedStore.selectAll = true;
            }
            return updatedSelctedStore;
        case "REMOVE_STORE":
            return {
                ...state,
                selectedItems: state.selectedItems.filter(
                    (item) => !action.payload.products.includes(item)
                ),
                selectedStore: state.selectedStore.filter(
                    (store) => store !== action.payload.store
                ),
            };
        case "DELETE_ITEM":
            return {
                ...state,
                selectedItems: state.selectedItems.filter(
                    (item) => item.id !== action.payload.id
                ),
                products: state.products.filter(
                    (item) => item.id !== action.payload.id
                ),
                dataToPrint: new Map(
                    Array.from(state.dataToPrint.entries()).reduce(
                        (acc, [key, value]) => {
                            const filterValue = value.filter(
                                (item) => item.id !== action.payload.id
                            );
                            if (filterValue.length > 0) {
                                return acc.set(key, filterValue);
                            }
                            return acc;
                        },
                        new Map()
                    )
                ),
            };
        case "UPDATE_QUANTITY":
            const updatedProductsQuantity = state.products.map((item) => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        quantity: action.payload.quantity,
                    };
                }
                return item;
            });

            let updatedItemQuantity: DataType;

            const updatedDataToPrintQuantity = new Map(
                Array.from(state.dataToPrint.entries()).map(([key, value]) => [
                    key,
                    (value = value.map((item) => {
                        if (item.id === action.payload.id) {
                            updatedItemQuantity = {
                                ...item,
                                quantity: action.payload.quantity,
                            };
                            return updatedItemQuantity;
                        }
                        return item;
                    })),
                ])
            );

            const updatedSelectedItemsQuantity = state.selectedItems.map(
                (item) =>
                    item.id === updatedItemQuantity.id
                        ? updatedItemQuantity
                        : item
            );

            return {
                ...state,
                products: updatedProductsQuantity,
                dataToPrint: updatedDataToPrintQuantity,
                selectedItems: updatedSelectedItemsQuantity,
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
        case "UPDATE_VARIANTCHOICE":
            const updatedProductsVariant = state.products.map((item) => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        variantChoice: action.payload.variantChoice,
                    };
                }
                return item;
            });

            let updatedItem: DataType;

            const updatedDataToPrintVariant = new Map(
                Array.from(state.dataToPrint.entries()).map(([key, value]) => [
                    key,
                    value.map((item) => {
                        if (item.id === action.payload.id) {
                            updatedItem = {
                                ...item,
                                variantChoice: action.payload.variantChoice,
                            };
                            return updatedItem;
                        }
                        return item;
                    }),
                ])
            );

            const updatedSelectedItemsVariant = state.selectedItems.map(
                (item) => (item.id === updatedItem.id ? updatedItem : item)
            );

            return {
                ...state,
                products: updatedProductsVariant,
                dataToPrint: updatedDataToPrintVariant,
                selectedItems: updatedSelectedItemsVariant,
            };
        default: {
            return state;
        }
    }
};

const Cart = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div className="flex flex-col items-center h-full justify-center gap-[20px] bg-[#F2F5FF] pt-[30px] pb-[30px] ">
            <ProductsCartList state={state} dispatch={dispatch} />
            <div className="w-[1340px] h-[130px] sticky bottom-[0] bg-white drop-shadow-[0_-5px_10px_rgba(0,0,0,0.2)] rounded-[0.5rem] flex flex-col">
                <div className="flex justify-center items-center h-[50px] border-b-[2px] border-gray-200">Voucher</div>
                <div className="flex justify-center items-center h-[80px]">
                    <div className="w-[720px] h-full flex items-center gap-[10px] pl-[50px]">
                        <div className="text-[18px]">
                            <span>Selected: </span>
                            <span className="text-blue-800">{"("}{state.selectedItems.length}{")"}</span>
                        </div>
                        <button className="bg-red-700 text-white w-[120px] h-[50px] rounded-[0.5rem] cursor-pointer hover:bg-red-800 transition-all duration-200"
                                onClick={() => {
                                    state.selectedItems.forEach((item) => {
                                        dispatch({
                                            type: "DELETE_ITEM",
                                            payload: item,
                                        });
                                    });
                                }}
                        >
                                Delete
                        </button>
                    </div>
                    <div className="w-[620px] flex items-center">
                        <div className="flex flex-col">
                            <div className="flex w-[400px] items-center justify-end gap-[5px]">
                                <span className="text-[18px] text-gray-600">Total {"("}{state.selectedItems.length}{state.selectedItems.length>1 ? " items): " : " item): "}</span>
                                <span className="text-[24px] text-[#ff390a]">{(state.selectedItems.reduce((acc, item) => {
                                    return acc + item.price * item.quantity;
                                }, 0)).toLocaleString("vi-VN")}</span>
                            </div>
                            <div className="flex items-center justify-end gap-[5px]">
                                <span className="text-gray-600">Save: </span>
                                <span className="text-[#ff390a]">300.000</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-center w-[220px] h-full">
                            <button className="bg-indigo-700 shadow-lg shadow-indigo-700/50 text-white w-[160px] h-[50px] rounded-[0.5rem] cursor-pointer hover:bg-indigo-500 transition-all duration-200">Check Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
