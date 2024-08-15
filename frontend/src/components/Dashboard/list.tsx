import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
    title: string;
    items: string[];
    onDeleteList: (title: string) => void;
}

const List: React.FC<Props> = ({ title, items, onDeleteList }) => {
    const navigate = useNavigate();

    const handleOpenList = () => {
        navigate('/shoppinglist', { state: { title, items } });
      };

    const handleTitleClick = () => {
        console.log('Delete list');
        onDeleteList(title);
    }

    return (
        <div>
            {/* List 1 */}
            <p onClick={handleOpenList} style={{ cursor: 'pointer', textDecoration: 'underline'}}>{ title }</p>
            <p onClick={handleTitleClick} style={{ cursor: 'pointer', color: 'red'}}>Delete</p>
            <ul>
                { items.map((item, index) => {
                    return <li key={index}>{ item }</li>
                }) }
            </ul>
        </div>
    );
};

export default List;