import { createSlice } from "@reduxjs/toolkit"


const initialExpenseState = { expenses:[]}

const expenseSlice = createSlice({
    name : 'expense',
    initialState : initialExpenseState,
    reducers : {
        addExpense(){},
        deleteExpense(){},
        editExpense(){},
        fetchExpense(){}
    }
})

export const expenseActions = expenseSlice.actions
export default expenseSlice.reducer