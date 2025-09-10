import React from "react";
import states from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="p-6 overflow-x-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Nigeria States, Capitals and Slogans
      </h1>

      <table className="w-full border border-gray-300 border-collapse">
        <thead className="bg-gray-200 sticky top-0 z-10">
          <tr>
            <th className="px-4 py-2 border  bg-green-600">ID</th>
            <th className="px-4 py-2 border">State</th>
            <th className="px-4 py-2 border  bg-green-600">Capital</th>
            <th className="px-4 py-2 border">Slogan</th>
          </tr>
        </thead>
        <tbody>
          {states.map((item, index) => (
            <Footer
              key={index}
              number={index + 1}
              state={item.state}
              capital={item.capital}
              slogan={item.slogan}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
