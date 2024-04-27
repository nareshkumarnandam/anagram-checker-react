import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [anagramResult, setAnagramResult] = useState(null);
  const isAnagaramChecker = () => {
    const result = isAnagram(input1, input2);
    setAnagramResult(result);
  }


  const isAnagram = (str1, str2) =>{
    const normalizeString = (str) => str.replace(/[^\w]/g, '').toLowerCase();
    const normalizeString1 = normalizeString(str1);
    const normalizeString2 = normalizeString(str2);

    return normalizeString1.split('').sort().join('') === normalizeString2.split('').sort().join('');
  }

  return (
    <div className="App">
      <input
        type="text"
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
        placeholder="Enter first word"
      />
      <input
        type="text"
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
        placeholder="Enter second word"
      />
      <button onClick={isAnagaramChecker}>Check Anagaram</button>
      {
        anagramResult !== null && (
          <p>{anagramResult ? 'The words/phrases are anagrams' : 'The words/phrases are not anagrams'}</p>
        )
      }
    </div>
  );
};

export default App;
