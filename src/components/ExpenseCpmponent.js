
import './ExpenseComponent.css'
function ExpenseComponent() {
    const expenseDate=new Date(2023,7,30);
    const expenseTitle='Petrol';
    const expenseAmount=100;
    const LocationOfExpenditure='Delhi'
    return (
        <div className='expense-item'>
            <div>{expenseDate.toDateString()}</div>
          
            <div className="expense-item__description">
                <p className='location'>Location: {LocationOfExpenditure}</p>
                <h2>{expenseTitle}</h2>
                <div className='expense-item__price'>RS: {expenseAmount}</div>
            </div>

        </div>
    )
}
export default ExpenseComponent;

//Expense Items

// Food Rs 10

// Petrol Rs 100

// Movies Rs 200