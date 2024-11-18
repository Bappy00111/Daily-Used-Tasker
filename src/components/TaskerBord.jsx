import React, { useState, useEffect } from "react";
import ExpenceTaskerFrom from "./ExpenceTaskerFrom";
import TotalBlance from "../components/TotalBlance";
import IncomeExprenceList from "./IncomeExprenceList";
import ExpenceList from "./ExpenceList";

const TaskerBord = () => {
  const [expence, setExpence] = useState([]); // All transactions
  const [balance, setBalance] = useState(0); // Current balance

  // Load data from localStorage when component mounts
  useEffect(() => {
    const storedExpence = JSON.parse(localStorage.getItem("expence")) || [];
    const storedBalance = JSON.parse(localStorage.getItem("balance")) || 0;

    setExpence(storedExpence);
    setBalance(storedBalance);
  }, []);

  // Save data to localStorage whenever expence or balance changes


  useEffect(() => {
    if(expence?.length && balance ){
      localStorage.setItem("expence", JSON.stringify(expence));
      localStorage.setItem("balance", JSON.stringify(balance));
    }
  
  }, [expence, balance]);

  const handleAddToData = (data) => {
    // Update transactions
    setExpence([...expence, data]);

    // Update balance based on the type (Income or Expense)
    if (data.type === "Income") {
      setBalance((prevBalance) => prevBalance + Number(data.amount));
    } else if (data.type === "Expense") {
      setBalance((prevBalance) => prevBalance - Number(data.amount));
    }
  };

  // Filter income and expense data
  const incomeData = expence.filter((item) => item.type === "Income");
  const expenseData = expence.filter((item) => item.type === "Expense");

  // Calculate total income and total expense
  const totalIncome = incomeData.reduce((acc, item) => acc + Number(item.amount), 0);
  const totalExpense = expenseData.reduce((acc, item) => acc + Number(item.amount), 0);

  return (
    <main className="relative mx-auto mt-10 w-full max-w-7xl">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Expense form */}
        <ExpenceTaskerFrom onSave={handleAddToData} />
        <div className="lg:col-span-2">
          {/* Total balance */}
          <TotalBlance totalIncome={totalIncome} totalExpense={totalExpense} balance={balance} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
            {/* Income list */}
            <IncomeExprenceList data={incomeData} />
            {/* Expense list */}
            <ExpenceList data={expenseData} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default TaskerBord;
