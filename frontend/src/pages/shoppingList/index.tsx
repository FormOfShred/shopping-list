import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from "react";
import { useLocation } from "react-router-dom";

const ShoppingList = () => {
  const location = useLocation();
  const { title, items } = location.state || { title: '', items: [] };

  return (
    <div>
      <p>{ title }</p>
      <ul>
          { items.map((item: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined, index: Key | null | undefined) => {
              return <li key={index}>{ item }</li>
          }) }
      </ul>
  </div>
  );
};

export default ShoppingList;