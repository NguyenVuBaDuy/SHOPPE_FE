import { useState } from 'react';
import { DeleteOutlined, DownOutlined } from '@ant-design/icons';

    type CheckboxListProps = {
        items: {
        key: string;
        label: string;
        children?: {
            key: string;
            label: string;
            from?: string;
        }[];
        }[];
    };

const CheckboxList = ({ items }: CheckboxListProps) => {
    const itemsMap = new Map<string, {label: string, children?: string[], parent?: string}>();
    
    items.forEach((item) => {
        itemsMap.set(item.key, {label: item.label, children: item.children?.map((child) => child.key)});
        if (item.children) {
            item.children.forEach((child) => {
                itemsMap.set(child.key, {label: child.label, parent: item.key});
            })
        }
    })
    
    const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
    const [toggleExpand, setToggleExpand] = useState<Record<string, boolean>>({});

    const handleCheck = (event: React.MouseEvent<HTMLInputElement>, key: string, from: string) => {
        setCheckedItems((prev) => {
            const newCheckedItems = {...prev, [key]: !prev[key]};
            if (!prev[from]) {
                newCheckedItems[from] = true;
            }
            if (itemsMap.get(key)?.children && !newCheckedItems[key]) {
                itemsMap.get(key)?.children?.forEach((child) => {
                    newCheckedItems[child] = false;
                })
            }
            return newCheckedItems;
        });
    }

    const handleRemoveChecks = () => {
        setCheckedItems({});
    }

    const handleToggleExpand = (key: string) => {
        setToggleExpand((prev) => {
            return {...prev, [key]: !prev[key]};
        });
    }

    const renderItems = (items: any[], className: string) => {
        return (
            <ul className={`${className}`}>
                {items.map((item) => {
                    return (
                        <li key={item.key} className='flex flex-col'>
                            <label className={`w-full h-[30px] flex items-center rounded-[0.25rem] cursor-pointer pl-[5px] pr-[5px]`}>
                                <input  type="checkbox"
                                        onChange={(event) => handleCheck(event, item.key, item.from)} 
                                        checked={checkedItems[item.key] || false}
                                        className={`appearance-none min-w-4 min-h-4 border-1 border-sky-500 rounded-[0.25rem] transition-all cursor-pointer
                                            ${checkedItems[item.key] ? 'bg-sky-500' : 'border-gray-400 bg-white'}
                                          `}
                                        />
                                <span className={`select-none pl-[5px] text-[14px] w-full ${checkedItems[item.key] ? 'text-blue-500' : ''}`}>{item.label}</span>
                                {item.children ? 
                                <button className={`min-w-[25px] min-h-[25px] flex justify-center items-center rounded-[0.25rem] cursor-pointer hover:bg-gray-200 transition-transform duration-200 ${toggleExpand[item.key] ? 'rotate-180' : ''}`} 
                                        onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                                            handleToggleExpand(item.key)
                                            event.stopPropagation()
                                        }}>
                                    <DownOutlined style={{color: 'oklch(0.685 0.169 237.323)'}}/>
                                </button> : null}
                            </label>
                            {item.children && renderItems(item.children, `pl-[40px] overflow-hidden transition-all duration-200 ease-in-out ${toggleExpand[item.key] ? 'max-h-[1000px] h-fit' : 'max-h-0'}`)}
                        </li>
                    )
                })}
            </ul>
        )
    }

    return (
        <div className='min-w-[360px] h-full rounded-[0.25rem] bg-white p-[20px]'>
            <div className="w-full h-[50px] flex justify-between items-center">
                    <span className='text-[18px] font-bold font-serifs '>PRODUCT CATEGORIES</span>
                    <button onClick={handleRemoveChecks} className='w-[30px] h-[30px] flec items-center text-red rounded-[0.25rem] cursor-pointer hover:bg-gray-200 transition-transform duration-200'>
                        <DeleteOutlined style={{color: 'gray', fontSize: '25px'}}/>
                    </button>
            </div>
            {renderItems(items, '')}
        </div>
    );
}
export default CheckboxList;