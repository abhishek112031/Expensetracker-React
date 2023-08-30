import ExpenseComponent from './components/ExpenseCpmponent'

function App() {
  const expenses= [
    {
      id: 1,
      title: "Item 1",
      amount: 10.99,
      LocationOfExpenditure:'delhi',
      date: new Date()
    },
    {
      id: 2,
      title: "Item 2",
      amount: 25.49,
      LocationOfExpenditure:'kharagpur',
      date: new Date()
    },
    {
      id: 3,
      title: "Item 3",
      amount: 5.0,
      LocationOfExpenditure:'mumbai',
      date:new Date()
    },
    {
      id: 4,
      title: "Item 4",
      amount: 15.0,
      LocationOfExpenditure:'hydrabad',
      date: new Date()
    }
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseComponent title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} LocationOfExpenditure={expenses[0].LocationOfExpenditure}></ExpenseComponent>
   
    </div>
  );
}

export default App;
