import { createSlice } from "@reduxjs/toolkit"


const initialExpenseState = { expenses:[], totalamount : 0, premium : false, theme : false,itemIndex : []}

const expenseSlice = createSlice({
    name : 'expense',
    initialState : initialExpenseState,
    reducers : {
        addExpense(state,action){
            state.expenses.push(action.payload)
            state.totalamount = state.totalamount + Number(action.payload.price)
            if(state.totalamount>10000){
                state.premium = true;
                state.theme = true;
            }
        },
        deleteExpense(state,action){
            state.totalamount = state.totalamount-action.payload.price
            state.expenses = state.expenses.filter((item)=>item.id!==action.payload.id)
            if(state.totalamount<10000){
                state.premium = false;
                state.theme = false;
            }
        },
        changeTheme(state){
            state.theme = ! state.theme
        },
        setIndex(state,action){
            state.itemIndex.push(action.payload)
        }
    }
})

export const expenseActions = expenseSlice.actions
export default expenseSlice.reducer