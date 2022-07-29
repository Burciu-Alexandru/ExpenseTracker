import React, {useState} from "react";

import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
import ExpensesFilter from "../NewExpense/ExpenseFilter";
//prima tema
//a doua tema
const ExpensesList = (props) => {

  const[filterdYear,setfilterdYear]=useState(2020);

  const getFilterData = (data) =>{
    setfilterdYear(data);

  };
  return (
    <div>
      <Card className="expenses">
      <ExpensesFilter selected={filterdYear} onGetFileteredData={getFilterData}></ExpensesFilter>
        <ExpenseItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
          date={props.expenses[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenses[3].title}
          amount={props.expenses[3].amount}
          date={props.expenses[3].date}
        ></ExpenseItem>
      </Card>
    </div>
  );
};

export default ExpensesList;
