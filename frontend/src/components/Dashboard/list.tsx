import React from 'react';
import { useNavigate } from 'react-router-dom';

const List = (props: { title: string, items: string[] }) => {
    const navigate = useNavigate();

    const { title, items } = props;

    const handleTitleClick = () => {
        navigate('/shoppinglist', { state: { title, items } });
      };

    return (
        <div>
            {/* List 1 */}
            <p onClick={handleTitleClick}>{ title }</p>
            <ul>
                { items.map((item, index) => {
                    return <li key={index}>{ item }</li>
                }) }
            </ul>
        </div>
    );
};

export default List;