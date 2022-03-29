import { useState } from "react";
import "./App.scss";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/newExpense";

const dummyExpenses = [
  {
    id: "e1",
    title: "MacBook pro 14inch",
    amount: 800.0,
    date: new Date(2022, 5, 10),
  },
  {
    id: "e2",
    title: "Apple Keyboard 2",
    amount: 50.0,
    date: new Date(2022, 5, 10),
  },
];

function App() {
  const [expenses, setExpenses] = useState(dummyExpenses);

  const addExpense = (expense) => {
    setExpenses((preState) => {
      return [expense, ...preState];
    });
  };

  return (
    <>
      <NewExpense onAddExpense={addExpense} />
      <Expenses expenses={expenses}></Expenses>;
    </>
  );
}

export default App;
