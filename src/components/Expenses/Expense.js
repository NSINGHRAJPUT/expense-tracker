import { useEffect, useRef } from 'react';
import './Expense.css';
import { useDispatch, useSelector } from 'react-redux';
import { expenseActions } from '../store/expense'
import exportFromJSON from 'export-from-json';

const Expense = () =>{
    const expense = useSelector(state=>state.expense.expenses)
    const total = useSelector(state=>state.expense.totalamount)
    const index = useSelector(state=>state.expense.itemIndex)
    const premium = useSelector(state=>state.expense.premium)
    const dispatch = useDispatch();
    let price = useRef(); 
    let desc = useRef();
    let category = useRef()
    
    useEffect(()=>{
        fetch('https://react-http-ad8cd-default-rtdb.asia-southeast1.firebasedatabase.app/expense.json')
        .then(res=>{
            if(res.ok){
                res.json().then(data=>{const dt = Object.keys(data)
                    const datavalue = dt.map((item,i)=>{
                        dispatch(expenseActions.setIndex(item))
                        return data[item]
                    })
                    datavalue.map((item)=>{
                        
                        return dispatch(expenseActions.addExpense(item))
                    }) 
                })
            }else{
                res.json().then(data=>console.log(data))
            }
        })
        
    },[])

    const downloadHandler = (e) =>{
        fetch('https://react-http-ad8cd-default-rtdb.asia-southeast1.firebasedatabase.app/expense.json')
        .then(res=>{
            if(res.ok){
                res.json().then(data=>{
                    const fileName = 'file';
                    const fileType = exportFromJSON.types.csv
                    exportFromJSON({data,fileName,fileType})
                })
            }
        })
        
    }
    const expenseHandler = (e)=>{
        e.preventDefault();
        let catref=category.current.value
        const obj={
            id:`E${expense.length}`,
            price:price.current.value,
            description: desc.current.value,
            Category : catref
        }
        console.log(index)
        dispatch(expenseActions.addExpense(obj))
        price.current.value='';
        desc.current.value='';
        fetch('https://react-http-ad8cd-default-rtdb.asia-southeast1.firebasedatabase.app/expense.json',
        {
            method : 'POST',
            body : JSON.stringify(obj),
            headers : {
                'Content-Type' : 'application/json'
            }
        }
        ).then(res=>{
            if(res.ok){
                res.json().then(data=>dispatch(expenseActions.setIndex(data.name)))
                
            }else {
                res.json().then(data=>alert(data))
            }
        })
    }
    const editExpenseHandler = (e) =>{
        e.preventDefault();
        const item = JSON.parse(e.target.value)
        price.current.value = item.price;
        desc.current.value = item.description;
        category.current.value = item.Category
        dispatch(expenseActions.deleteExpense(item))
        let id = index[item.i]
        let catref=category.current.value
        const obj={
            id:`E${expense.length}`,
            price:price.current.value,
            description: desc.current.value,
            Category : catref
        }
      console.log(id)
      fetch(`https://react-http-ad8cd-default-rtdb.asia-southeast1.firebasedatabase.app/expense/${id}.json`,
        {
            method : "PUT",
            body : JSON.stringify(obj),
            headers : {
                'Content-Type' : 'application/json'
            }
        }
        ).then(res=>{
            if(res.ok){
                res.json().then(data=>console.log(data))
            }else {
                res.json().then(data=>alert(data))
            }
        })
    }
    const deleteExpenseHandler = (e) =>{
        e.preventDefault();
        const item = JSON.parse(e.target.value)
        console.log(item)
        dispatch(expenseActions.deleteExpense(item))
        const id = index[item.i]  
        console.log(id)  
       fetch(`https://react-http-ad8cd-default-rtdb.asia-southeast1.firebasedatabase.app/expense/${id}.json`,
       {
        method : 'DELETE'
       }
       ).then(res=>{
            if(res.ok){
                res.json().then(data=>{})
                
            }else{
                res.json().then(data=>alert('some error occurred', data))
            }
        })
    }
   
    return <div className='container'>
        <form onSubmit={expenseHandler} className='signup-form'>
            <label>Money Spent</label>
            <input type='number' ref={price}></input><br/>
            <label>Description</label>
            <input type='text' ref={desc}></input><br/>
            <label>Category</label>
            <select ref={category}>
                <option>food</option>
                <option>petrol</option>
                <option>Shopping</option>
            </select><br></br>
            <button>Submit</button>
        </form>
                {expense.map((item,i)=>{
                    return <div className='container display'>
                            <h3 className='headings'>{item.price}</h3>&nbsp;&nbsp;&nbsp;
                            <h3 className='headings'>{item.Category}</h3>&nbsp;&nbsp;&nbsp;
                            <h3 className='headings'>{item.description}</h3>&nbsp;&nbsp;&nbsp;
                            <button onClick={editExpenseHandler} value= {JSON.stringify({i,...item})}>Edit</button>&nbsp;&nbsp;
                            <button onClick={deleteExpenseHandler} value={JSON.stringify({i,...item})}>Delete</button>
                            
                        </div>
                })}
                <h3>total : - {total} </h3>
                {premium && <button onClick={downloadHandler}>Download File</button>}
           
    </div>
}

export default Expense;