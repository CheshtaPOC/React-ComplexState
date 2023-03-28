import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function updateContact(event) {
    const { name, value } = event.target;
    setContact((preVal) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: preVal.lName,
          email: preVal.email
        };
      } else if (name === "lName") {
        return {
          fName: preVal.fName,
          lName: value,
          email: preVal.email
        };
      } else if (name === "email") {
        return {
          fName: preVal.fName,
          lName: preVal.lName,
          email: value
        };
      }
    });
  }
  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          value={contact.fName}
          name="fName"
          onChange={updateContact}
          placeholder="First Name"
        />
        <input
          value={contact.lName}
          name="lName"
          onChange={updateContact}
          placeholder="Last Name"
        />
        <input
          value={contact.email}
          name="email"
          onChange={updateContact}
          placeholder="Email"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
