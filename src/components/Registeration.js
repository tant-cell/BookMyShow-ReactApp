import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useState } from "react";
import axios from "axios";

import Swal from "sweetalert2";
function Registeration() {

  const [username, setUsername] = useState("");
  const [emailaddress, setemailaddress] = useState("");
  const [passwordd, setpasswordd] = useState("");

  function clearInput() {
    setUsername("");
    setemailaddress("");
    setpasswordd("");
  }

  console.log(emailaddress, passwordd);
  async function UserPost() {
    console.log(username, emailaddress, passwordd);
    const userDetails = {
      "username": username,
      "email": emailaddress,
      "password": passwordd
    }
    console.log(userDetails);
    await axios.post('http://localhost:5000/user-register', userDetails).then((data) => {
      Swal.fire({
        title: `<strong>${data.data.message}</strong>`,
        icon: 'success',

        showCloseButton: true
      });
      clearInput()
    })
      .catch((err) => Swal.fire({
        title: '<strong>Server Error</strong>',
        icon: 'error',

        showCloseButton: true

      }));
    await axios.post('http://localhost:5000/user-register', userDetails);
    //.log(response);



  }

  return (
    <div >
      <Container style={{ padding: "5%" }}>
        <Form>

          <Form.Group className="mb-3" >
            <Form.Label>Username</Form.Label>
            <Form.Control value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter username" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control value={emailaddress} onChange={(e) => setemailaddress(e.target.value)} type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control value={passwordd} onChange={(e) => setpasswordd(e.target.value)} type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" onClick={UserPost}>
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default Registeration;