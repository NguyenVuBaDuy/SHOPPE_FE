import { Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
interface DataType {
    key: React.Key;
    name: string;
    age: number;
    address: string;
}

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
        key: "1",
        name: "John Brown",
        age: 32,
        address: "New York No. 1 Lake Park",
    },
    {
        key: "2",
        name: "Jim Green",
        age: 42,
        address: "London No. 1 Lake Park",
    },
    {
        key: "3",
        name: "Joe Black",
        age: 32,
        address: "Sydney No. 1 Lake Park",
    },
    {
        key: "4",
        name: "Disabled User",
        age: 99,
        address: "Sydney No. 1 Lake Park",
    },
];

const Cart = () => {
    return (
        <div className="flex h-full items-center justify-center gap-[20px] bg-[#F2F5FF] pt-[30px] pb-[30px]">
            <div className="w-[1100px] h-[600px] rounded-[0.5rem] bg-white p-[20px]">
                <table className="">
                    <thead className='h-[30px]'>
                        <tr>
                            <th className='w-[550px] bg-blue-200'>Product</th>
                            <th className='w-[150px] bg-green-200'>Price</th>
                            <th className='w-[150px] bg-red-200'>Quantity</th>
                            <th className='w-[150px] bg-pink-200'>Total</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        <tr>
                            <td className="">ádawdádawd</td>
                            <td className="">ádawdádawd</td>
                            <td className="">ádawdawádawdaw</td>
                            <td className="">dắdawddắdawd</td>
                        </tr>
                        <tr>
                            <td className="">ádawdádawd</td>
                            <td className="">ádawdasdawdaádawdasdawda</td>
                            <td className="">adwdawdawdadwdawdawd</td>
                            <td className="">awdasdawdasdawdasdawdasdawdasdawdasd</td>
                        </tr>
                        <tr>
                            <td className=""></td>
                            <td className=""></td>
                            <td className=""></td>
                            <td className=""></td>
                        </tr>
                        <tr>
                            <td className=""></td>
                            <td className=""></td>
                            <td className=""></td>
                            <td className=""></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="w-[400px] h-[600px] rounded-[0.5rem] shadow-md  bg-white">
            </div>
        </div>
    );
};

export default Cart;
