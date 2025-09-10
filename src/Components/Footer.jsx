import React from "react";

export default function Footer({ number, state, capital, slogan }) {
  return (
    <tr className="border-b odd:bg-white even:bg--600 hover:bg-green-300 transition">
      <td className="px-4 py-2 font-medium">{number}</td>
      <td className="px-4 py-2 bg-green-500">{state}</td>
      <td className="px-4 py-2">{capital}</td>
      <td className="px-4 py-2 italic text-gray-600 bg-green-500">{slogan}</td>
    </tr>
  );
}
