import MoveDot from "./MoveDot";
import { useState } from "react";

const solutionContainer = {
  display: "flex",
  gap: "4px",
  flexDirection: "column",
};

const ObjectInState = () => {
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setPerson((prev) => ({ ...prev, [name]: value }));
    
  };

  return (
    <>
      <div>
        <MoveDot />
      </div>

      <div style={solutionContainer}>
        <label>
          First Name:
          <input
            name="firstName"
            value={person.firstName}
            onChange={handleOnChange}
          />
        </label>
        <label>
          Last Name:
          <input
            name="lastName"
            value={person.lastName}
            onChange={handleOnChange}
          />
        </label>
        <label>
          Email:
          <input name="email" value={person.email} onChange={handleOnChange} />
        </label>

        <p>
          {person.firstName} {person.lastName} {person.email}
        </p>
      </div>
    </>
  );
};

export default ObjectInState;
