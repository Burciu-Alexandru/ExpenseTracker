import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [addNew, setAddNew] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log('new expense');
    props.onAddExpense(expenseData);
    //setAddNew(false);
  };

  const startEditinHanler = () => {
    setAddNew(true);
  };

  const stopEditingHanlder = () => {
    setAddNew(false);
  };

  return (
    <div className='new-expense'>
      {!addNew && (
        <button onClick={startEditinHanler}>Add New Expense</button>
      )}
      {addNew && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHanlder}
        />
      )}
    </div>
  );
};
export default NewExpense;
