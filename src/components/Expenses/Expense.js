import { useRef, useState } from 'react';
import './Expense.css';

let DUMMY_EXPENSES=[];

const Expense = () =>{
    const [exp,setExp] = useState(DUMMY_EXPENSES)
    let price = useRef(); 
    let desc = useRef();
    let category = useRef();

    const expenseHandler = (e)=>{
        e.preventDefault();
        let catref=category.current.value
        let obj={
            price:price.current.value,
            description: desc.current.value,
            Category : catref
        }
        console.log(obj)
        setExp((pre)=>[obj,...pre])
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
            <div>
                {exp.map((item)=>{
                    return <div className='expense-list'>
                            <h3>{item.price}</h3>
                            <h3>{item.description}</h3>
                            <h3>{item.Category}</h3>
                        </div>
                })}
            </div>
    </section>
}

export default Expense;