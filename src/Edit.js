import axios from "axios";
import React from "react";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function Edit({handleClose,update,email,fetchData}) {
    const  _id = update._id;
    console.log(update,"jun");
  const [updateEmail, setUpdateEmail] = useState(update.email);
  const [updateName, setUpdateName] = useState(update.name);
    
  function updateTask(_id) {
    console.log(_id, "hdghjj")
    const user={  name: updateName, email: updateEmail };
      console.log(user,"ll");
      axios.put(`http://localhost:3000/users/${_id}`,
      {headers:{"Content-Type": "application/json",}, 
      user})
      .then(function (res) {
        fetchData()
      });
      setUpdateEmail("");
      setUpdateName("");
    
  }
  console.log(updateName, "new");
  return (
    <>
      <Form >
        <Form.Group className="mt-2">
          <Form.Control
            type="text"
            name="updateName"
            placeholder="Enter Name"
            value={updateName}
            onChange={(e) => setUpdateName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mt-2">
          <Form.Control
            type="text"
            name="updateEmail"
            placeholder="Enter Email"
            value={updateEmail}

            onChange={(e) => setUpdateEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Button
          className="mt-3"
          variant="success"
          
          onClick={()=>{updateTask(_id);
            handleClose()}}
        >
          Update Task
        </Button>
      </Form>
    </>
  );
}