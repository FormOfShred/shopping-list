import React from 'react';
import logo from './logo.svg';
import './App.css';

import List from './components/Dashboard/list';


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

  const lists = [firstList, secondList, thirdList];

  return (
      <div className="App">
        <p>Shopping List</p>
        {lists.map((list, index) => (
          <List key={index} title={list.title} items={list.items} />
        ))}
      </div>
  );
}

export default App;
