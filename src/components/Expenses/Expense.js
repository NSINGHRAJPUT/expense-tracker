import { useEffect, useRef, useState } from 'react';
import './Expense.css';

let DUMMY_EXPENSES=[];

const Expense = () =>{
    const [exp,setExp] = useState(DUMMY_EXPENSES)
    let price = useRef(); 
    let desc = useRef();
    let category = useRef()
    
    useEffect(()=>{
        
        fetch('https://react-http-ad8cd-default-rtdb.asia-southeast1.firebasedatabase.app/expense.json')
        .then(res=>{
            if(res.ok){
                res.json().then(data=>{const dt = Object.keys(data)
                    const datavalue = dt.map((item,i)=>{
                        localStorage.setItem(`${i}`,item)
                        return data[item]
                    })
                    datavalue.map((item)=>{
                        return setExp((pre)=>[item,...pre])
                    }) 
                })
            }else{
                res.json().then(data=>console.log(data))
            }
        })
        
    },[])

    const expenseHandler = (e)=>{
        e.preventDefault();
        let catref=category.current.value
        const obj={
            id:`E${exp.length}`,
            price:price.current.value,
            description: desc.current.value,
            Category : catref
        }
        setExp((pre)=>[obj,...pre])
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
                res.json().then(data=>console.log(data))
            }else {
                res.json().then(data=>alert(data))
            }
        })
    }
    const editExpenseHandler = (e) =>{
        e.preventDefault();
        let catref=category.current.value
        const obj={
            id:`E${exp.length}`,
            price:price.current.value,
            description: desc.current.value,
            Category : catref
        }
        setExp((pre)=>[obj,...pre])
       let id = localStorage.getItem(`${e.target.value}`)
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
        let id = localStorage.getItem(`${e.target.value}`);
       console.log(id)
       fetch(`https://react-http-ad8cd-default-rtdb.asia-southeast1.firebasedatabase.app/expense/${id}.json`,
       {
        method : 'DELETE'
       }
       ).then(res=>{
            if(res.ok){
                res.json().then(data=>console.log(data))
                const id= `E${e.target.value}`
                setExp((pre)=>pre.filter((item)=>item.id!==id))
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
                {exp.map((item,i)=>{
                    return <div className='container display'>
                            <h3 className='headings'>{item.price}</h3>&nbsp;&nbsp;&nbsp;
                            <h3 className='headings'>{item.Category}</h3>&nbsp;&nbsp;&nbsp;
                            <h3 className='headings'>{item.description}</h3>&nbsp;&nbsp;&nbsp;
                            <button onClick={editExpenseHandler} value= {i}>Edit</button>&nbsp;&nbsp;
                            <button onClick={deleteExpenseHandler} value={i}>Delete</button>
                        </div>
                })}
           
    </div>
}

export default Expense;