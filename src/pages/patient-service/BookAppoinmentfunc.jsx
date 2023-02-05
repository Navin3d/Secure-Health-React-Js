// import React, { useState } from 'react';

// function BookAppoinmentfunc() {
//   const [message, setMessage] = useState('');

//   const handleClick = () => {
//     setMessage('Hello');
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Click Me</button>
//       {message && <h1>{message}</h1>}
//     </div>
//   );
// }

// export default BookAppoinmentfunc;


import React, { useState } from "react";

function BookAppoinmentfunc() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={inputValue} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default BookAppoinmentfunc;
