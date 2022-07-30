// My first react app done during the first part of Max Schwarzmüller
// An expense tracker app where you can your see expense filtered by year(until now)
// see a visual representation of how much you have speend by month and add new expenses

// One future improvement of the app could be that when you add a new expense it should be really 
// stored local:), until now it only store as long as you don't close the app :) 

// Really like how it look and learned a lot, one big thing I've learned while doing this app
// is that I should really be more focus on typos :)), that were my main stress on debugging
// what I mean by that is that verry often the source of my bug was not my logic but my typos :)

import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import ExpensesList from './components/Expenses/ExpensesList';


//dummy state for testing, sorry for the names :))
const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Sprai',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'Tv cu diagonala sa moara dujmanii', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Asigurare la cazan',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'Birou fulger Mcqueen',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);// state of the expenses, all the expenses are stored here

  const addExpenseHandler = (expense) => {
    console.log(expense);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
    console.log(expenses);
  };
  //function to add new expense, where I take an object named expense, and use array a copy of the state
  //and spread operator to update the state

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} /> 
      <ExpensesList expenses={expenses} />
    </div>
  );
  // here i render my NewExpense and ExpensesList components, both whit comments on their files
};

export default App;