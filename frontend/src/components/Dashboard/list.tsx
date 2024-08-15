import React from 'react';

const List = (props: { title: string, items: string[] }) => {
    const { title, items } = props;

    console.log(title, items);

    return (
        <div>
            {/* List 1 */}
            <p>{ title }</p>
            <ul>
                { items.map((item, index) => {
                    return <li key={index}>{ item }</li>
                }) }
            </ul>
        </div>
    );
};

export default List;