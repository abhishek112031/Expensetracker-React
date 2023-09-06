import './Expenses.css'
import ExpenseComponent from './ExpenseCpmponent';
import Card from '../UI/Card';

const Expenses=(props) =>{

    // return (
    //     <div className="expense-item__description">
    //         <p className='location'>Location: {props.LocationOfExpenditure}</p>
    //         <h2>{props.title}</h2>
    //         <div className='expense-item__price'>RS: {props.amount}</div>
    //     </div>
    // )

    return (
        <Card className='expenses'>
            <ExpenseComponent title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}  />
            <ExpenseComponent title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date}/>
            <ExpenseComponent title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}  />
            <ExpenseComponent title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date} />
        </Card>
    )


}

export default Expenses;