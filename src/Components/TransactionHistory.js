import React, { useState, createContext, useContext } from "react";
import { UserContext } from "./Context";

function TransactionHistory(props) {
  const value = useContext(UserContext);
  // console.log(value);

  return (
    <div className="flex flex-col">
      <p className="text-xl font-bold w-full flex font-serif underline text-[#14181c] justify-center pb-7">
        Transaction History
      </p>
      {value.slice(2).map((item, index) => {
        return (
          <div
            key={index}
            className="w-9/10 h-10 m-2 bg-white border border-black rounded-md flex flex-row justify-between p-2 items-center"
          >
            {console.log.value}
            <button
              // onClick={() => props.Del()}
              onClick={() => props.Del(item)}
              className="w-1/5 h-8 rounded  bg-[#981313] font-bold"
            >
              Del
            </button>
            <div className=" flex flex-row  justify-center px-2">
              <p className=" font-bold  pr-3 ">{item.expenceValue}</p>
              <p className=" font-bold  "> {item.amountValue} </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TransactionHistory;
