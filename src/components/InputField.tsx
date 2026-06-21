import React from "react";

const InputField = () => {
  return (
    <form className="flex flex-row items-center relative w-[90%]">
      <input
        className="w-full text-[20px] py-5 px-7.5 rounded-[50px] border-none transition duration-200 shadow-[inset_0_0_5px_black] focus:outline-none focus:shadow-[0_0_10px_1000px_rgba(0,0,0,1)] bg-white"
        placeholder="Enter a task"
      ></input>
      <button
        className="absolute w-12.5 h-12.5 m-4 right-0 border-none text-3.75 bg-teal text-white transition-all duration-200 shadow-[0_0_10px_black] rounded-[50px] hover:bg-brighter-teal active:scale-[0.8] active:shadow-[0_0_5px_black]"
        type="submit"
      >
        Add
      </button>
    </form>
  );
};

export default InputField;
