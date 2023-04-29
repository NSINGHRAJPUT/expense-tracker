
const ExpenseDisplay = (props) =>{
    
    return <div className='expense-list'>
                            <h3>{props.price}</h3>
                            <h3>{props.Category}</h3>
                            <h3>{props.description}</h3>
                        </div>
}
 export default ExpenseDisplay;