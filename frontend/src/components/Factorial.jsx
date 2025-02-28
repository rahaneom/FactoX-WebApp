import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Factorial = () => {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState(null);
  const [method, setMethod] = useState("iterative");

  const iterativeFactorial = (num) => {
    let fact = 1;
    for (let i = num; i >= 1; i--) fact *= i;
    return fact;
  };

  const recursiveFactorial = (num) => {
    if (num === 0 || num === 1) return 1;
    return num * recursiveFactorial(num - 1);
  };

  const handleCalculate = (type) => {
    let num = parseInt(number.trim());

    if (isNaN(num) || num < 0) {
      toast.error("Please enter a valid number!");
      setResult(null);
      return;
    }

    if (num > 170) {
      toast.error("Number too large!");
      setResult(null);
      return;
    }

    let calculatedResult =
      type === "iterative" ? iterativeFactorial(num) : recursiveFactorial(num);

    setResult(calculatedResult);
    setMethod(type);
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 main-body">
      <div className="px-8 py-10 w-full sm:w-96 max-w-lg backdrop-blur-[3px] shadow-2xl rounded-lg flex flex-col gap-6 text-white">
        <h2 className="mb-4 text-2xl sm:text-3xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-purple-400">
          Factorial Calculator
        </h2>

        <input
          type="number"
          placeholder="Enter a number"
          value={number}
          onChange={(e) => setNumber(e.target.value.replace(/\D/g, ""))}
          className="p-3 w-full border border-gray-600 bg-gray-900 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          min="0"
          step="1"
        />

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            className={`px-5 py-2 w-full text-white font-semibold rounded-lg transition  cursor-pointer
              ${
                method === "iterative"
                  ? "bg-gradient-to-r from-green-700 to-green-0"
                  : "bg-gradient-to-r from-lime-0 to-lime-800 text-black"
              }
            `}
            onClick={() => handleCalculate("iterative")}
          >
            Iterative
          </button>
          <button
            className={`px-5 py-2 w-full text-white font-semibold rounded-lg transition  cursor-pointer
              ${
                method === "recursive"
                  ? "bg-gradient-to-r from-green-700 to-green-0"
                  : "bg-gradient-to-r from-lime-0 to-lime-800 text-black"
              }
            `}
            onClick={() => handleCalculate("recursive")}
          >
            Recursive
          </button>
        </div>

        {result !== null && (
          <div className="text-center bg-gray-900 p-4 rounded-md shadow-md result-div">
            <p className="text-2xl font-bold">
              Result: <span className="text-green-400">{result}</span>
            </p>
            <p className=" text-gray-300 capitalize text-lg">
              Approach Used: <span className="font-semibold">{method}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Factorial;
