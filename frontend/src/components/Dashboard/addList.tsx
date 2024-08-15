import { useState } from "react";

const AddList = () => {
    const [title, setTitle] = useState('');
    const [item, setItem] = useState('');
    const [items, setItems] = useState<string[]>([]);

    const handleTitleChange = (e: { target: { value: React.SetStateAction<string>; }; }) => { 
        setTitle(e.target.value);
        console.log(title);
    }

    const handleItemChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setItem(e.target.value);
        console.log(item);
    }

    const handleAddItem = () => {
        setItems([...items, item]);
        setItem('');
        console.log(items);
    }

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                    placeholder="List title"
                    value={title}
                    onChange={handleTitleChange} />
                <input type="text" 
                    placeholder="List item"
                    value={item}
                    onChange={handleItemChange} />
                <button type="button" onClick={handleAddItem}>Add Item</button>
                <button type="submit">Create list</button>
            </form>
        </div>
    )
}

export default AddList;