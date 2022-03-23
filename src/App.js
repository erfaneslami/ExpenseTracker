import logo from "./logo.svg";
import "./App.scss";
import ExpenseItem from "./components/ExpenseItem/ExpenseItem";

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
    <div className="App">
      <ExpenseItem
        title={Expense[0].title}
        amount={Expense[0].amount}
        date={Expense[0].date}
      />
    </div>
  );
}

export default App;
