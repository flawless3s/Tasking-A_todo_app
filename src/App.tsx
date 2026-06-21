import React from "react";
import InputField from "./components/InputField";


const App: React.FC = () => {
  return (
    <div className="bg-teal w-screen h-screen flex flex-col items-center">
      <span className="font-Neucha text-4xl text-white my-7.5 mx-0 uppercase z-1 text-center">Tasking</span>
      <InputField/>
    </div>
  );
};

export default App;
