import React, { useEffect, useState } from "react";
import axios from "axios";

const ComA = () => {
  const [num, setNum] = useState();
  const [data, setData] = useState([]);
  useEffect(() => {
    // alert('hi');
    async function getData() {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/todos/`
      );
      console.log(res.data);
      setData(res.data);
    }
    getData();
  });
  return (
    <>
      <h1>You choose {num} Value</h1>
      <select
        value={num}
        onChange={(event) => {
          setNum(event.target.value);
        }}
      >
        <option value="1">1</option>
        <option value="25">25</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>



      <ul>
        {data.map((item, index) => {
          return <li key={index}>{item.title}</li>;
        })}
        
      </ul>
    </>
  );
};

export default ComA;
