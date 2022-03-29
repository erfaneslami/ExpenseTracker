import { useState } from "react";
import Card from "../Ui/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.scss";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (year) => {
    setFilteredYear(year);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expenseContent = <p>no expenses Found !</p>;

  if (filteredExpenses.length > 0)
    expenseContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onFilterChange={filterChangeHandler}
      />
      <ul>{expenseContent}</ul>
    </Card>
  );
};

export default Expenses;
