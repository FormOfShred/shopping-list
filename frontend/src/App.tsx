import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import List from './components/Dashboard/list';
import AddList from './components/Dashboard/addList';


function App() {
  {/* Lists */}

  const firstList = {
    title: 'Food',
    items: ['Apple', 'Banana', 'Orange']
  }

  const secondList = {
    title: 'Toys',
    items: ['Car', 'Truck', 'Airplane']
  }

  const thirdList = {
    title: 'Books',
    items: ['Book 1', 'Book 2', 'Book 3']
  }

  const [lists, setLists] = useState([firstList, secondList, thirdList]);

  const addList = (title: any, items: any) => {
    setLists([...lists, { title, items }]);
  }

  return (
      <div className="App">
        <h1>Shopping List</h1>

        <AddList onAddList={addList} />

        {lists.map((list, index) => (
          <List key={index} title={list.title} items={list.items} />
        ))}


      </div>
  );
}

export default App;
