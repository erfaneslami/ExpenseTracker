import "./App.scss";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/newExpense";

function App() {
  const Expense = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: "452.23",
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "Home Service",
      amount: "50.00",
      date: new Date(2021, 2, 28),
    },
  ];

  return (
    <>
      <NewExpense />
      <Expenses expenses={Expense}></Expenses>;
    </>
  );
}

export default App;
