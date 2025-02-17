import { Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import ProductsCartList from "./productsCartList";
import { useReducer } from "react";
import { DataType, StateType, ActionType } from "./types";
const columns: TableColumnsType<DataType> = [
    {
        title: "Name",
        dataIndex: "name",
        render: (text: string) => <a>{text}</a>,
    },
    {
        title: "Age",
        dataIndex: "age",
    },
    {
        title: "Address",
        dataIndex: "address",
    },
];

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

const initialState: StateType = {
    selectAll: false,
    selectedItems: [],
    products: data,
};

const reducer = (
    state: typeof initialState,
    action: ActionType
) => {
    switch (action.type) {
        case "SELECT_ITEM":
            return {
                ...state,
                selectedItems: [...state.selectedItems, action.payload],
            }
        case "REMOVE_ITEM":
            if (state.selectAll) {
                return {
                    ...state,
                    selectAll: false,
                    selectedItems: state.selectedItems.filter((item) => item !== action.payload),
                };
            } else {
                return {
                    ...state,
                    selectedItems: state.selectedItems.filter((item) => item !== action.payload),
                };
            }
        case "SELECT_ALL":
            return {
                ...state,
                selectAll: !state.selectAll,
                selectedItems: state.selectAll ? [] : state.products.map((item) => item.id)
            }
        case "DELETE_ITEM": 
            return { 
                ...state,
                selectedItems: state.selectedItems.filter((item) => item !== action.payload),
                products: state.products.filter((item) => item.id !== action.payload),
            }
        default: {
            return state;
        }
    }
};

const Cart = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="flex h-full items-center justify-center gap-[20px] bg-[#F2F5FF] pt-[30px] pb-[30px]">
            <ProductsCartList state={state} dispatch={dispatch}  />
            <div className="w-[400px] h-[600px] rounded-[0.5rem] shadow-md  bg-white">
                <Table
                    columns={columns}
                    dataSource={data}
                    pagination={false}
                    rowSelection={{ type: "checkbox" }}
                />
            </div>
        </div>
    );
};

export default Cart;
