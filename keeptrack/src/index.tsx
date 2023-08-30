import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// function FruitListItem(props: {fruit: {id: number, name: string}}) {  
//   function handleClickEvent(ev: any) {
//     console.log(`removed`);
//   }
  
//   return <li onClick={handleClickEvent}>{props.fruit.name} </li>;
// }

// function FruitList(props: {fruits: {id: number, name: string}[]}) {
//   const fruitListItems = props.fruits.map((fruit) => (
//     <FruitListItem key={fruit.id} fruit={fruit} />
//   ));
//   return <ul>{fruitListItems}</ul>;
// }

// const data = [
//   { id: 1, name: 'apple' },
//   { id: 2, name: 'orange' },
//   { id: 3, name: 'blueberry' },
//   { id: 4, name: 'banana' },
//   { id: 5, name: 'kiwi' },
// ];

// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//   <FruitList fruits={data} />
// );


// function ExampleForm() {
//   const [value, setValue] = React.useState('');

//   const handleChange = (event: any) => {
//     setValue(event.target.value.toLowerCase());
//   };

//   return (
//     <form>
//       <input type="text" value={value} onChange={handleChange} />
//       <pre>{value}</pre>
//     </form>
//   );
// }

// ReactDOM.createRoot(document.getElementById('root')  as HTMLElement).render(<ExampleForm />);

