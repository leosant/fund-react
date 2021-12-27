import React from "react";

import Students from "../../data/students";

export default (_) => {
  console.log(Students);

  const students = Students.map((student) => {
    return (
      <li key={student.id}>
        {student.id}: -- {student.name} -- {student.note}
      </li>
    );
  });
  return (
    <div>
      <ul style={{listStyle:"none"}}>{students}</ul>
    </div>
  );
};
