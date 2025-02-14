import { useState } from 'react';
import { DownOutlined, UpOutlined } from '@ant-design/icons';

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
        removeChecks?: boolean;
        handleRemoveChecks?: () => void;
    };

const CheckboxList = ({ items, removeChecks, handleRemoveChecks }: CheckboxListProps) => {
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
            const newCheckedItems = removeChecks ? {} :
                {...prev, [key]: !prev[key]};
                if (prev[from] !== undefined && !prev[from]) {
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
                                        onClick={(event) => handleCheck(event, item.key, item.from)} 
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
                                    <UpOutlined style={{color: 'oklch(0.685 0.169 237.323)'}}/>
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
        <div>
            {renderItems(items, '')}
        </div>
    );
}
export default CheckboxList;