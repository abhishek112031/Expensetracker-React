import ExpenseComponent from './components/ExpenseCpmponent'

function App() {
  const expenses= [
    {
      id: 1,
      title: "Item 1",
      amount: 10.99,
      LocationOfExpenditure:'delhi',
      date: new Date(2023,7,22)
    },
    {
      id: 2,
      title: "Item 2",
      amount: 25.49,
      LocationOfExpenditure:'kharagpur',
      date: new Date(2023,1,23)
    },
    {
      id: 3,
      title: "Item 3",
      amount: 5.0,
      LocationOfExpenditure:'mumbai',
      date:new Date(2023,9,12)
    },
    {
      id: 4,
      title: "Item 4",
      amount: 15.0,
      LocationOfExpenditure:'hydrabad',
      date: new Date(2023,2,21)
    }
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseComponent items={expenses}/>
   
    </div>
  );
}

export default App;

//looping:
// return (
//   <div>
//     <h1>List of Items</h1>
//     <ul>
//       {data.map((item, index) => (
//         <li key={index}>{item}</li>
//       ))}
//     </ul>
//   </div>
// );
