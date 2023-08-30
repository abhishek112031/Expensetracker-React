import './ExpenseComponent.css'

function Expenses(props) {

    return (
        <div className="expense-item__description">
            <p className='location'>Location: {props.LocationOfExpenditure}</p>
            <h2>{props.title}</h2>
            <div className='expense-item__price'>RS: {props.amount}</div>
        </div>
    )
}

export default Expenses;