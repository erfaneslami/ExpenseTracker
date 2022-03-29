import { useState } from "react";
import "./ExpenseForm.scss";

const ExpenseForm = (props) => {
  // storing the input values in state that we can use them to submit the form

  // ? individual approach
  const [enteredTitle, setTitle] = useState("");
  const [enteredAmount, setAmount] = useState("");
  const [enteredDate, setDate] = useState("");

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

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    setTitle("");
    setAmount("");
    setDate("");
  };

  const cancelHandler = () => {
    props.onCancel();
  };

  return (
    <form className="new-expense" onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleHandler} value={enteredTitle} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={cancelHandler}>
          cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
