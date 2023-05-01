import { createSlice } from "@reduxjs/toolkit"


const initialExpenseState = { expenses:[], totalamount : 0, premium : false, theme : false}

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
            }else{
                state.premium = false;
                state.theme = false;
            }
        },
    }
})

export const expenseActions = expenseSlice.actions
export default expenseSlice.reducer