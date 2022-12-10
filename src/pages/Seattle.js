import React, { useState, useEffect } from "react"
import { Table, Button } from "react-bootstrap";

function Seattle() {
  const [getData, setData] = useState([]);
  useEffect(() => {
    fetch("./GRU_cohort.json")
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        setData(data);

      })
      .catch(function (err) {
        console.log(err, " error");

      });

  }, []);

    var count = 1

//the useEffect is the essential part of the code which fetches data from //public folder 
  return (
    <div className="container">
      <br></br>
      <br></br>
      <h1>Seattle Cohort</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>#</th>
            <th>Full Name</th>
            <th>Candidate's Alias</th>
            <th>Job Title</th>
            <th>Manager's Alias</th>
            <th>Manager's Confirmation</th>
          </tr>
        </thead>
        <tbody>
          {getData.map((index) => (
            <tr key={1}>
                 
              <td style={{ textAlign: "center" }}>{count ++}</td>
              <td>{index.candidate_full_name}</td>
              <td>{index.employee_login}</td>
              <td>{index.internal_job_title}</td>
              <td>{index.keyword[3]}</td>
              <td><select>
              <option>No</option>
                <option>Yes</option>
              </select>
              </td>
            </tr>
          ))} 
        </tbody>
      </Table>
    </div>
  );
}

export default Seattle;