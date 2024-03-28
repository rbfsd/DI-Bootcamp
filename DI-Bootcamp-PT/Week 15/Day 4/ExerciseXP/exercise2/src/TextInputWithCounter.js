import React, { useRef, useState } from "react";

const CharacterCounter = () => {
  const inputRef = useRef(null);
  const [charCount, setCharCount] = useState(0);

  const handleInputChange = () => {
    // Step 3: Use the useRef reference to track the length of the text in the input
    const inputValue = inputRef.current.value;
    // Update the counter display accordingly
    setCharCount(inputValue.length);
  };

  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        onChange={handleInputChange}
        placeholder="Type something..."
      />
      {/* Display the character count */}
      <p>Character Count: {charCount}</p>
    </div>
  );
};

export default CharacterCounter;
