import { useState } from "react";
import "./App.css";

function App() {
  const [decimal, setDecimal] = useState(null);

  const handleConvert = (e) => {
    e.preventDefault();
    const binary = e.target.binary.value.trim();

    if (binary === "") {
      return alert("Please enter a number");
    }

    const binaryPattern = /^[01]+$/;
    if (!binaryPattern.test(binary)) {
      return alert("Please enter a valid binary number");
    }

    const decimalValue = parseInt(binary, 2);
    setDecimal(decimalValue);
    e.target.reset();
  };

  return (
    <div className="my-10 p-6 w-full lg:w-3/5 mx-auto">
      <h1 className="text-center font-extrabold text-6xl ">
        Binary To Decimal
      </h1>
      <div className="card p-12 w-full mx-auto">
        <form
          action=""
          onSubmit={handleConvert}
        >
          <input
            type="number"
            name="binary"
            id=""
            className="input input-bordered w-11/12 mx-auto"
          />
          <button
            type="submit"
            className="btn"
          >
            Convert
          </button>
        </form>

        <div className="my-6 text-3xl font-bol">Decimal: {decimal}</div>
      </div>
    </div>
  );
}

export default App;
