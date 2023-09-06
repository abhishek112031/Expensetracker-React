// import ExpenseComponent from './components/ExpenseCpmponent'
//in old react Applications: we need to import react for every files where jsx is present:
import React from 'react';

import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense';



const  App=()=> {
  const expenses = [
    {
      id: 1,
      title: "Item 1",
      amount: 10.99,
      LocationOfExpenditure: 'delhi',
      date: new Date(2023, 7, 22)
    },
    {
      id: 2,
      title: "Item 2",
      amount: 25.49,
      LocationOfExpenditure: 'kharagpur',
      date: new Date(2023, 1, 23)
    },
    {
      id: 3,
      title: "Item 3",
      amount: 5.0,
      LocationOfExpenditure: 'mumbai',
      date: new Date(2023, 9, 12)
    },
    {
      id: 4,
      title: "Item 4",
      amount: 15.0,
      LocationOfExpenditure: 'hydrabad',
      date: new Date(2023, 2, 21)
    }
  ];

  //modern syntax:
  return (
    <div>
      <NewExpense/>
      {/* <ExpenseComponent items={expenses}/> */}
      <Expenses items={expenses}/>

    </div>
  );


  // with old syntax after importing React:harder to read but still works

  // return React.createElement('div', {},
  //   React.createElement('h2', {}, 'Let\'s get started!'),
  //   React.createElement(Expenses, { items: expenses })
  // )


}

export default App;



 





     


