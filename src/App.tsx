import { useState, useEffect } from "react";

export default function App() {
  const [font, setFont] = useState("text-9xl font-sans text-lime-800");

  const [num, setNum] = useState(1);
  let intId: number;

  function updateFont() {
    intId = setInterval(() => {
      if (font === "text-9xl font-sans text-lime-800") {
        setFont("text-9xl font-mono text-white");
      } else if (font === "text-9xl font-mono text-white") {
        setFont("text-9xl font-serif text-blue-800");
      } else {
        setFont("text-9xl font-sans text-lime-800");
      }
      setNum(num + 10);
      console.log(num);
    }, num);
  }

  function stopme() {
    clearInterval(intId);
  }

  function cont() {
    updateFont();
  }

  function restart() {
    stopme();
    setNum(1);
    updateFont();
  }

  useEffect(() => {
    updateFont();
    return () => clearInterval(intId); // Cleanup interval on component unmount or before effect runs again
    restart();
    // return () => clearInterval(intId);
  }, [font, num]);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-black">
      <div className={font}>Hello, Taariq!</div>
      <button
        onClick={stopme}
        className="border-lime-700 border-4 px-3 py-1 text-purple-500 rounded-md hover:border-purple-500"
      >
        CLICK
      </button>

      <button onClick={cont} className="text-white">
        start
      </button>

      <button onClick={restart} className="text-white">
        restart
      </button>
    </div>
  );
}
