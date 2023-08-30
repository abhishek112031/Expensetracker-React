import React from 'react';
import './ExpenseComponent.css';
import Expenses from './Expenses';
import ExpenseDate from './ExpenseDate';

function ExpenseComponent(props) {
  return (
    <div>
      {props.items.map((item, index) => (
        <div className='expense-item' key={index}>
          <ExpenseDate date={item.date} />
          <Expenses
            LocationOfExpenditure={item.LocationOfExpenditure}
            amount={item.amount}
            title={item.title}
          />
        </div>
      ))}
    </div>
  );
}

export default ExpenseComponent;
