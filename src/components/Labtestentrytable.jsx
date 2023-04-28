import React, { useState } from "react";

function Labtest_entry() {
  const [data, setData] = useState([{ name: "", age: "" }]);

  const addRow = () => {
    setData([...data, { name: "", age: "" }]);
  };

  const deleteRow = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  const handleInputChange = (event, index) => {
    const { name, value } = event.target;
    const newData = [...data];
    newData[index][name] = value;
    setData(newData);
  };

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
                  type="text"
                  name="doc"
                  value={row.doc}
                  onChange={(event) => handleInputChange(event, index)}
                />
              </td>
              <td>
                <input
                  type="number"
                  name="Year"
                  value={row.Year}
                  onChange={(event) => handleInputChange(event, index)}
                />
              </td>
              <td>
              <input
                  type="number"
                  name="svc"
                  value={row.svc}
                  onChange={(event) => handleInputChange(event, index)}
                />
              </td>
              <td>
              <input
                  type="number"
                  name="milligrams"
                  value={row.milligrams}
                  onChange={(event) => handleInputChange(event, index)}
                />
              </td>
              <td>
              <input
                  type="number"
                  name="data"
                  value={row.data}
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

export default Labtest_entry;
