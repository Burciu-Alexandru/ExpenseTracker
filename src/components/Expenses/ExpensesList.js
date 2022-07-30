import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
import ExpensesFilter from "../NewExpense/ExpenseFilter";
//prima tema
//a doua tema
const ExpensesList = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const subarray = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent =  <p>Nu ai cheltuit nimic sarakule luna asta</p>

  if(subarray.length > 0 ) {
    expensesContent = subarray.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onGetFileteredData={filterChangeHandler}
        />
        {expensesContent}
      </Card>
    </div>
  );
};

export default ExpensesList;
