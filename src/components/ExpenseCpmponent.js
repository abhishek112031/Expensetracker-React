
import './ExpenseComponent.css'
function ExpenseComponent(props) {

    const month=props.date.toLocaleString('en-us',{month:'long'})
    const day=props.date.toLocaleString('en-us',{day:'2-digit'});
    const year=props.date.getFullYear();


   
    return (
        <div className='expense-item'>
            <div>
                <div>{month}</div>
                <div>{day}</div>
                <div>{year}</div>

            </div>
          
            <div className="expense-item__description">
                <p className='location'>Location: {props.LocationOfExpenditure}</p>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>RS: {props.amount}</div>
            </div>

        </div>
    )
}
export default ExpenseComponent;

//Expense Items

// Food Rs 10

// Petrol Rs 100

// Movies Rs 200