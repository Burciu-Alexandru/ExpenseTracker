import React, { useState } from "react";

import Card from "../UI/Card";
import "./ExpensesList.css";
import ExpensesFilter from "../NewExpense/ExpenseFilter";
import ExpensesListList from "./ExpensesListList";
import ExpesesChart from "./ExpensesChart";
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


  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onGetFileteredData={filterChangeHandler}
        />
        <ExpesesChart expenses={subarray}/>
        <ExpensesListList items={subarray}/>
      </Card>
    </div>
  );
};

export default ExpensesList;
