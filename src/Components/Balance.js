import React, { useState, createContext, useContext } from "react";
import { UserContext } from "./Context";

function Balance() {
  const value = useContext(UserContext);

  const negative = value.filter((item) => item.amountValue.includes("-"));
  const positive = value.filter((item) => !item.amountValue.includes("-"));

  const negativeNumber = negative.map((item) => {
    return item.amountValue;
  });

  const newNegative = [
    negativeNumber.map((x) => {
      return parseInt(x);
    }),
  ];

  const positiveNumber = positive.map((item) => {
    return item.amountValue;
  });

  const newPositive = [
    positiveNumber.map((x) => {
      return parseInt(x);
    }),
  ];

  const totalNegative = newNegative[0].reduce(
    (previousValue, currentValue) =>
      (previousValue = previousValue + currentValue),
    0
  );
  const totalPositive = newPositive[0].reduce(
    (previousValue, currentValue) =>
      (previousValue = previousValue + currentValue),
    0
  );

  return (
    <div className="felx flex-col ">
      <p className="text-xl underline font-bold w-full flex font-serif text-[#14181c] justify-center pb-7">
        Balance: {totalPositive + totalNegative}
      </p>
      <div className="flex flex-row gap-6">
        <div className="w-1/2 h-[110px] border-2 rounded-lg border-black flex flex-col p-5 items-center justify-center ">
          <p className=" text-xl  font-serif font-semibold text-[#14181c]">
            Income
          </p>
          <p className=" text-xl  font-serif font-semibold text-[rgb(25,119,30)]">
            {totalPositive}
          </p>
        </div>
        <div className="w-1/2 h-[110px] border-2 rounded-lg border-black flex flex-col p-5 items-center justify-center ">
          <p className=" text-xl  font-serif font-semibold text-[#14181c]">
            Expense
          </p>
          <p className=" text-xl  font-serif font-semibold text-[#920404ef]">
            {totalNegative}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Balance;
