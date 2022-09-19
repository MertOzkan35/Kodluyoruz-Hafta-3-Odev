import React, { useState, createContext, useContext, useEffect } from "react";
import NewTransaction from "./NewTransaction";
import Balance from "./Balance";
import TransactionHistory from "./TransactionHistory";
import Header from "./Header";

const UserContext = createContext();

function Context() {
  useEffect(() => {
    console.log(value);
  }, [Del]);
  const [expencevalue, setexpencevalue] = useState("");
  const [amountvalue, setamountvalue] = useState("");
  const [value, setvalue] = useState([
    {
      expenceValue: "0",
      amountValue: "0",
      id: Math.floor(Math.random() * 101),
    },
    {
      expenceValue: "0",
      amountValue: "-0",
      id: Math.floor(Math.random() * 101),
    },
  ]);

  const expence = (event) => {
    setexpencevalue(event);
  };

  const amount = (event) => {
    setamountvalue(event);
  };
  const Add = () => {
    setvalue([
      ...value,
      {
        expenceValue: expencevalue,
        amountValue: amountvalue,
        id: Math.floor(Math.random() * 101),
      },
    ]);
  };

  function Del(item) {
    let x = value.filter((el) => el.id !== item.id);

    setvalue(x);
  }
  return (
    <UserContext.Provider value={value}>
      <div className="w-full h-[868px] bg-white  flex flex-col  items-center">
        <Header />
        <div className="w-3/6 h-[600px] flex flex-col-2  bg-[#ebeef0]">
          <div className="w-3/5 h-full  ">
            <div className="w-full h-2/5  border border-black p-6">
              <Balance />
            </div>
            <div className="w-full h-3/5 p-6 border border-black bg-[#ebeef0]">
              <NewTransaction expence={expence} amount={amount} Add={Add} />
            </div>
          </div>
          <div className="w-2/5 h-full border p-6 border-black bg-[#ebeef0]">
            <TransactionHistory Del={Del} />
          </div>
        </div>
      </div>
    </UserContext.Provider>
  );
}

export { UserContext };
export default Context;
