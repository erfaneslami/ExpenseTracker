import Card from "../Ui/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.scss";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      />
    </Card>
  );
};

export default Expenses;
