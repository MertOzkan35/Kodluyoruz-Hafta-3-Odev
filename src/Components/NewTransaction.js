import React from "react";

function NewTransaction(props) {
  return (
    <div className="flex flex-col w-full h-full   items-center  ">
      <p className="text-xl underline font-bold font-serif text-[#14181c] pb-3">
        New Transaction
      </p>
      <input
        onChange={(e) => props.expence(e.target.value)}
        className="rounded h-[40px] w-4/5  border border-black m-6 pl-1 "
        placeholder="Enter Subject example: Kira "
      ></input>
      <input
        onChange={(e) => props.amount(e.target.value)}
        className="rounded h-[40px] w-4/5 border border-black mb-12   pl-1 "
        placeholder="Enter Value example: -500 "
      ></input>
      <button
        onClick={props.Add}
        className="rounded h-[40px] w-4/5   pl-1 font-bold bg-[#295D07] "
      >
        ADD TRANSACTİON
      </button>
    </div>
  );
}

export default NewTransaction;
