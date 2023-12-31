import React,{useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
    //state:
    const [enteredTitle,setEnteredTitle]=useState('');
    const [enteredAmount,setEnteredAmount]=useState('');
    const [enteredDate,setEnteredDate]=useState('');

    //using single state:
    // const [userInput,setUserInput]=useState({
    //     enteredTitle:"",
    //     enteredAmount:"",
    //     enteredDate:""
    // })
    
    // handellers:
    const titleChangeHandeller=(event)=>{
        // setUserInput({
        //     ...userInput,
        //     enteredDate:event.target.value

        // })
        setEnteredTitle(event.target.value);
    }
    const amountChangeHandeller=(event)=>{
        // setUserInput({
        //     ...userInput,
        //     enteredAmount:event.target.value

        // })

        setEnteredAmount(event.target.value)
    }
    const dateChangeHandeller=(event)=>{
        // setUserInput({
        //     ...userInput,
        //     enteredDate:event.target.value

        // })

        //more reliable approach when use single state:
        // setUserInput((prevState)=>{
        //     return { ...prevState, enteredDate:event.target.value
        //     }
        // })


        setEnteredDate(event.target.value);
    }

    const submitHandeller=(event)=>{
        event.preventDefault();
        const expenseData={
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
        };
        console.log(expenseData);
        setEnteredDate('');
        setEnteredTitle('');
        setEnteredAmount("");

    }
    
    return (
        <form onSubmit={submitHandeller}>
            <div className='new-expense__control'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandeller}  />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandeller} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' step='2023-01-01' value={enteredDate} onChange={dateChangeHandeller} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )

}
export default ExpenseForm;