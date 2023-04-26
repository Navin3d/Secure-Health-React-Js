import React, { useState } from "react";

function labtest() {
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
            <th>Test</th>
            <th>Low value</th>
            <th>High value</th>
            <th>Result value</th>
            <th>Measure value</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>
                <input
                  type="Text"
                  name="Year"
                  value={row.year}
                  onChange={(event) => handleInputChange(event, index)}
                />
              </td>
              <td>
                <input
                  type="number"
                  name="Lowvalue"
                  value={row.Lowvalue}
                  onChange={(event) => handleInputChange(event, index)}
                />
              </td>
              <td>
              <input
                  type="number"
                  name="Residualproblem"
                  value={row.Residualproblem}
                  onChange={(event) => handleInputChange(event, index)}
                />
              </td>
              <td>
              <input
                  type="number"
                  name="result"
                  value={row.result}
                  onChange={(event) => handleInputChange(event, index)}
                />
              </td>
              <td>
              <input
                  type="number"
                  name="Measure"
                  value={row.Measure}
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

export default labtest;
