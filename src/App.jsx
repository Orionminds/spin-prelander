import React, { useState } from "react";

const App = () => {
  const [spun, setSpun] = useState(false);

  const handleSpin = () => {
    setSpun(true);
    setTimeout(() => {
      window.location.href = "https://your-affiliate-link.com";
    }, 3000); // 3 seconds delay
  };

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-gradient-to-r from-green-200 to-blue-300">
      <div className="text-3xl font-bold mb-10">🎁 Spin to Win a Grocery Gift Card!</div>
      {!spun ? (
        <button
          onClick={handleSpin}
          className="bg-yellow-400 px-8 py-4 rounded-full text-xl font-semibold animate-bounce hover:bg-yellow-300 transition"
        >
          Spin Now
        </button>
      ) : (
        <div className="text-xl mt-5">Spinning... 🎉</div>
      )}
    </div>
  );
};

export default App;
