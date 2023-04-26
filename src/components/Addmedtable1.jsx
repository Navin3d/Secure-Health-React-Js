import React, { useState } from "react";

function Table_acc() {
  const [data, setData] = useState([{ name: "", age: "" }]);

  const addRow = () => {
    setData([...data, { name: "", age: "" }]);
  };

//   const deleteRow = (index) => {
//     const newData = [...data];
//     newData.splice(index, 1);
//     setData(newData);
//   };

  const handleInputChange = (event, index) => {
    const { name, value } = event.target;
    const newData = [...data];
    newData[index][name] = value;
    setData(newData);
  };
//   Year	Type of Accident	Residual problem

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Type of Accident</th>
            <th>Residual problem</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>
                <input
                  type="number"
                  name="Year"
                  value={row.year}
                  onChange={(event) => handleInputChange(event, index)}
                />
              </td>
              <td>
                <input
                  type="Text"
                  name="acc"
                  value={row.acc}
                  onChange={(event) => handleInputChange(event, index)}
                />
              </td>
              <td>
              <input
                  type="Text"
                  name="Residualproblem"
                  value={row.Residualproblem}
                  onChange={(event) => handleInputChange(event, index)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button class="newrow-btn" type="button" onClick={addRow}>
        Add Row
      </button>
    </>
  );
}

export default Table_acc;
