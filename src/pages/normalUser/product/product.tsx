import CheckboxList from './checkboxList';
import ProductCard from './productCard';


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
          key: '4',
          label: 'Option 4',
          from: 'sub1',
        },
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
        ],
      },
      {
        key: 'sub2',
        label: 'Navigation Two',
        children: [
        {
          key: '8',
          label: 'Option 8',
          from: 'sub2',
        },
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
          label: 'Option 13',
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
          label: 'Option 14',
          from: 'sub4',
        },
        {
          key: '15',
          label: 'Option 15',
          from: 'sub4',
        },
        {
          key: '16',
          label: 'Option 16',
          from: 'sub4',
        },
        ],
      },
    ];

    return (
        <div className='w-full h-full flex justify-center p-[30px] bg-gray-100 gap-[10px]'>
            <CheckboxList items={items}/>
            <div className='w-fit h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 bg-white rounded-[0.5rem] '>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
            </div>
        </div>
    )
}

export default Product