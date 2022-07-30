import React from "react";

import ExpenseItem from "./ExpenseItem";
import './ExpensesListList.css'

const ExpensesListList = (props) =>{

    if(props.items.length ===  0){
        return <h2 className="expenses-list__fallback">Ai fost cam sarak</h2>;
    }

      return <ul className="expenses-list">
        {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
      </ul>
}


export default ExpensesListList;