
const ExpenseDisplay = (props) =>{

    const editExpenseHandler = (e) =>{
        e.preventDefault();
       let id = localStorage.getItem(`${e.target.value}`)
      console.log(id)

    }
    const deleteExpenseHandler = (e) =>{
        e.preventDefault();
        let id = localStorage.getItem(`${e.target.value}`);
       console.log(id)
       fetch(`https://react-http-ad8cd-default-rtdb.asia-southeast1.firebasedatabase.app/expense/${id}.json`,
       {
        method : 'DELETE'
       }
       ).then(res=>{
            if(res.ok){
                res.json().then(data=>console.log(data))
            }else{
                res.json().then(data=>alert('some error occurred', data))
            }
        })
    }
    
    return <div className='expense-list'>
                            <h3>{props.price}</h3>
                            <h3>{props.Category}</h3>
                            <h3>{props.description}</h3>
                            <button onClick={editExpenseHandler} value= {props.id}>Edit</button>
                            <button onClick={deleteExpenseHandler} value={props.id}>Delete</button>
                        </div>
}
 export default ExpenseDisplay;