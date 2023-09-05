import React,{useState} from 'react';
import './ExpenseComponent.css';
// import Expenses from './Expenses';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

const  ExpenseComponent=(props) =>{
    const [title,setTitle]=useState(props.title)
    const [price,setPrice]=useState(props.amount)


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

    const titleChangeClickHandeller=()=>{
        setTitle('updated!')
        console.log('button is clicked!!!',title)
    }
    const priceChangeClickHandeller=()=>{
        setPrice('100')
        console.log('button is clicked!!!',price)
    }
    return (
        <Card className='expense-item'>
           <ExpenseDate date={props.date}/>
           <div className='expense-item__description'>
                <h4 className='location'>{props.LocationOfExpenditure}</h4>
                <h2>{title}</h2>
                <div className='expense-item__price'>₹{price}</div>
           </div>
           <button onClick={titleChangeClickHandeller}>change Title</button>
           <button onClick={priceChangeClickHandeller}>change price</button>

        </Card>
    )
}

export default ExpenseComponent;

//react state:useState:
//if you have data that might change,tht should reflect to the user interface,then we need state by re evaluating the component in which we registered state:useState
