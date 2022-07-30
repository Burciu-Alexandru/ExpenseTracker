//The role of new expense is to add the functionality of adding new expenses to our list 
//of expenses here I handle the function that send back the object to the App component for
//there to be added to the expenses

import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [addNew, setAddNew] = useState(false);// a state used for showing and hiding the expense form(kiinda like a modal but not quite)

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log('new expense');
    props.onAddExpense(expenseData);
    setAddNew(false);
  };
  // here on saveExpenseDataHandler take the object from the form and using the spread operator
  // create a new object whit an ID then, I set the state to false so it won't show

  // I just tought right now that is not really a good idea cuz maybe someone what to add multiple 
  // expenses at once and this functionality could be a littel bit of pain in the ass

  const startEditinHanler = () => {
    setAddNew(true);
  };
  // function to set the state to true

  const stopEditingHanlder = () => {
    setAddNew(false);
  };
  // function to set the state to false

  return (
    <div className='new-expense'>
      {!addNew && (
        <button onClick={startEditinHanler}>Add New Expense</button>
      )}
      {addNew && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onStopingEditingl={stopEditingHanlder}
        />
      )}
    </div>
  );
};

// on return I use conditonal rendering for hiding and showint the form
export default NewExpense;
