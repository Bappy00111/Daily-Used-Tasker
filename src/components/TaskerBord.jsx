import React, { useState } from "react";
import ExpenceTaskerFrom from "./ExpenceTaskerFrom";
import TotalBlance from "../components/TotalBlance";
import IncomeExprenceList from "./IncomeExprenceList";
import ExpenceList from "./ExpenceList";

const TaskerBord = () => {
  const [expence, setExpence] = useState([]);
  return (
    <main className="relative mx-auto mt-10 w-full max-w-7xl">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* expence from  */}
        <ExpenceTaskerFrom  />
        <div className="lg:col-span-2">
          {/* total blance  */}
          <TotalBlance />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
            {/* income Expence list  */}
            <IncomeExprenceList />
            {/* expence list  */}
            <ExpenceList />
          </div>
        </div>
      </section>
    </main>
  );
};

export default TaskerBord;
