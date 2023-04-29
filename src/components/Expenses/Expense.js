import { useEffect, useRef, useState } from 'react';
import './Expense.css';
import ExpenseDisplay from './ExpenseDisplay';

let DUMMY_EXPENSES=[];

const Expense = () =>{
    const [exp,setExp] = useState(DUMMY_EXPENSES)
    let price = useRef(); 
    let desc = useRef();
    let category = useRef()
    
    useEffect(()=>{
        let datavalue;
        fetch('https://react-http-ad8cd-default-rtdb.asia-southeast1.firebasedatabase.app/expense.json')
        .then(res=>{
            if(res.ok){
                res.json().then(data=>{const dt = Object.keys(data)
                    datavalue = dt.map((item)=>{
                        return data[item]
                    })
                    console.log(datavalue)
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
        let obj={
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

    return <section className='expense-form'>
        <form onSubmit={expenseHandler}>
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
                    return <ExpenseDisplay
                            key={i}
                            price={item.price}
                            description={item.description}
                            category={item.Category}
                        />
                })}
           
    </section>
}

export default Expense;