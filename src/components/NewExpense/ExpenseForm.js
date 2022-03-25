import { useState } from "react";
import "./ExpenseForm.scss";

const ExpenseForm = () => {
  // storing the input values in state that we can use them to submit the form

  // ? individual approach
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  // ? all in one approach
  // const [userInputs, setUserInputs] = useState({
  //   title: "",
  //   amount: "",
  //   date: "",
  // });

  const titleHandler = (event) => {
    setTitle(event.target.value);

    // setUserInputs({
    //   ...userInputs,
    //   title: event.target.value,
    // });
  };

  const amountHandler = (event) => {
    setAmount(event.target.value);

    // setUserInputs({
    //   ...userInputs,
    //   amount: event.target.value,
    // });
    // use this call back function if state update DEPENDS of previous State
    //  setUserInputs((preState) => {
    //   return { ...preState, amount: event.target.value };
    // });
  };
  const dateHandler = (event) => {
    setDate(event.target.value);

    // setUserInputs({
    //   ...userInputs,
    //   date: event.target.value,
    // });
  };

  return (
    <form className="new-expense">
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
