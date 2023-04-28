import { useRef } from 'react';
import './Expense.css';

const Expense = () =>{
    let price = useRef(); 
    let desc = useRef();
    let category = useRef();

    const expenseHandler = (e)=>{
        e.preventDefault();
        console.log(price.current.value,desc.current.value,category.current.value)
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
    </section>
}

export default Expense;