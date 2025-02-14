import CheckboxList from './checkboxList';
import { useState } from 'react';
import { DeleteOutlined } from '@ant-design/icons';

const Product = () => {

    const items = [
      {
        key: '1',
        label: 'Option 1',
      },
      {
        key: '2',
        label: 'Option 2',
      },
      {
        key: '3',
        label: 'Option 3',
      },
      {
        key: 'sub1',
        label: 'Navigation One',
        children: [
        {
          key: '5',
          label: 'Option 5',
          from: 'sub1',
        },
        {
          key: '6',
          label: 'Option 6',
          from: 'sub1',
        },
        {
          key: '7',
          label: 'Option 7',
          from: 'sub1',
        },
        {
          key: '8',
          label: 'Option 8',
          from: 'sub1',
        },
        ],
      },
      {
        key: 'sub2',
        label: 'Navigation Two',
        children: [
        {
          key: '9',
          label: 'Option 9',
          from: 'sub2',
        },
        {
          key: '10',
          label: 'Option 10',
          from: 'sub2',
        },
        {
          key: '11',
          label: 'Submenu',
          from: 'sub2',
        },
        ],
      },
      {
        key: 'sub3',
        label: 'Navigation Three',
        children: [
        {
          key: '11',
          label: 'Option 11',
          from: 'sub3',
        },
        {
          key: '12',
          label: 'Option 12',
          from: 'sub3',
        },
        {
          key: '13',
          label: 'Submenu',
          from: 'sub3',
        },
        ],
      },
      {
        key: 'sub4',
        label: 'Navigation Four',
        children: [
        {
          key: '14',
          label: 'Option 13',
          from: 'sub4',
        },
        {
          key: '15',
          label: 'Option 14',
          from: 'sub4',
        },
        {
          key: '16',
          label: 'Submenu',
          from: 'sub4',
        },
        ],
      },
      ];

    const [removeChecks, setRemoveChecks] = useState<boolean>(false);
    
    const handleRemoveChecks = () => {
      setRemoveChecks(!removeChecks);
      console.log(removeChecks);
    }


    return (
        <div className='w-full h-full flex p-[30px] bg-gray-100 gap-[10px]'>
            <div className='min-w-[360px] h-full rounded-[0.25rem] bg-white p-[20px]'>
                <div className="w-full h-[50px] flex justify-between items-center">
                    <span className='text-[18px] font-bold font-serifs '>PRODUCT CATEGORIES</span>
                    <button onClick={() => handleRemoveChecks()} className='w-[30px] h-[30px] flec items-center text-red rounded-[0.25rem] cursor-pointer hover:bg-gray-200 transition-transform duration-200'>
                      <DeleteOutlined style={{color: 'gray', fontSize: '25px'}}/>
                    </button>
                </div>
                <CheckboxList removeChecks={removeChecks} handleRemoveChecks={handleRemoveChecks} items={items}/>
            </div>
            <div className='w-full h-[580px] bg-white rounded-[0.25rem]'>Product Show</div>
        </div>
    )
}

export default Product