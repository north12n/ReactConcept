import React from "react";
import { useState } from "react";

export default function App() {
  let students = [];

  for (let index = 0; index < 5; index++) {
    let student = {
      id: index,
      name: "Coffee" + index,
    };
    students.push(student);
  }
  const [dataStudent, setDataStudent] = useState(students);
  const [Show, setShow] = useState(dataStudent);

  const deletEStudent = (id) => {
    setDataStudent(dataStudent.filter((item) => item.id != id));
  };

  const table = ()=> (
    <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {dataStudent.map((item) => (
            <tr key={item.id}>
              <th scope="row">{item.id}</th>
              <th>{item.name}</th>
              <th>
                <button onClick={() => deletEStudent(item.id)} type="button" class="btn btn-danger">
                  Danger
                </button>
              </th>
            
            </tr>
            
          ))}
            
        </tbody>
      </table>
  )



  return (
    <div>
      {/* ถ้าเป็นจริงโชว์ตาราง */}
      {Show && table()}
      <button onClick={() => setShow(!Show)} type="button" class="btn btn-primary">
       {Show ? "Hidden" : "Show"}
      </button>
    </div>
  );
}