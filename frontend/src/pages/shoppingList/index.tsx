import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const ShoppingList: React.FC = () => {
  const location = useLocation();
  const { title, items } = location.state || { title: '', items: [] };

  const [ checkedItems, setCheckedItems ] = useState<number[]>([]);

  const handleItemClick = (index: number) => {
    console.log('Item clicked', items[index]);
    checkedItems.includes(index) ? setCheckedItems(checkedItems.filter(item => item !== index)) : setCheckedItems([...checkedItems, index]);
  };

  return (
    <div>
      <p>{title}</p>
      <ul>
        {items.map((item: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined, index: number) => (
          <li onClick={() => handleItemClick(index)} key={index}
            style={{ textDecoration: checkedItems.includes(index) ? 'line-through' : 'none', cursor: 'pointer' }}
            >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;