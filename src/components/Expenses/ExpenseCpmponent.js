import React,{useState} from 'react';
import './ExpenseComponent.css';
// import Expenses from './Expenses';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

const  ExpenseComponent=(props) =>{
    const [title,setTitle]=useState(props.title)

    //looping:
    // return (
    //     <div className='maindiv'>
    //         {props.items.map((item, index) => (
    //             <div className='expense-item' key={index}>
    //                 <ExpenseDate date={item.date} />
    //                 <Expenses
    //                     LocationOfExpenditure={item.LocationOfExpenditure}
    //                     amount={item.amount}
    //                     title={item.title}
    //                 />
    //             </div>
    //         ))}
    //     </div>
    // );

    const clickHandeller=()=>{
        setTitle('updated!')
        console.log('button is clicked!!!',title)
    }
    return (
        <Card className='expense-item'>
           <ExpenseDate date={props.date}/>
           <div className='expense-item__description'>
                <h4 className='location'>{props.LocationOfExpenditure}</h4>
                <h2>{title}</h2>
                <div className='expense-item__price'>₹{props.amount}</div>
           </div>
           <button onClick={clickHandeller}>change Title</button>
        </Card>
    )
}

export default ExpenseComponent;
